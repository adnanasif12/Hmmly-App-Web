/**
 * Public web-app config of the Firebase project (safe to ship; access is controlled by Firestore rules + Auth).
 * Fill `appId` and `apiKey` from Firebase console → Project settings → Your apps → Web app.
 */
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? 'AIzaSyD5mF6U_fWnLFa4eBzUjFNA8_LiwkawZTA',
  authDomain: 'hmmly-9c97e.firebaseapp.com',
  projectId: 'hmmly-9c97e',
  storageBucket: 'hmmly-9c97e.firebasestorage.app',
  messagingSenderId: '179014281067',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '1:179014281067:web:e989d96785f8b719094e2e',
};
export const firebaseReady = Boolean(firebaseConfig.apiKey && firebaseConfig.appId);
