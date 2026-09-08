import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="content-block" style={{ minHeight: '80svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p className="content-label" style={{ color: '#D2DD29' }}>404</p>
      <h1 className="content-lead">This page has moved on.</h1>
      <p className="content-body">The page you&rsquo;re looking for doesn&rsquo;t exist. Head back to the homepage or get in touch and we&rsquo;ll point you in the right direction.</p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/" className="btn-primary">Back to homepage</Link>
        <Link href="/contact" className="btn-ghost">Contact us →</Link>
      </div>
    </main>
  );
}
