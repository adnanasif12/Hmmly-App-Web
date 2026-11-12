import { notFound } from 'next/navigation';
import { LANGS, type Lang } from '@/content/types';

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) notFound();
  return <>{children}</>;
}
