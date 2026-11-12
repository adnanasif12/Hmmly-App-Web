'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from './Logo';

export function LangPicker() {
  const router = useRouter();
  useEffect(() => {
    let saved = '';
    try { saved = localStorage.getItem('hmmly-lang') ?? ''; } catch { /* storage may be blocked */ }
    const pick = saved === 'bn' || saved === 'en' ? saved : navigator.language.toLowerCase().startsWith('bn') ? 'bn' : 'en';
    router.replace(`/${pick}/`);
  }, [router]);
  const pill = { display: 'inline-flex', alignItems: 'center', minHeight: 56, padding: '0 28px', borderRadius: 999, border: '2.5px solid #111111', background: '#FFB82E', color: '#111111', fontWeight: 700, fontSize: 20, textDecoration: 'none', boxShadow: '0 4px 0 #111111', fontFamily: "'Hind Siliguri','Inter',sans-serif" } as const;
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#FFF6E0', padding: 20, textAlign: 'center' }}>
      <div style={{ display: 'grid', gap: 20, justifyItems: 'center' }}>
        <Logo size={96} />
        <h1 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontSize: 40 }}>Hmmly</h1>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/bn/" hrefLang="bn" lang="bn" style={pill}>বাংলা</Link>
          <Link href="/en/" hrefLang="en" lang="en" style={pill}>English</Link>
        </div>
      </div>
    </main>
  );
}
