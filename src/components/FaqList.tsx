'use client';

import { useId, useState } from 'react';
import type { Faq } from '@/content/types';

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <>
      {items.map((q, i) => {
        const on = open === i;
        return (
          <div key={q.q} className={q.side} style={{ background: '#FFFFFF', border: '2.5px solid #111111', borderRadius: 22, boxShadow: '0 4px 0 #111111', overflow: 'hidden' }}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                id={`${base}-b${i}`}
                aria-expanded={on}
                aria-controls={`${base}-p${i}`}
                onClick={() => setOpen(on ? -1 : i)}
                style={{ width: '100%', minHeight: 60, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: 'transparent', border: 0, cursor: 'pointer', textAlign: 'left', fontFamily: "'Space Grotesk','Hind Siliguri',sans-serif", fontSize: 18, fontWeight: 700, color: '#111111' }}
              >
                <span>{q.q}</span>
                <span aria-hidden="true" style={{ flex: 'none', width: 32, height: 32, borderRadius: '50%', background: on ? '#FFB82E' : '#FFFFFF', border: '2px solid #111111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, lineHeight: 1 }}>
                  {on ? '–' : '+'}
                </span>
              </button>
            </h3>
            <p id={`${base}-p${i}`} role="region" aria-labelledby={`${base}-b${i}`} hidden={!on} style={{ margin: 0, padding: '0 20px 20px', fontSize: 16, lineHeight: 1.65, color: '#62625C' }}>
              {q.a}
            </p>
          </div>
        );
      })}
    </>
  );
}
