'use client';

import { useRef, useState, type FormEvent } from 'react';
import type { Lang } from '@/content/types';
import { ui } from '@/content/pages';
import { SiteError, sendContact, sendDeletionRequest } from '@/lib/api';
import { throttle } from '@/lib/validate';
import { btnStyle, fieldStyle, labelStyle, msgStyle } from './PageShell';

type Kind = 'contact' | 'deletion';
let last = 0;
const store = { get: () => last, set: (n: number) => { last = n; } };

export function ContactForm({ lang, kind = 'contact', defaultMessage = '' }: { lang: Lang; kind?: Kind; defaultMessage?: string }) {
  const u = ui[lang];
  const [state, setState] = useState<'idle' | 'busy' | 'ok' | string>('idle');
  const hp = useRef<HTMLInputElement>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (hp.current?.value) { setState('ok'); return; } // honeypot: pretend success
    if (!throttle(store, 30_000)) { setState(u.tooMany); return; }
    setState('busy');
    try {
      const v = { name: String(f.get('name') ?? ''), email: String(f.get('email') ?? ''), message: String(f.get('message') ?? '') };
      await (kind === 'contact' ? sendContact(v, lang) : sendDeletionRequest(v, lang));
      setState('ok');
      e.currentTarget.reset();
    } catch (err) {
      last = 0;
      const code = err instanceof SiteError ? err.code : 'failed';
      setState(code === 'required' ? u.required : code === 'email' ? u.emailBad : u.failed);
    }
  }

  return (
    <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <label style={labelStyle}>{u.name}<input name="name" autoComplete="name" maxLength={80} required style={fieldStyle} /></label>
      <label style={labelStyle}>{u.email}<input name="email" type="email" autoComplete="email" maxLength={120} required style={fieldStyle} /></label>
      <label style={labelStyle}>{u.message}<textarea name="message" rows={6} maxLength={2000} required defaultValue={defaultMessage} style={{ ...fieldStyle, resize: 'vertical' }} /></label>
      <input ref={hp} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
      <div><button type="submit" disabled={state === 'busy'} style={{ ...btnStyle, opacity: state === 'busy' ? 0.6 : 1 }}>{state === 'busy' ? u.sending : kind === 'contact' ? u.send : u.delFormSend}</button></div>
      <div role="status" aria-live="polite">
        {state === 'ok' && <p style={msgStyle(true)}>{kind === 'contact' ? u.sent : u.delFormSent}</p>}
        {state !== 'idle' && state !== 'busy' && state !== 'ok' && <p style={msgStyle(false)}>{state}</p>}
      </div>
    </form>
  );
}
