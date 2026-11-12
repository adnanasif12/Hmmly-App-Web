export const LIMITS = { name: 80, email: 120, message: 2000 } as const;
const EMAIL = /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/;

export type ContactInput = { name: string; email: string; message: string };
export type ContactCheck = { ok: true; value: ContactInput } | { ok: false; reason: 'required' | 'email' };

export function checkContact(raw: Partial<ContactInput>): ContactCheck {
  const name = (raw.name ?? '').trim().slice(0, LIMITS.name);
  const email = (raw.email ?? '').trim().slice(0, LIMITS.email);
  const message = (raw.message ?? '').trim().slice(0, LIMITS.message);
  if (!name || !email || !message) return { ok: false, reason: 'required' };
  if (!EMAIL.test(email)) return { ok: false, reason: 'email' };
  return { ok: true, value: { name, email, message } };
}

const BN_DIGITS = '০১২৩৪৫৬৭৮৯';
/** "+8801…" / "01…" with spaces, dashes or Bangla digits -> "+8801…" (E.164). Returns null when it cannot be a phone number. */
export function toE164(input: string, defaultCode = '880'): string | null {
  let s = input.replace(/[০-৯]/g, (d) => String(BN_DIGITS.indexOf(d))).replace(/[\s\-()._]/g, '');
  if (!s) return null;
  if (s.startsWith('00')) s = '+' + s.slice(2);
  if (!s.startsWith('+')) s = '+' + defaultCode + s.replace(/^0+/, '');
  if (!/^\+[1-9]\d{7,14}$/.test(s)) return null;
  return s;
}

/** Simple client-side throttle: at most one send per `ms`. */
export function throttle(store: { get(): number; set(n: number): void }, ms: number, now = Date.now()): boolean {
  if (now - store.get() < ms) return false;
  store.set(now);
  return true;
}
