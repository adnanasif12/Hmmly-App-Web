import re
def load(n): return open(f'tools/{n}.jsx.txt').read().strip()
QR='"/images/qr-play.svg"'
def common(c):
    c=c.replace('{IMG.a8b31ff32f07f81a63c2d8baf335b212}','{'+QR+'}')
    c=re.sub(r'\{langs\.map\(.*?</Fragment>\)\)\}','<LangSwitch lang={lang} page={page} />',c,flags=re.S,count=1)
    c=c.replace('<img ','<img loading="lazy" decoding="async" ')
    return c
# ---- home
h=common(load('home'))
h=re.sub(r'(<div style=\{\{ display: "flex", flexDirection: "column", gap: "12px" \}\}>\s*)\{faqs\.map\(.*?</Fragment>\)\)\}',r'\1<FaqList items={faqs} />',h,flags=re.S,count=1)
h=h.replace('href="#blog"','href={`/${lang}/blog/`}')
h=h.replace('<div lang={htmlLang} style={{ fontFamily: `${bodyFont}`,','<div lang={lang} style={{ fontFamily: bodyFont,',1)
open('src/components/Home.tsx','w').write('''/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import type { HomeContent, Lang } from '@/content/types';
import { PLAY_URL } from '@/lib/site';
import { FaqList } from './FaqList';
import { LangSwitch } from './LangSwitch';

export function Home({ lang, c }: { lang: Lang; c: HomeContent }) {
  const { t, img, facts, steps, stories, rules, skills, safety, dlSteps, faqs } = c;
  const page = 'home';
  const bodyFont = lang === 'bn' ? "'Hind Siliguri', 'Inter', system-ui, sans-serif" : "'Inter', 'Hind Siliguri', system-ui, sans-serif";
  return (
'''+h+'''
  );
}
''')
b=common(load('blog'))
b=b.replace('href="#top"','href={`/${lang}/`}',2) if False else b
open('src/components/Blog.tsx','w').write('''/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import type { BlogContent, Lang } from '@/content/types';
import { PLAY_URL } from '@/lib/site';
import { LangSwitch } from './LangSwitch';

export function Blog({ lang, c }: { lang: Lang; c: BlogContent }) {
  const { t, img, sections } = c;
  const page = 'blog';
  const bodyFont = lang === 'bn' ? "'Hind Siliguri', 'Inter', system-ui, sans-serif" : "'Inter', 'Hind Siliguri', system-ui, sans-serif";
  return (
'''+b+'''
  );
}
''')
