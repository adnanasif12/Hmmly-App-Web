import type { Metadata, Viewport } from 'next';
import { FONTS_HREF, SITE_URL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Hmmly',
  icons: { icon: '/favicon-192.png', apple: '/apple-touch-icon.png' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#FAF9F6', colorScheme: 'only light' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS_HREF} />
      </head>
      <body>{children}</body>
    </html>
  );
}
