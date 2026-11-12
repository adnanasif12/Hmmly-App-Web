import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { firebaseReady } from './firebase-config';
import type { Lang } from '@/content/types';
import { checkContact, type ContactInput } from './validate';

export class SiteError extends Error {
  constructor(public code: 'required' | 'email' | 'failed' | 'unavailable') { super(code); }
}

const withTimeout = <T,>(p: Promise<T>, ms = 15000) =>
  Promise.race([p, new Promise<never>((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);

export async function sendContact(raw: Partial<ContactInput>, lang: Lang): Promise<void> {
  const c = checkContact(raw);
  if (!c.ok) throw new SiteError(c.reason);
  if (!firebaseReady) throw new SiteError('unavailable');
  try {
    await withTimeout(addDoc(collection(db(), 'supportMessages'), { ...c.value, lang, status: 'new', createdAt: serverTimestamp() }));
  } catch {
    throw new SiteError('failed');
  }
}

export async function sendDeletionRequest(raw: Partial<ContactInput>, lang: Lang): Promise<void> {
  const c = checkContact(raw);
  if (!c.ok) throw new SiteError(c.reason);
  if (!firebaseReady) throw new SiteError('unavailable');
  try {
    await withTimeout(addDoc(collection(db(), 'deletionRequests'), { ...c.value, lang, status: 'new', createdAt: serverTimestamp() }));
  } catch {
    throw new SiteError('failed');
  }
}
