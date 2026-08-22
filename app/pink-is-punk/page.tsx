import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Pink is Punk' };

const WAYS = [
  ['Run 5K', 'Put on your pink kit and join the community run. All speeds and fitness levels.'],
  ['Sunrise Yoga', 'Start the day with a guided outdoor yoga session on the beach.'],
  ['Corporate Team', 'Enter your company team and earn your pink finisher medal together.'],
  ['Sponsor the campaign', 'Partner with IGNITE and Al Jalila Foundation to amplify your brand\'s impact.'],
];

export default function PinkIsPunk() {
  return (
    <main>
      <section className="pip-hero">
        <div className="pip-pattern" />
        <h1 className="pip-title">Pink<br />is<br />Punk.</h1>
        <p className="pip-sub">IGNITE&rsquo;s annual breast cancer awareness campaign raises funds for Al Jalila Foundation and brings the UAE community together through movement, solidarity, and a lot of pink.</p>
        <div className="pip-stats">
          <div><div className="pip-stat">7+</div><div className="pip-stat-label">Years running</div></div>
          <div><div className="pip-stat">AED 500k+</div><div className="pip-stat-label">Raised to date</div></div>
          <div><div className="pip-stat">3,000+</div><div className="pip-stat-label">Participants</div></div>
        </div>
      </section>

      <section className="content-block">
        <p className="content-label" style={{ color: '#CE00A0' }}>The campaign</p>
        <h2 className="content-lead">Awareness through action.</h2>
        <p className="content-body">Pink is Punk started in 2018 with a single run on Dubai Marina Walk. What began as a small community event has grown into one of the UAE&rsquo;s most recognised annual wellness campaigns, drawing thousands of participants each October and raising significant funds for breast cancer research and support at Al Jalila Foundation.</p>
        <p className="content-body">The premise is simple: wear pink, move your body, and stand with the people fighting breast cancer in our community. Every year we add a new event — a sunrise yoga session, a group swim, a beach boot camp — all under the Pink is Punk banner.</p>
      </section>

      <section className="content-block dark">
        <p className="content-label" style={{ color: '#CE00A0' }}>How to get involved</p>
        <h2 className="content-lead">Join us in October 2025.</h2>
        <div className="card-grid">
          {WAYS.map(([t, d]) => (
            <div key={t} className="card">
              <h3 className="card-title">{t}</h3>
              <p className="card-body">{d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <Link href="/contact" className="btn-primary" style={{ background: '#CE00A0', color: '#fff' }}>Register your team</Link>
        </div>
      </section>
    </main>
  );
}
