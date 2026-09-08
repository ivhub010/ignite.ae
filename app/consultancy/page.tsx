import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Consultancy' };

const SERVICES: [string, string][] = [
  ['Needs Assessment', 'Understand your workforce health profile, engagement patterns, and unmet needs.'],
  ['Strategy Design', 'A multi-year wellness roadmap with clear KPIs, governance, and programme architecture.'],
  ['Programme Development', 'End-to-end design and delivery of fitness, nutrition, and mental wellbeing initiatives.'],
  ['Measurement & Reporting', 'Quarterly and annual reporting against agreed metrics. Evidence your ROI.'],
  ['Vendor Management', 'We manage your wellness supplier relationships so you do not have to.'],
  ['Change Management', 'Communication strategies that drive uptake and sustain engagement over time.'],
];

export default function Consultancy() {
  return (
    <main>
      <section className="sec-hero">
        <div className="sec-hero-bg">
          <img src="/assets/images/IGNITE-Consultancy.png" alt="" />
          <div className="sec-hero-bg-ov" />
        </div>
        <div className="sec-hero-content">
          <p className="sec-eyebrow" style={{ color: '#6BAED6' }}>Consultancy</p>
          <h1 className="sec-title">Wellness<br /><span style={{ color: '#6BAED6' }}>strategy.</span></h1>
          <p className="sec-sub">We help organisations build workforce health programmes that last — grounded in evidence, designed for your people, and measured for impact.</p>
        </div>
      </section>

      <section className="content-block">
        <p className="content-label" style={{ color: '#6BAED6' }}>Our approach</p>
        <h2 className="content-lead">Strategy first. Programmes second.</h2>
        <p className="content-body">Most wellness programmes fail because they start with activities rather than outcomes. We begin by understanding your organisation — its people, its pressures, its goals — then build a strategy that connects movement and health to the things that actually matter to your leadership: productivity, retention, and culture.</p>
        <div className="card-grid">
          {SERVICES.map(([t, d]) => (
            <div key={t} className="card">
              <h3 className="card-title">{t}</h3>
              <p className="card-body">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-block mid">
        <p className="content-label" style={{ color: '#6BAED6' }}>Talk to us</p>
        <h2 className="content-lead">Let&rsquo;s build something that lasts.</h2>
        <p className="content-body">Whether you&rsquo;re starting from scratch or reviewing an existing programme, we&rsquo;d like to understand your situation first. No pitch, no obligation.</p>
        <Link href="/contact" className="btn-primary">Start the conversation</Link>
      </section>
    </main>
  );
}
