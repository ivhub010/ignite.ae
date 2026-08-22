import type { Metadata } from 'next';
import PinkIsPunkClient from './PinkIsPunkClient';

export const metadata: Metadata = { title: 'Pink is Punk' };

const IMPACT = [
  { color: '#CE00A0', target: 123000, prefix: 'AED ', label: 'Raised & donated' },
  { color: '#FF9E19', target: 3, suffix: '', label: 'Events held in 2024' },
  { color: '#fff', target: 100, suffix: '%', label: 'Donated to Al Jalila Foundation' },
];

const GALLERY = [
  { src: '/assets/images/pip-0159.jpg', alt: 'Pink is Punk 2018', className: 'gallery-cell wide tall' },
  { src: '/assets/images/pip-1783.jpg', alt: 'Pink is Punk', className: 'gallery-cell' },
  { src: '/assets/images/pip-1805.jpg', alt: 'Pink is Punk', className: 'gallery-cell' },
  { src: '/assets/images/Pink-Paddle.jpg', alt: 'Pink Paddle 2026', className: 'gallery-cell' },
  { src: '/assets/images/pip-1946.jpg', alt: 'Pink is Punk', className: 'gallery-cell' },
];

const SPONSOR_TIERS = [
  { tier: 'Title Sponsor', pills: [{ name: 'Medcare Women & Children Hospital', title: true }] },
  { tier: 'Venue Partners', pills: [{ name: 'Anantara The Palm' }, { name: 'RIVA Beach Club' }] },
  { tier: 'Supporting Partners', pills: ['Keen PR', 'JLW', 'Kibsons', 'Spendlove Group', 'Urban Veda', 'VITALICE', 'Maxi Nutrition', 'Costa', 'Pret', "Mr. Toad's"].map(name => ({ name })) },
];

export default function PinkIsPunk() {
  return (
    <>
    <main>
      <section className="campaign-hero">
        <div className="hero-bg"><img src="/assets/images/pip-01.jpg" alt="Pink is Punk" loading="eager" /></div>
        <div className="hero-overlay" />
        <div className="hero-accent-bar" />
        <div className="hero-content">
          <div className="campaign-label"><span>🎗️ Breast Cancer Awareness · 2024</span></div>
          <h1 className="pip-ribbon">Pink<br />is <span className="mg">Punk.</span></h1>
          <p className="pip-sub">Three events. One mission. 100% of donations go to Al Jalila Foundation — funding breast cancer research and care across the UAE.</p>
          <div className="pip-impact">
            <PinkIsPunkClient.AedCounter />
            <div className="pip-impact-label">AED raised in 2024, donated in full to Al Jalila Foundation</div>
          </div>
          <div className="hero-cta-row">
            <a href="#gallery" className="btn-mg">See the campaign</a>
            <a href="#donate" className="btn-outline">Support 2025 →</a>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="section-eyebrow">2024 Campaign Impact</div>
        <h2 style={{ font: '700 italic clamp(28px,4vw,48px)/1.1 Archivo,sans-serif', color: '#fff', maxWidth: 640, marginBottom: 0 }}>Three events. One community. Real impact.</h2>
        <div className="impact-grid">
          {IMPACT.map(i => (
            <div key={i.label} className="impact-tile">
              <PinkIsPunkClient.Counter color={i.color} target={i.target} prefix={i.prefix} suffix={i.suffix} />
              <div className="impact-lbl">{i.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-eyebrow">Campaign Gallery</div>
        <h2 className="section-heading">Wellness, community, and the colour pink.</h2>
        <div className="gallery-grid">
          {GALLERY.map(g => (
            <div key={g.src} className={g.className}>
              <img src={g.src} alt={g.alt} />
              <div className="gallery-overlay" />
            </div>
          ))}
        </div>
      </section>

      <section className="sponsors-section">
        <div className="section-eyebrow">2024 Partners & Sponsors</div>
        <h2 style={{ font: '700 italic clamp(28px,4vw,48px)/1.1 Archivo,sans-serif', color: '#fff', marginBottom: 48 }}>The community that made it happen.</h2>
        {SPONSOR_TIERS.map(t => (
          <div key={t.tier} className="sponsor-tier">
            <div className="tier-label">{t.tier}</div>
            <div className="sponsor-row">
              {t.pills.map(p => (
                <div key={p.name} className={sponsor-pill${p.title ? ' title-sponsor' : ''}}>{p.name}</div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="foundation-section">
        <div>
          <div className="section-eyebrow">Our charity partner</div>
          <h2 className="section-heading">Al Jalila Foundation</h2>
          <p style={{ font: "400 15px/1.7 'Inter',sans-serif", color: 'rgba(255,255,255,.55)', maxWidth: 480, marginBottom: 24 }}>Every dirham raised through Pink is Punk goes directly to Al Jalila Foundation, funding breast cancer research, early detection and patient care across the UAE. No deductions. No overheads.</p>
          <a href="https://aljalilaFoundation.ae" className="btn-mg" style={{ display: 'inline-block' }}>Al Jalila Foundation →</a>
        </div>
        <div className="foundation-image">
          <img src="/assets/images/pip-1743.jpg" alt="Pink is Punk community" loading="lazy" />
          <div className="foundation-image-overlay" />
          <div className="donation-badge">
            <span className="donation-amount">AED 123,000+</span>
            <span className="donation-label">Raised in 2024</span>
          </div>
        </div>
      </section>

      <section className="cta-strip" id="donate">
        <div className="cta-heading">Want to be part of Pink is Punk 2025? Sponsor, volunteer, or join an event.</div>
        <a href="mailto:info@ignite.ae" className="btn-white">Get involved</a>
      </section>
    </main>
    </>
  );
}