import { blogBN } from '@/content/blog.bn';
import { blogEN } from '@/content/blog.en';
import { homeBN } from '@/content/home.bn';
import { homeEN } from '@/content/home.en';
import { LANGS, type BlogContent, type HomeContent, type Lang } from '@/content/types';

export const homeContent = (l: Lang): HomeContent => (l === 'bn' ? homeBN : homeEN);
export const blogContent = (l: Lang): BlogContent => (l === 'bn' ? blogBN : blogEN);
export const asLang = (s: string): Lang | null => (LANGS.includes(s as Lang) ? (s as Lang) : null);
