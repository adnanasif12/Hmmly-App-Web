import type { Metadata } from 'next';
import type { BlogContent, HomeContent, Lang } from '@/content/types';
import { LANGS } from '@/content/types';
import { OG_LOCALE, PLAY_URL, SITE_URL } from './site';

export type PageKey = 'home' | 'blog' | 'privacy' | 'contact' | 'delete-account';
const PATH: Record<PageKey, string> = { home: '', blog: 'blog/', privacy: 'privacy/', contact: 'contact/', 'delete-account': 'delete-account/' };
export const urlOf = (lang: Lang, page: PageKey) => `${SITE_URL}/${lang}/${PATH[page]}`;

export const COPY: Record<Lang, Record<PageKey, { title: string; description: string }>> = {
  en: {
    home: { title: 'Hmmly: Thinking Games for Kids 3–5 (Bangla & English)', description: 'Free, ad-free app for children aged 3–5. Jonu the firefly has a small problem every day — your child solves it with real things at home.' },
    blog: { title: 'Why Hmmly? Who it is for, and what children gain | Hmmly', description: 'How small everyday problems grow big thinking — a plain guide for parents, grandparents and everyone who looks after a little one.' },
    privacy: { title: 'Privacy Policy — Hmmly', description: 'What Hmmly keeps about you and your child, why, where it is stored and how to delete it.' },
    contact: { title: 'Contact — Hmmly', description: 'Questions, ideas or a problem with the app? Write to the Hmmly team.' },
    'delete-account': { title: 'Delete my data — Hmmly', description: 'A parent can erase everything Hmmly stores online: child’s nickname and age, progress, gift details and the sign-in.' },
  },
  bn: {
    home: { title: 'Hmmly: ৩–৫ বছরের শিশুদের ভাবনার খেলা (বাংলা ও ইংরেজি)', description: '৩–৫ বছরের শিশুদের জন্য ফ্রি, বিজ্ঞাপনহীন অ্যাপ। জোনাকি জোনুর প্রতিদিনের ছোট সমস্যা বাচ্চা ঘরের জিনিস দিয়ে সমাধান করে — আপনি পাশে থাকেন।' },
    blog: { title: 'কেন Hmmly? কাদের জন্য, আর বাচ্চারা কী পায় | Hmmly', description: 'ঘরের ছোট ছোট সমস্যা কীভাবে বড় ভাবনা তৈরি করে — অভিভাবক, দাদা-দাদি ও শিশুর যত্ন নেওয়া সবার জন্য একটি সহজ গাইড।' },
    privacy: { title: 'গোপনীয়তা নীতি — Hmmly', description: 'Hmmly আপনার ও আপনার শিশুর কী তথ্য রাখে, কেন রাখে, কোথায় থাকে আর কীভাবে মুছবেন।' },
    contact: { title: 'যোগাযোগ — Hmmly', description: 'প্রশ্ন, পরামর্শ বা অ্যাপে সমস্যা? Hmmly দলকে লিখুন।' },
    'delete-account': { title: 'আমার তথ্য মুছুন — Hmmly', description: 'অভিভাবক Hmmly-র অনলাইনে রাখা সব তথ্য মুছে ফেলতে পারেন: শিশুর ডাকনাম ও বয়স, অগ্রগতি, উপহারের তথ্য ও সাইন-ইন।' },
  },
};

export function metaFor(lang: Lang, page: PageKey): Metadata {
  const { title, description } = COPY[lang][page];
  const canonical = urlOf(lang, page);
  const languages: Record<string, string> = Object.fromEntries(LANGS.map((l) => [l, urlOf(l, page)]));
  languages['x-default'] = urlOf('en', page);
  const other = lang === 'en' ? 'bn' : 'en';
  return {
    title: { absolute: title },
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: page === 'blog' ? 'article' : 'website', url: canonical, siteName: 'Hmmly', title, description,
      locale: OG_LOCALE[lang], alternateLocale: [OG_LOCALE[other]],
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Hmmly — Jonu the firefly' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${SITE_URL}/og-image.png`] },
    robots: page === 'delete-account' ? { index: false, follow: true } : { index: true, follow: true },
  };
}

const ORG = { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'Hmmly', url: `${SITE_URL}/`, logo: `${SITE_URL}/favicon-192.png` };
const SITE = { '@type': 'WebSite', '@id': `${SITE_URL}/#site`, url: `${SITE_URL}/`, name: 'Hmmly', inLanguage: ['en', 'bn'], publisher: { '@id': `${SITE_URL}/#org` } };

export function homeLd(lang: Lang, c: HomeContent) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORG, SITE,
      { '@type': 'MobileApplication', name: 'Hmmly', operatingSystem: 'ANDROID', applicationCategory: 'EducationalApplication', description: COPY[lang].home.description, inLanguage: ['en', 'bn'], installUrl: PLAY_URL, downloadUrl: PLAY_URL, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, audience: { '@type': 'PeopleAudience', suggestedMinAge: 3, suggestedMaxAge: 5 }, url: urlOf(lang, 'home'), publisher: { '@id': `${SITE_URL}/#org` } },
      { '@type': 'FAQPage', mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  };
}

export function blogLd(lang: Lang, c: BlogContent) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORG, SITE,
      { '@type': 'BlogPosting', headline: c.t.title, description: COPY[lang].blog.description, inLanguage: lang, mainEntityOfPage: urlOf(lang, 'blog'), image: `${SITE_URL}/og-image.png`, author: { '@id': `${SITE_URL}/#org` }, publisher: { '@id': `${SITE_URL}/#org` }, datePublished: '2026-11-10', dateModified: '2026-11-12' },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Hmmly', item: urlOf(lang, 'home') }, { '@type': 'ListItem', position: 2, name: c.t.title, item: urlOf(lang, 'blog') }] },
    ],
  };
}

/** JSON for a <script type="application/ld+json">: "<" is escaped so content can never close the tag. */
export const ldString = (o: unknown) => JSON.stringify(o).replace(/</g, '\\u003c');
