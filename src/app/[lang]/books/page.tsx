import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookStore } from '@/components/BookStore';
import { PageShell } from '@/components/PageShell';
import { asLang } from '@/lib/content';
import { metaFor } from '@/lib/seo';

type P = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const l = asLang((await params).lang);
  return l ? metaFor(l, 'books') : {};
}
export default async function Page({ params }: P) {
  const lang = asLang((await params).lang);
  if (!lang) notFound();
  return (
    <PageShell lang={lang} page="books" wide>
      <BookStore lang={lang} />
    </PageShell>
  );
}
