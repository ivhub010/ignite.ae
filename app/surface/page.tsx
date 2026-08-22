import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Surface' };

const ACTIVITIES: [string, string][] = [
  ['Beach Volleyball', 'Recreational leagues, competitive tournaments, and coaching clinics on Dubai\'s finest beaches.'],
  ['Outdoor Boot Camp', 'Ground-level, no-equipment training circuits that use the natural terrain to your advantage.'],
  ['Run Club', 'Guided group runs across Dubai\'s coastline and parks. All paces welcome.'],
  ['Functional Sport', 'Sport-specific conditioning programmes for football, tennis, golf, and more.'],
];

export default function Surface() {
  return (
    <main>
      <section className="sec-hero">
        <div className="sec-hero-bg">
          <img src="/assets/images/lifestyle-4A0A2745.jpg" alt="" />
          <div className="sec-hero-bg-ov" />
        </div>
        <div className="sec-hero-content">
          <p className="sec-eyebrow" style={{ color: '#FF6B35' }}>IGNITE Surface</p>
          <h1 className="sec-title">Play.<br /><span style={{ color: '#FF6B35' }}>Outdoors.</span></h1>
          <p className="sec-sub">Beach volleyball, outdoor boot camps, run clubs, and surface sports — high-energy activity in Dubai&rsquo;s iconic outdoor spaces.</p>
        </div>
      </section>

      <section className="content-block">
        <p className="content-label" style={{ color: '#FF6B35' }}>Activities</p>
        <h2 className="content-lead">Dubai&rsquo;s beaches are our arena.</h2>
        <p className="content-body">IGNITE Surface brings competitive and recreational outdoor sport to Dubai&rsquo;s best outdoor venues. From organised beach volleyball leagues to coached run clubs and high-intensity outdoor training circuits, Surface is where fitness meets play.</p>
        <div className="card-grid">
          {ACTIVITIES.map(([t, d]) => (
            <div key={t} className="card">
              <h3 className="card-title">{t}</h3>
              <p className="card-body">{d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <Link href="/contact" className="btn-primary" style={{ background: '#FF6B35', color: '#fff' }}>Join a session</Link>
        </div>
      </section>
    </main>
  );
}
