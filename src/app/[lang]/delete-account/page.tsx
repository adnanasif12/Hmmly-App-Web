import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';
import { DeleteAccount } from '@/components/DeleteAccount';
import { PageShell, cardStyle, h1Style } from '@/components/PageShell';
import { ui } from '@/content/pages';
import { asLang } from '@/lib/content';
import { metaFor } from '@/lib/seo';

type P = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const l = asLang((await params).lang);
  return l ? metaFor(l, 'delete-account') : {};
}
export default async function Page({ params }: P) {
  const lang = asLang((await params).lang);
  if (!lang) notFound();
  const u = ui[lang];
  return (
    <PageShell lang={lang} page="delete">
      <h1 style={h1Style}>{u.delTitle}</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6 }}>{u.delLead}</p>
      <ul style={{ lineHeight: 1.7, paddingLeft: 22, margin: '0 0 24px' }}>{u.delWhat.map((w) => <li key={w}>{w}</li>)}</ul>
      <DeleteAccount lang={lang} />
      <h2 style={{ fontFamily: "'Space Grotesk','Hind Siliguri',sans-serif", fontSize: 24, margin: '40px 0 8px' }}>{u.delOrForm}</h2>
      <p style={{ margin: '0 0 16px' }}>{u.delFormTitle}</p>
      <div style={cardStyle}><ContactForm lang={lang} kind="deletion" /></div>
    </PageShell>
  );
}
