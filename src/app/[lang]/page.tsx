import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Home } from '@/components/Home';
import { asLang, homeContent } from '@/lib/content';
import { homeLd, ldString, metaFor } from '@/lib/seo';

type P = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const l = asLang((await params).lang);
  return l ? metaFor(l, 'home') : {};
}
export default async function Page({ params }: P) {
  const lang = asLang((await params).lang);
  if (!lang) notFound();
  const c = homeContent(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldString(homeLd(lang, c)) }} />
      <Home lang={lang} c={c} />
    </>
  );
}
