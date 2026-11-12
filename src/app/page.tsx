import type { Metadata } from 'next';
import { LangPicker } from '@/components/LangPicker';
import { COPY } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: COPY.en.home.title },
  description: COPY.en.home.description,
  alternates: { canonical: `${SITE_URL}/`, languages: { en: `${SITE_URL}/en/`, bn: `${SITE_URL}/bn/`, 'x-default': `${SITE_URL}/en/` } },
};
export default function Page() {
  return <LangPicker />;
}
