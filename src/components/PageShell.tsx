import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Lang } from '@/content/types';
import { Logo } from './Logo';
import { LangSwitch } from './LangSwitch';
import { ui } from '@/content/pages';

type Page = 'privacy' | 'contact' | 'delete';
const FOOT: Record<Lang, { privacy: string; contact: string; del: string; tagline: string }> = {
  en: { privacy: 'Privacy', contact: 'Contact', del: 'Delete my data', tagline: 'Little heads, big ideas' },
  bn: { privacy: 'গোপনীয়তা', contact: 'যোগাযোগ', del: 'তথ্য মুছুন', tagline: 'ছোট্ট মাথা, বড় ভাবনা' },
};

export function PageShell({ lang, page, children }: { lang: Lang; page: Page; children: ReactNode }) {
  const f = FOOT[lang];
  const font = lang === 'bn' ? "'Hind Siliguri','Inter',system-ui,sans-serif" : "'Inter','Hind Siliguri',system-ui,sans-serif";
  const link = { color: '#FFF6E0', fontSize: 15, padding: '10px 0' } as const;
  return (
    <div lang={lang} style={{ fontFamily: font, color: '#111111', background: '#FFF6E0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a className="hm-skip" href="#main">{lang === 'bn' ? 'মূল অংশে যান' : 'Skip to content'}</a>
      <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(255,251,240,0.94)', backdropFilter: 'blur(8px)', borderBottom: '2px solid #111111' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Link href={`/${lang}/`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#111111' }}>
            <Logo />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 26 }}>Hmmly</span>
          </Link>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div role="group" aria-label="Language / ভাষা" style={{ display: 'flex', padding: 4, gap: 4, border: '2px solid #111111', borderRadius: 999, background: '#FFFFFF' }}>
              <LangSwitch lang={lang} page={page} />
            </div>
            <Link href={`/${lang}/`} style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, padding: '0 18px', borderRadius: 999, background: '#111111', color: '#FFF6E0', textDecoration: 'none', fontWeight: 700, fontSize: 15, boxShadow: '0 4px 0 #E96B45' }}>{ui[lang].home}</Link>
          </div>
        </div>
      </header>
      <main id="main" style={{ flex: 1, width: '100%', maxWidth: 760, margin: '0 auto', padding: '48px 20px 88px' }}>{children}</main>
      <footer style={{ background: '#111111', color: '#FFF6E0', padding: '40px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Caveat','Atma',cursive", fontSize: 22, color: '#FFB82E' }}>{f.tagline}</span>
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
            <Link href={`/${lang}/privacy/`} style={link}>{f.privacy}</Link>
            <Link href={`/${lang}/contact/`} style={link}>{f.contact}</Link>
            <Link href={`/${lang}/delete-account/`} style={link}>{f.del}</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export const h1Style = { margin: '0 0 12px', fontFamily: "'Space Grotesk','Hind Siliguri',sans-serif", fontSize: 'clamp(30px,4vw,44px)', letterSpacing: '-0.02em', textWrap: 'balance' } as const;
export const cardStyle = { background: '#FFFFFF', border: '2.5px solid #111111', borderRadius: 22, boxShadow: '0 4px 0 #111111', padding: 24 } as const;
export const fieldStyle = { width: '100%', boxSizing: 'border-box', minHeight: 48, padding: '10px 14px', border: '2.5px solid #111111', borderRadius: 14, background: '#FFFFFF', font: 'inherit', fontSize: 16, color: '#111111' } as const;
export const labelStyle = { display: 'flex', flexDirection: 'column', gap: 6, fontWeight: 600, fontSize: 15 } as const;
export const btnStyle = { minHeight: 52, padding: '0 24px', border: '2.5px solid #111111', borderRadius: 999, background: '#FFB82E', color: '#111111', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 4px 0 #111111' } as const;
export const msgStyle = (ok: boolean) => ({ margin: '12px 0 0', padding: '12px 16px', borderRadius: 14, border: '2px solid #111111', background: ok ? '#DFF5D8' : '#FFE0D6', fontSize: 15, lineHeight: 1.5 }) as const;
