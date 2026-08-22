import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Homespa' };

const SERVICES: [string, string][] = [
  ['Therapeutic Massage', 'Deep tissue, Swedish, sports, and relaxation massage. 60 or 90 minute sessions.'],
  ['Beauty Treatments', 'Facials, manicures, pedicures, waxing, and makeup — salon quality at home.'],
  ['Physiotherapy', 'Certified physiotherapists for injury rehabilitation, pain management, and mobility work.'],
  ['Corporate Wellness Days', 'In-office massage and wellbeing treatments for your team. Ideal for employee appreciation days.'],
];

export default function Homespa() {
  return (
    <main>
      <section className="sec-hero">
        <div className="sec-hero-bg">
          <img src="/assets/images/Moonlit-Yoga.jpg" alt="" />
          <div className="sec-hero-bg-ov" />
        </div>
        <div className="sec-hero-content">
          <p className="sec-eyebrow" style={{ color: '#C4A882' }}>IGNITE Homespa</p>
          <h1 className="sec-title">Wellness<br /><span style={{ color: '#C4A882' }}>at home.</span></h1>
          <p className="sec-sub">Professional massage, beauty, and physiotherapy services delivered to your door across Dubai.</p>
        </div>
      </section>

      <section className="content-block">
        <p className="content-label" style={{ color: '#C4A882' }}>Services</p>
        <h2 className="content-lead">Your home, your pace.</h2>
        <p className="content-body">Homespa brings the spa experience to you — eliminating travel, scheduling around your life, and ensuring you recover and restore in the comfort and privacy of your own space. All our therapists are certified, vetted, and experienced in delivering premium treatments in a home environment.</p>
        <div className="card-grid">
          {SERVICES.map(([t, d]) => (
            <div key={t} className="card">
              <h3 className="card-title">{t}</h3>
              <p className="card-body">{d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <Link href="/contact" className="btn-primary" style={{ background: '#C4A882', color: '#0F1923' }}>Book a treatment</Link>
        </div>
      </section>
    </main>
  );
}
