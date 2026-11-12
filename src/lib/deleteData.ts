import { RecaptchaVerifier, deleteUser, signInWithPhoneNumber, signOut, type ConfirmationResult } from 'firebase/auth';
import { collection, doc, getDocs, writeBatch } from 'firebase/firestore';
import { auth, db } from './firebase';

export type DelErrorKind = 'badNumber' | 'wrongCode' | 'expired' | 'tooMany' | 'network' | 'other';
export class DelError extends Error { constructor(public kind: DelErrorKind) { super(kind); } }

export function mapAuthError(e: unknown): DelError {
  const code = (e as { code?: string })?.code ?? '';
  if (/invalid-phone|missing-phone/.test(code)) return new DelError('badNumber');
  if (/invalid-verification-code|invalid-verification-id/.test(code)) return new DelError('wrongCode');
  if (/code-expired|session-expired/.test(code)) return new DelError('expired');
  if (/too-many|quota/.test(code)) return new DelError('tooMany');
  if (/network/.test(code)) return new DelError('network');
  return new DelError('other');
}

let verifier: RecaptchaVerifier | null = null;

export async function sendCode(e164: string, container: HTMLElement): Promise<ConfirmationResult> {
  try {
    verifier?.clear();
    verifier = new RecaptchaVerifier(auth(), container, { size: 'invisible' });
    return await signInWithPhoneNumber(auth(), e164, verifier);
  } catch (e) {
    verifier?.clear();
    verifier = null;
    throw mapAuthError(e);
  }
}

export async function confirmCode(c: ConfirmationResult, code: string): Promise<void> {
  try { await c.confirm(code.trim()); } catch (e) { throw mapAuthError(e); }
}

/** Deletes users/{uid} with its sessions + gift, then the sign-in itself. Returns false if nothing was stored. */
export async function deleteMyData(): Promise<boolean> {
  const u = auth().currentUser;
  if (!u) throw new DelError('other');
  const me = doc(db(), 'users', u.uid);
  let found = false;
  try {
    for (const sub of ['sessions', 'gift']) {
      const snap = await getDocs(collection(me, sub));
      for (let i = 0; i < snap.docs.length; i += 400) {
        const b = writeBatch(db());
        snap.docs.slice(i, i + 400).forEach((d) => { b.delete(d.ref); found = true; });
        await b.commit();
      }
    }
    const b = writeBatch(db());
    b.delete(me);
    await b.commit();
  } catch (e) { throw mapAuthError(e); }
  try { await deleteUser(u); } catch { /* data is gone; account removal retried on next sign-in */ }
  await signOut(auth());
  return found;
}
