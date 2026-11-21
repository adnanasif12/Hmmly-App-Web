import Link from 'next/link';
import type { Lang } from '@/content/types';
import { LANGS } from '@/content/types';

const LABEL: Record<Lang, string> = { en: 'EN', bn: 'বাংলা' };

export function LangSwitch({ lang, page }: { lang: Lang; page: 'home' | 'blog' | 'privacy' | 'contact' | 'delete' | 'books' }) {
  const sub = page === 'home' ? '' : page === 'delete' ? 'delete-account/' : `${page}/`;
  return (
    <>
      {LANGS.slice().reverse().map((l) => {
        const on = l === lang;
        return (
          <Link
            key={l}
            href={`/${l}/${sub}`}
            hrefLang={l}
            lang={l}
            aria-current={on ? 'true' : undefined}
            style={{
              display: 'inline-flex', alignItems: 'center', minHeight: 40, padding: '0 14px', border: 0, borderRadius: 999,
              fontFamily: "'Hind Siliguri','Inter',sans-serif", fontWeight: 700, fontSize: 15, cursor: 'pointer',
              textDecoration: 'none', background: on ? '#111111' : '#FFFFFF', color: on ? '#FFB82E' : '#111111',
            }}
          >
            {LABEL[l]}
          </Link>
        );
      })}
    </>
  );
}
