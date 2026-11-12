# Hmmly website

Next.js (App Router) + TypeScript, exported as a fully static site (`out/`). Backend = Firebase project `hmmly-9c97e` (client SDK only, no server to run).

## Commands
- `npm install`
- `npm run dev` – local dev server
- `npm run check` – typecheck + lint + tests
- `npm run build` – writes the static site to `out/` (deploy anywhere: Firebase Hosting, Netlify, Cloudflare Pages, any static host)

## Before going live (edit `src/lib/site.ts` or set env vars)
- `NEXT_PUBLIC_SITE_URL` – real domain (default placeholder `https://hmmly.app`; drives canonical, hreflang, sitemap, JSON-LD)
- `NEXT_PUBLIC_SUPPORT_EMAIL` – shown on the contact page
- Firebase console → Authentication → Settings → Authorized domains: add the real domain (needed for Google admin sign-in and phone OTP on the web)
- `PLAY_URL` in `src/lib/site.ts` once the app is live; replace `public/images/qr-play.svg` with a QR of the final link

## Backend
- `firestore.rules` – already published to the project. Contact/deletion forms are create-only and validated; the admin (email list in the rules and `ADMIN_EMAILS`) can read everything; `fulfillment/` is admin-only.
- `/admin/` – Google sign-in; gifts (with child + progress), support messages, deletion requests.
- `/{en,bn}/delete-account/` – parent signs in with phone OTP (invisible reCAPTCHA) and erases `users/{uid}`, its `sessions`, `gift` and the sign-in.
- Phone OTP is limited to 10 SMS/day on the free Spark plan.
- Not done: automatic deletion of gift addresses after delivery (needs a scheduled Cloud Function = Blaze plan).
