'use client';

/* eslint-disable @next/next/no-img-element */
import { useRef, useState, type FormEvent } from 'react';
import type { Lang } from '@/content/types';
import { BOOK_IMAGES, books } from '@/content/books';
import { OrderError, orderTotal, placeOrder } from '@/lib/orders';
import { BOOK_DELIVERY, BOOK_PRICE } from '@/lib/site';
import { throttle } from '@/lib/validate';
import { btnStyle, cardStyle, fieldStyle, h1Style, labelStyle, msgStyle } from './PageShell';

let last = 0;
const store = { get: () => last, set: (n: number) => { last = n; } };
const BN = '০১২৩৪৫৬৭৮৯';
const money = (n: number, lang: Lang) => '৳' + (lang === 'bn' ? String(n).replace(/\d/g, (d) => BN[Number(d)]) : String(n));
const num = (n: number, lang: Lang) => (lang === 'bn' ? String(n).replace(/\d/g, (d) => BN[Number(d)]) : String(n));

export function BookStore({ lang }: { lang: Lang }) {
  const t = books[lang];
  const [qty, setQty] = useState(1);
  const [state, setState] = useState<'idle' | 'busy' | string>('idle');
  const [done, setDone] = useState<{ orderNo: string; total: number } | null>(null);
  const [zoom, setZoom] = useState<string | null>(null);
  const hp = useRef<HTMLInputElement>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    if (hp.current?.value) { setDone({ orderNo: 'HM-00000', total: orderTotal(qty) }); return; }
    if (!throttle(store, 20_000)) { setState(t.tooMany); return; }
    setState('busy');
    try {
      const r = await placeOrder({
        name: String(f.get('name') ?? ''), phone: String(f.get('phone') ?? ''), district: String(f.get('district') ?? ''),
        address: String(f.get('address') ?? ''), note: String(f.get('note') ?? ''), qty,
      }, lang);
      setDone(r); setState('idle'); form.reset(); setQty(1);
    } catch (err) {
      last = 0;
      const code = err instanceof OrderError ? err.code : 'failed';
      setState(code === 'required' ? t.required : code === 'phone' ? t.phoneBad : code === 'unavailable' ? t.unavailable : t.failed);
    }
  }

  const row = (k: string, v: string, bold = false) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontWeight: bold ? 700 : 500, fontSize: bold ? 18 : 15 }}><span>{k}</span><span>{v}</span></div>
  );

  return (
    <div>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,4vw,56px)', alignItems: 'center' }}>
        <button type="button" onClick={() => setZoom(BOOK_IMAGES.cover)} aria-label={t.coverAlt}
          style={{ flex: '1 1 280px', maxWidth: 380, margin: '0 auto', padding: 0, border: 0, background: 'none', cursor: 'zoom-in' }}>
          <img src={BOOK_IMAGES.cover} alt={t.coverAlt} width={794} height={1123} style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 14, boxShadow: '0 24px 50px rgba(17,17,17,0.22)' }} />
        </button>
        <div style={{ flex: '1 1 340px', minWidth: 0 }}>
          <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 999, background: '#FFB82E', fontWeight: 700, fontSize: 14 }}>{t.badge}</span>
          <h1 style={{ ...h1Style, margin: '14px 0 8px' }}>{t.title}</h1>
          <p style={{ margin: '0 0 14px', fontSize: 18, fontWeight: 600, color: '#3A3A36' }}>{t.subtitle}</p>
          <p style={{ margin: '0 0 18px', fontSize: 17, lineHeight: 1.65 }}>{t.lead}</p>
          <ul style={{ margin: '0 0 22px', padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
            {t.perks.map((p) => (
              <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 16 }}>
                <span aria-hidden="true" style={{ flex: 'none', width: 22, height: 22, borderRadius: '50%', background: '#DFF5D8', color: '#1E6B2E', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'Space Grotesk','Hind Siliguri',sans-serif", fontSize: 34, fontWeight: 700 }}>{money(BOOK_PRICE, lang)}</span>
            <a href="#order" style={{ ...btnStyle, display: 'inline-flex', alignItems: 'center', textDecoration: 'none', background: '#E96B45', color: '#fff' }}>{t.place}</a>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 64 }} aria-labelledby="peek">
        <h2 id="peek" style={{ ...h1Style, fontSize: 'clamp(24px,3vw,32px)' }}>{t.previewTitle}</h2>
        <p style={{ margin: '0 0 20px', color: '#62625C' }}>{t.previewNote}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
          {BOOK_IMAGES.pages.map((p) => (
            <button key={p.src} type="button" onClick={() => setZoom(p.src)} style={{ padding: 0, border: 0, background: 'none', cursor: 'zoom-in', textAlign: 'left' }}>
              <img loading="lazy" src={p.src} alt={p[lang]} width={794} height={1123} style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 12, border: '1.5px solid rgba(17,17,17,0.14)', boxShadow: '0 8px 24px rgba(17,17,17,0.10)' }} />
              <span style={{ display: 'block', marginTop: 8, fontSize: 14, fontWeight: 600 }}>{p[lang]}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="order" style={{ marginTop: 64, scrollMarginTop: 90, maxWidth: 640 }} aria-labelledby="ordt">
        <h2 id="ordt" style={{ ...h1Style, fontSize: 'clamp(24px,3vw,32px)' }}>{t.orderTitle}</h2>
        {done ? (
          <div style={cardStyle} role="status" aria-live="polite">
            <h3 style={{ margin: '0 0 8px', fontSize: 22 }}>{t.doneTitle}</h3>
            <p style={{ margin: '0 0 12px', lineHeight: 1.6 }}>{t.doneBody}</p>
            <p style={{ margin: '0 0 16px', fontSize: 18 }}>{t.orderNo}: <b>{done.orderNo}</b> · {t.total}: <b>{money(done.total, lang)}</b></p>
            <button type="button" style={btnStyle} onClick={() => setDone(null)}>{t.another}</button>
          </div>
        ) : (
          <>
            <p style={{ margin: '0 0 20px', fontSize: 17, lineHeight: 1.6 }}>{t.orderLead}</p>
            <form onSubmit={submit} noValidate style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <label style={labelStyle}>{t.name}<input name="name" autoComplete="name" maxLength={80} required style={fieldStyle} /></label>
              <label style={labelStyle}>{t.phone}<input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={30} placeholder="01XXXXXXXXX" required style={fieldStyle} /></label>
              <label style={labelStyle}>{t.district}<input name="district" autoComplete="address-level2" maxLength={60} required style={fieldStyle} /></label>
              <label style={labelStyle}>{t.address}<textarea name="address" rows={3} autoComplete="street-address" maxLength={300} required style={{ ...fieldStyle, resize: 'vertical' }} /></label>
              <div style={labelStyle}>
                <span id="qtyl">{t.qty}</span>
                <div role="group" aria-labelledby="qtyl" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, alignSelf: 'flex-start' }}>
                  <button type="button" aria-label="−" onClick={() => setQty((q) => Math.max(1, q - 1))} style={{ ...btnStyle, minHeight: 48, width: 48, padding: 0, background: '#fff', boxShadow: 'none' }}>−</button>
                  <output aria-live="polite" style={{ minWidth: 40, textAlign: 'center', fontSize: 20, fontWeight: 700 }}>{num(qty, lang)}</output>
                  <button type="button" aria-label="+" onClick={() => setQty((q) => Math.min(10, q + 1))} style={{ ...btnStyle, minHeight: 48, width: 48, padding: 0, background: '#fff', boxShadow: 'none' }}>+</button>
                </div>
              </div>
              <label style={labelStyle}>{t.note}<input name="note" maxLength={300} placeholder={t.notePh} style={fieldStyle} /></label>
              <input ref={hp} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
              <div style={{ display: 'grid', gap: 6, padding: '14px 16px', borderRadius: 14, background: '#F4F2EC' }}>
                {row(`${t.price} × ${num(qty, lang)}`, money(BOOK_PRICE * qty, lang))}
                {row(t.delivery, BOOK_DELIVERY ? money(BOOK_DELIVERY, lang) : t.free)}
                {row(`${t.total} (${t.cod})`, money(orderTotal(qty), lang), true)}
              </div>
              <div><button type="submit" disabled={state === 'busy'} style={{ ...btnStyle, background: '#E96B45', color: '#fff', opacity: state === 'busy' ? 0.6 : 1 }}>{state === 'busy' ? t.placing : t.place}</button></div>
              <div role="status" aria-live="polite">
                {state !== 'idle' && state !== 'busy' && <p style={msgStyle(false)}>{state}</p>}
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#62625C' }}>{t.consent}</p>
            </form>
          </>
        )}
      </section>

      {zoom && (
        <div role="dialog" aria-modal="true" onClick={() => setZoom(null)} onKeyDown={(e) => { if (e.key === 'Escape') setZoom(null); }}
          style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(17,17,17,0.82)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <img src={zoom} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 10 }} />
          <button type="button" autoFocus onClick={() => setZoom(null)} aria-label={t.close}
            style={{ position: 'absolute', top: 14, right: 14, width: 48, height: 48, borderRadius: '50%', border: 0, background: '#fff', fontSize: 24, cursor: 'pointer' }}>×</button>
        </div>
      )}
    </div>
  );
}
