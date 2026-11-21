import type { Lang } from '@/content/types';

/** Change these when the real domain / store listing / mailbox exist. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hmmly.app').replace(/\/$/, '');
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.hmmly.hmmly';
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? '';
export const ADMIN_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? 'subscriptionstructlab@gmail.com,ashibadnan42@gmail.com').split(',').map((s) => s.trim().toLowerCase());

export const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Hind+Siliguri:wght@400;500;600;700&family=Caveat:wght@600;700&family=Atma:wght@500;600&display=swap';

export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', bn: 'bn_BD' };
export const other = (l: Lang): Lang => (l === 'en' ? 'bn' : 'en');

/** Book store. PLACEHOLDER prices (BDT): change before launch. */
export const BOOK_PRICE = Number(process.env.NEXT_PUBLIC_BOOK_PRICE ?? 299);
export const BOOK_DELIVERY = Number(process.env.NEXT_PUBLIC_BOOK_DELIVERY ?? 60);
/** Order e-mail via EmailJS (free tier). Leave unset to skip the e-mail; orders are still saved and shown in /admin/. */
export const EMAILJS = {
  service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
  template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
  key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
  to: process.env.NEXT_PUBLIC_ORDER_EMAIL ?? '',
};
