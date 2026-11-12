'use client';

import { useCallback, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { firebaseReady } from '@/lib/firebase-config';
import {
  FULFIL, adminSignOut, googleSignIn, isAdminUser, loadDeletionRequests, loadGifts, loadMessages, removeMsg, setFulfilment, setMsgStatus, watchAuth,
  type Fulfil, type GiftRow, type MsgRow,
} from '@/lib/admin';
import { btnStyle, cardStyle, fieldStyle, h1Style, msgStyle } from './PageShell';

type Tab = 'gifts' | 'messages' | 'deletions';
const when = (ms: number) => (ms ? new Date(ms).toLocaleString() : '—');

export function AdminApp() {
  const [user, setUser] = useState<User | null | undefined>(firebaseReady ? undefined : null);
  const [tab, setTab] = useState<Tab>('gifts');
  const [gifts, setGifts] = useState<GiftRow[]>([]);
  const [msgs, setMsgs] = useState<MsgRow[]>([]);
  const [dels, setDels] = useState<MsgRow[]>([]);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => (firebaseReady ? watchAuth(setUser) : undefined), []);
  const ok = isAdminUser(user ?? null);

  const refresh = useCallback(async () => {
    setBusy(true); setErr('');
    try {
      const [g, m, d] = await Promise.all([loadGifts(), loadMessages(), loadDeletionRequests()]);
      setGifts(g); setMsgs(m); setDels(d);
    } catch (e) { setErr((e as Error).message || 'Could not load'); } finally { setBusy(false); }
  }, []);
  useEffect(() => { if (ok) void Promise.resolve().then(refresh); }, [ok, refresh]);

  const wrap = { maxWidth: 1000, margin: '0 auto', padding: '32px 20px 80px', fontFamily: "'Inter',system-ui,sans-serif", color: '#111' } as const;
  if (!firebaseReady) return <main style={wrap}><h1 style={h1Style}>Hmmly admin</h1><p style={msgStyle(false)}>Firebase web config is missing (NEXT_PUBLIC_FIREBASE_API_KEY / APP_ID).</p></main>;
  if (user === undefined) return <main style={wrap}><p>Loading…</p></main>;
  if (!user) return (
    <main style={wrap}>
      <h1 style={h1Style}>Hmmly admin</h1>
      <p>Sign in with the Google account that owns Hmmly.</p>
      <button type="button" style={btnStyle} onClick={() => googleSignIn().catch((e: Error) => setErr(e.message))}>Sign in with Google</button>
      {err && <p style={msgStyle(false)}>{err}</p>}
    </main>
  );
  if (!ok) return (
    <main style={wrap}>
      <h1 style={h1Style}>No access</h1>
      <p>{user.email} is not an admin of Hmmly.</p>
      <button type="button" style={btnStyle} onClick={() => adminSignOut()}>Sign out</button>
    </main>
  );

  const newMsgs = msgs.filter((m) => m.status === 'new').length;
  const newDels = dels.filter((m) => m.status === 'new').length;
  const tabBtn = (t: Tab, label: string) => (
    <button key={t} type="button" onClick={() => setTab(t)} aria-pressed={tab === t} style={{ ...btnStyle, minHeight: 44, boxShadow: 'none', background: tab === t ? '#111' : '#fff', color: tab === t ? '#FFB82E' : '#111' }}>{label}</button>
  );

  return (
    <main style={wrap}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
        <h1 style={{ ...h1Style, margin: 0 }}>Hmmly admin</h1>
        <span style={{ marginLeft: 'auto', fontSize: 14 }}>{user.email}</span>
        <button type="button" style={{ ...btnStyle, minHeight: 40, boxShadow: 'none', background: '#fff' }} onClick={refresh} disabled={busy}>{busy ? 'Loading…' : 'Refresh'}</button>
        <button type="button" style={{ ...btnStyle, minHeight: 40, boxShadow: 'none', background: '#fff' }} onClick={() => adminSignOut()}>Sign out</button>
      </div>
      <div role="group" aria-label="Sections" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        {tabBtn('gifts', `Gifts (${gifts.length})`)}{tabBtn('messages', `Messages (${newMsgs} new)`)}{tabBtn('deletions', `Deletion requests (${newDels} new)`)}
      </div>
      {err && <p style={msgStyle(false)}>{err}</p>}
      {tab === 'gifts' && <GiftList rows={gifts} onChange={refresh} />}
      {tab === 'messages' && <MsgList col="supportMessages" rows={msgs} onChange={refresh} />}
      {tab === 'deletions' && <MsgList col="deletionRequests" rows={dels} onChange={refresh} />}
    </main>
  );
}

