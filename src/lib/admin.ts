import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
import { collection, collectionGroup, doc, getDoc, getDocs, limit, orderBy, query, serverTimestamp, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { ADMIN_EMAILS } from './site';

export const isAdminUser = (u: User | null) => !!u && u.emailVerified && !!u.email && ADMIN_EMAILS.includes(u.email.toLowerCase());
export const watchAuth = (cb: (u: User | null) => void) => onAuthStateChanged(auth(), cb);
export const googleSignIn = () => signInWithPopup(auth(), new GoogleAuthProvider());
export const adminSignOut = () => signOut(auth());

export type Fulfil = 'pending' | 'packed' | 'shipped' | 'delivered';
export const FULFIL: Fulfil[] = ['pending', 'packed', 'shipped', 'delivered'];

export interface GiftRow {
  uid: string; name: string; address: string; phone: string; method: string; claimed: boolean;
  kidName: string; kidAge: number | null; parentPhone: string; games: number; status: Fulfil; note: string; when: number;
}
export interface MsgRow { id: string; name: string; email: string; message: string; lang: string; status: string; when: number }

const ms = (v: unknown): number => (v && typeof (v as { toMillis?: () => number }).toMillis === 'function' ? (v as { toMillis: () => number }).toMillis() : 0);
const s = (v: unknown) => (typeof v === 'string' ? v : '');

export async function loadGifts(): Promise<GiftRow[]> {
  const [gifts, sessions] = await Promise.all([getDocs(collectionGroup(db(), 'gift')), getDocs(collectionGroup(db(), 'sessions'))]);
  const games = new Map<string, number>();
  sessions.forEach((d) => { const uid = d.ref.parent.parent?.id; if (uid) games.set(uid, (games.get(uid) ?? 0) + 1); });
  const rows = await Promise.all(gifts.docs.map(async (g) => {
    const uid = g.ref.parent.parent!.id;
    const [p, f] = await Promise.all([getDoc(doc(db(), 'users', uid)), getDoc(doc(db(), 'fulfillment', uid))]);
    const gd = g.data(); const pd = p.data() ?? {}; const fd = f.data() ?? {};
    return {
      uid, name: s(gd.name), address: s(gd.address), phone: s(gd.phone), method: s(gd.method), claimed: gd.claimed === true,
      kidName: s(pd.kidName), kidAge: typeof pd.kidAge === 'number' ? pd.kidAge : null, parentPhone: s(pd.phoneE164),
      games: games.get(uid) ?? 0, status: (FULFIL.includes(fd.status) ? fd.status : 'pending') as Fulfil, note: s(fd.note), when: ms(gd.updatedAt),
    } satisfies GiftRow;
  }));
  return rows.filter((r) => r.claimed).sort((a, b) => b.when - a.when);
}

export async function setFulfilment(uid: string, status: Fulfil, note: string) {
  await setDoc(doc(db(), 'fulfillment', uid), { status, note: note.slice(0, 500), updatedAt: serverTimestamp() }, { merge: true });
}

async function loadMsgs(col: 'supportMessages' | 'deletionRequests'): Promise<MsgRow[]> {
  const q = await getDocs(query(collection(db(), col), orderBy('createdAt', 'desc'), limit(200)));
  return q.docs.map((d) => { const x = d.data(); return { id: d.id, name: s(x.name), email: s(x.email), message: s(x.message), lang: s(x.lang), status: s(x.status), when: ms(x.createdAt) }; });
}
export const loadMessages = () => loadMsgs('supportMessages');
export const loadDeletionRequests = () => loadMsgs('deletionRequests');
export const setMsgStatus = (col: 'supportMessages' | 'deletionRequests', id: string, status: 'new' | 'done') => updateDoc(doc(db(), col, id), { status });
export const removeMsg = (col: 'supportMessages' | 'deletionRequests', id: string) => deleteDoc(doc(db(), col, id));
