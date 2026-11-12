import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';
import { PageShell, cardStyle, h1Style } from '@/components/PageShell';
import { ui } from '@/content/pages';
import { asLang } from '@/lib/content';
import { metaFor } from '@/lib/seo';
import { SUPPORT_EMAIL } from '@/lib/site';

type P = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const l = asLang((await params).lang);
  return l ? metaFor(l, 'contact') : {};
}
export default async function Page({ params }: P) {
  const lang = asLang((await params).lang);
  if (!lang) notFound();
  const u = ui[lang];
  return (
    <PageShell lang={lang} page="contact">
      <h1 style={h1Style}>{u.contactTitle}</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, margin: '0 0 24px' }}>{u.contactLead}</p>
      <div style={cardStyle}><ContactForm lang={lang} /></div>
      <p style={{ fontSize: 14, color: '#62625C', marginTop: 16 }}>
        {u.consent} <a href={`/${lang}/privacy/`}>{lang === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy policy'}</a>
        {SUPPORT_EMAIL && <> · <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></>}
      </p>
    </PageShell>
  );
}
