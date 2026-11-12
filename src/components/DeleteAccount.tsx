'use client';

import { useRef, useState } from 'react';
import type { ConfirmationResult } from 'firebase/auth';
import type { Lang } from '@/content/types';
import { ui } from '@/content/pages';
import { firebaseReady } from '@/lib/firebase-config';
import { toE164 } from '@/lib/validate';
import { DelError, confirmCode, deleteMyData, sendCode } from '@/lib/deleteData';
import { btnStyle, cardStyle, fieldStyle, labelStyle, msgStyle } from './PageShell';

type Step = 'phone' | 'code' | 'confirm' | 'done';

export function DeleteAccount({ lang }: { lang: Lang }) {
  const u = ui[lang];
  const [step, setStep] = useState<Step>('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [sure, setSure] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [note, setNote] = useState('');
  const conf = useRef<ConfirmationResult | null>(null);
  const box = useRef<HTMLDivElement>(null);

  const text = (e: unknown) => {
    const k = e instanceof DelError ? e.kind : 'other';
    return { badNumber: u.delBadNumber, wrongCode: u.delWrongCode, expired: u.delExpired, tooMany: u.delTooMany, network: u.delNetwork, other: u.delOther }[k];
  };
  async function run(fn: () => Promise<void>) {
    setBusy(true); setErr('');
    try { await fn(); } catch (e) { setErr(text(e)); } finally { setBusy(false); }
  }

  if (!firebaseReady) return <p style={msgStyle(false)}>{u.delNotConfigured}</p>;

  return (
    <div style={cardStyle}>
      {step === 'phone' && (
        <form onSubmit={(e) => { e.preventDefault(); const p = toE164(phone); if (!p) { setErr(u.delBadNumber); return; } void run(async () => { conf.current = await sendCode(p, box.current!); setStep('code'); }); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <label style={labelStyle}>{u.delPhone}
            <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" autoComplete="tel" placeholder="+8801XXXXXXXXX" style={fieldStyle} />
            <small style={{ fontWeight: 400, color: '#62625C' }}>{u.delPhoneHint}</small>
          </label>
          <div><button type="submit" disabled={busy} style={{ ...btnStyle, opacity: busy ? 0.6 : 1 }}>{busy ? u.delWorking : u.delSendCode}</button></div>
        </form>
      )}
      {step === 'code' && (
        <form onSubmit={(e) => { e.preventDefault(); void run(async () => { await confirmCode(conf.current!, code); setStep('confirm'); }); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <label style={labelStyle}>{u.delCode}
            <input value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" maxLength={6} style={{ ...fieldStyle, letterSpacing: 6, fontSize: 22 }} />
          </label>
          <div><button type="submit" disabled={busy || code.length < 6} style={{ ...btnStyle, opacity: busy || code.length < 6 ? 0.6 : 1 }}>{busy ? u.delWorking : u.delVerify}</button></div>
        </form>
      )}
      {step === 'confirm' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 16, lineHeight: 1.5 }}>
            <input type="checkbox" checked={sure} onChange={(e) => setSure(e.target.checked)} style={{ width: 22, height: 22, marginTop: 2 }} />{u.delConfirm}
          </label>
          <div><button type="button" disabled={!sure || busy} onClick={() => run(async () => { const found = await deleteMyData(); setNote(found ? u.delDone : `${u.delNoData} ${u.delDone}`); setStep('done'); })} style={{ ...btnStyle, background: '#E96B45', opacity: !sure || busy ? 0.5 : 1 }}>{busy ? u.delWorking : u.delButton}</button></div>
        </div>
      )}
      {step === 'done' && <p style={{ ...msgStyle(true), margin: 0 }}>{note}</p>}
      <div ref={box} />
      <div role="alert">{err && <p style={msgStyle(false)}>{err}</p>}</div>
      <p style={{ margin: '16px 0 0', fontSize: 12, color: '#62625C' }}>{u.delRecaptcha}</p>
    </div>
  );
}