function GiftList({ rows, onChange }: { rows: GiftRow[]; onChange: () => void }) {
  if (!rows.length) return <p>No gifts claimed yet.</p>;
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {rows.map((g) => <GiftCard key={g.uid} g={g} onChange={onChange} />)}
    </div>
  );
}

function GiftCard({ g, onChange }: { g: GiftRow; onChange: () => void }) {
  const [status, setStatus] = useState<Fulfil>(g.status);
  const [note, setNote] = useState(g.note);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');
  const dirty = status !== g.status || note !== g.note;
  const row = (k: string, v: string) => <div style={{ display: 'flex', gap: 10 }}><b style={{ minWidth: 110 }}>{k}</b><span style={{ overflowWrap: 'anywhere' }}>{v || '—'}</span></div>;
  return (
    <section style={{ ...cardStyle, display: 'grid', gap: 6, fontSize: 15 }}>
      {row('Recipient', g.name)}{row('Address', g.address)}{row('Contact', g.phone)}{row('Method', g.method)}
      {row('Child', g.kidName ? `${g.kidName}${g.kidAge ? `, ${g.kidAge}` : ''}` : '')}{row('Parent phone', g.parentPhone)}{row('Games played', String(g.games))}{row('Updated', when(g.when))}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
        <select aria-label="Fulfilment status" value={status} onChange={(e) => setStatus(e.target.value as Fulfil)} style={{ ...fieldStyle, width: 'auto', minHeight: 44 }}>
          {FULFIL.map((f) => <option key={f}>{f}</option>)}
        </select>
        <input aria-label="Note" placeholder="Note (tracking no., etc.)" value={note} maxLength={500} onChange={(e) => setNote(e.target.value)} style={{ ...fieldStyle, flex: 1, minWidth: 180, minHeight: 44 }} />
        <button type="button" disabled={!dirty || saving} style={{ ...btnStyle, minHeight: 44, opacity: !dirty || saving ? 0.5 : 1 }}
          onClick={async () => { setSaving(true); try { await setFulfilment(g.uid, status, note); setMsg('Saved'); onChange(); } catch (e) { setMsg((e as Error).message); } finally { setSaving(false); } }}>Save</button>
        {msg && <span role="status">{msg}</span>}
      </div>
    </section>
  );
}

function MsgList({ col, rows, onChange }: { col: 'supportMessages' | 'deletionRequests'; rows: MsgRow[]; onChange: () => void }) {
  if (!rows.length) return <p>Nothing here yet.</p>;
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {rows.map((m) => (
        <section key={m.id} style={{ ...cardStyle, opacity: m.status === 'done' ? 0.65 : 1 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'baseline' }}>
            <b>{m.name}</b>
            <a href={`mailto:${m.email}`} style={{ overflowWrap: 'anywhere' }}>{m.email}</a>
            <span style={{ marginLeft: 'auto', fontSize: 13, color: '#62625C' }}>{m.lang.toUpperCase()} · {when(m.when)}</span>
          </div>
          <p style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', margin: '10px 0' }}>{m.message}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" style={{ ...btnStyle, minHeight: 40, boxShadow: 'none' }} onClick={async () => { await setMsgStatus(col, m.id, m.status === 'done' ? 'new' : 'done'); onChange(); }}>{m.status === 'done' ? 'Reopen' : 'Mark done'}</button>
            {m.status === 'done' && <button type="button" style={{ ...btnStyle, minHeight: 40, boxShadow: 'none', background: '#fff' }} onClick={async () => { await removeMsg(col, m.id); onChange(); }}>Delete</button>}
          </div>
        </section>
      ))}
    </div>
  );
}
