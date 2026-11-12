import Link from 'next/link';
export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#FFF6E0', padding: 20, textAlign: 'center', fontFamily: "'Inter','Hind Siliguri',sans-serif" }}>
      <div>
        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 40, margin: '0 0 8px' }}>404</h1>
        <p>This page wandered off. · এই পাতাটি পাওয়া যায়নি।</p>
        <p><Link href="/en/">Home</Link> · <Link href="/bn/">হোম</Link></p>
      </div>
    </main>
  );
}
