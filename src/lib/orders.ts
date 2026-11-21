import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { firebaseReady } from './firebase-config';
import type { Lang } from '@/content/types';
import { BOOK_DELIVERY, BOOK_PRICE, EMAILJS } from './site';
import { toE164 } from './validate';

export interface OrderInput { name: string; phone: string; district: string; address: string; qty: number; note: string }
export type OrderCheck = { ok: true; value: OrderInput & { phoneE164: string } } | { ok: false; reason: 'required' | 'phone' };
export class OrderError extends Error {
  constructor(public code: 'required' | 'phone' | 'failed' | 'unavailable') { super(code); }
}

export const orderTotal = (qty: number) => BOOK_PRICE * qty + BOOK_DELIVERY;

export function checkOrder(raw: Partial<Record<keyof OrderInput, string | number>>): OrderCheck {
  const t = (v: unknown, n: number) => String(v ?? '').trim().slice(0, n);
  const name = t(raw.name, 80), district = t(raw.district, 60), address = t(raw.address, 300), note = t(raw.note, 300), phone = t(raw.phone, 30);
  const qty = Math.min(10, Math.max(1, Math.floor(Number(raw.qty) || 1)));
  if (!name || !phone || !district || !address) return { ok: false, reason: 'required' };
  const e164 = toE164(phone);
  if (!e164 || !e164.startsWith('+880')) return { ok: false, reason: 'phone' };
  return { ok: true, value: { name, phone, district, address, qty, note, phoneE164: e164 } };
}

const orderNo = () => 'HM-' + Date.now().toString(36).toUpperCase().slice(-5) + Math.random().toString(36).slice(2, 4).toUpperCase();
const withTimeout = <T,>(p: Promise<T>, ms = 15000) =>
  Promise.race([p, new Promise<never>((_, r) => setTimeout(() => r(new Error('timeout')), ms))]);

async function emailOrder(o: Record<string, string | number>) {
  if (!EMAILJS.service || !EMAILJS.template || !EMAILJS.key) return;
  try {
    await withTimeout(fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service_id: EMAILJS.service, template_id: EMAILJS.template, user_id: EMAILJS.key, template_params: { ...o, to_email: EMAILJS.to } }),
    }), 10000);
  } catch { /* the order is already saved; the admin page still lists it */ }
}

/** Saves the order in Firestore (source of truth), then sends the e-mail copy. Returns the order number. */
export async function placeOrder(raw: Parameters<typeof checkOrder>[0], lang: Lang): Promise<{ orderNo: string; total: number }> {
  const c = checkOrder(raw);
  if (!c.ok) throw new OrderError(c.reason);
  if (!firebaseReady) throw new OrderError('unavailable');
  const no = orderNo();
  const total = orderTotal(c.value.qty);
  const data = {
    orderNo: no, book: 'brainy-bee-1', name: c.value.name, phone: c.value.phoneE164, district: c.value.district, address: c.value.address,
    note: c.value.note, qty: c.value.qty, unitPrice: BOOK_PRICE, delivery: BOOK_DELIVERY, total, payment: 'cod', lang, status: 'new',
  };
  try {
    await withTimeout(addDoc(collection(db(), 'bookOrders'), { ...data, createdAt: serverTimestamp() }));
  } catch { throw new OrderError('failed'); }
  void emailOrder({ ...data, subject: `New book order ${no}` });
  return { orderNo: no, total };
}
