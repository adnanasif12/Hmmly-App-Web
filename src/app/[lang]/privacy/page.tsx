import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell, h1Style } from '@/components/PageShell';
import { privacy } from '@/content/pages';
import { asLang } from '@/lib/content';
import { metaFor } from '@/lib/seo';

type P = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const l = asLang((await params).lang);
  return l ? metaFor(l, 'privacy') : {};
}
export default async function Page({ params }: P) {
  const lang = asLang((await params).lang);
  if (!lang) notFound();
  const p = privacy[lang];
  return (
    <PageShell lang={lang} page="privacy">
      <h1 style={h1Style}>{p.title}</h1>
      <p style={{ color: '#62625C', margin: '0 0 8px' }}>{p.updated}</p>
      <p style={{ fontSize: 18, lineHeight: 1.6 }}>{p.intro}</p>
      {p.sections.map((s) => (
        <section key={s.h}>
          <h2 style={{ fontFamily: "'Space Grotesk','Hind Siliguri',sans-serif", fontSize: 24, margin: '32px 0 8px' }}>{s.h}</h2>
          {s.p?.map((t) => <p key={t} style={{ lineHeight: 1.7, margin: '0 0 12px' }}>{t}</p>)}
          {s.ul && <ul style={{ lineHeight: 1.7, paddingLeft: 22 }}>{s.ul.map((t) => <li key={t} style={{ marginBottom: 8 }}>{t}</li>)}</ul>}
        </section>
      ))}
    </PageShell>
  );
}
