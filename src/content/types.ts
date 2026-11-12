export type Lang = 'en' | 'bn';
export const LANGS: Lang[] = ['en', 'bn'];

export interface Fact { big: string; small: string; side: string }
export interface Step { n: string; tint: string; img: string; alt: string; title: string; body: string; side: string }
export interface Story { n: string; color: string; title: string; need: string; skill: string }
export interface Rule { tint: string; title: string; body: string; side: string }
export interface SafetyItem { title: string; body: string; side: string }
export interface DlStep { n: string; text: string }
export interface Faq { side: string; q: string; a: string }

export interface HomeContent {
  t: Record<string, string>;
  img: Record<'home' | 'path' | 'progress' | 'ideas' | 'story' | 'tryIt' | 'celebrate', string>;
  facts: Fact[]; steps: Step[]; stories: Story[]; rules: Rule[]; skills: string[];
  safety: SafetyItem[]; dlSteps: DlStep[]; faqs: Faq[];
}
export interface BlogCard { tint: string; b: string; text: string; side: string }
export interface BlogItem { b: string; text: string }
export interface BlogStep { n: string; b: string; text: string }
export interface BlogSection {
  id: string; n: string; h: string; paras: string[]; side: string;
  cards: BlogCard[]; list: BlogItem[]; steps: BlogStep[]; quote: string; note: string;
}
export interface BlogContent { t: Record<string, string>; img: Record<string, string>; sections: BlogSection[] }
