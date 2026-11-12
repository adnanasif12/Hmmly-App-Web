import type { MetadataRoute } from 'next';
import { LANGS } from '@/content/types';
import { SITE_URL } from '@/lib/site';
import { urlOf, type PageKey } from '@/lib/seo';

export const dynamic = 'force-static';
const PAGES: PageKey[] = ['home', 'blog', 'privacy', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((p) =>
    LANGS.map((l) => ({
      url: urlOf(l, p),
      lastModified: '2026-11-12',
      changeFrequency: p === 'home' ? ('weekly' as const) : ('monthly' as const),
      priority: p === 'home' ? 1 : p === 'blog' ? 0.8 : 0.4,
      alternates: { languages: Object.fromEntries(LANGS.map((x) => [x, urlOf(x, p)])) },
    })),
  ).concat([{ url: `${SITE_URL}/`, lastModified: '2026-11-12', changeFrequency: 'monthly', priority: 0.5, alternates: { languages: {} } }]);
}
