import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Blog } from '@/components/Blog';
import { asLang, blogContent } from '@/lib/content';
import { blogLd, ldString, metaFor } from '@/lib/seo';

type P = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const l = asLang((await params).lang);
  return l ? metaFor(l, 'blog') : {};
}
export default async function Page({ params }: P) {
  const lang = asLang((await params).lang);
  if (!lang) notFound();
  const c = blogContent(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldString(blogLd(lang, c)) }} />
      <Blog lang={lang} c={c} />
    </>
  );
}
