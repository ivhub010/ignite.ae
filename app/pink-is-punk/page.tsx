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

      {/* Background */}
      <div className="hero-bg">
        <img
          src="/assets/images/Swim-Run.jpg"
          alt=""
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* Hero Content */}
      <div className="pip-hero-content">

        <div className="pip-campaign-label">
          🎗 BREAST CANCER AWARENESS · 2024
        </div>

        <h1 className="pip-title">
          Pink
          <br />
          is <span>Punk.</span>
        </h1>

        <p className="pip-sub">
          Three events. One mission. 100% of donations go to Al Jalila
          Foundation — funding breast cancer research and care across the UAE.
        </p>

        <div className="pip-raised">
          <div className="pip-raised-amount">
            AED 123,000+
          </div>

          <div className="pip-raised-copy">
            AED raised in 2024, donated
            <br />
            in full to Al Jalila Foundation
          </div>
        </div>

        <div className="pip-actions">
          <Link href="#campaign" className="pip-btn pip-btn-primary">
            SEE THE CAMPAIGN
          </Link>

          <Link href="/contact" className="pip-btn pip-btn-outline">
            SUPPORT 2025 <span>→</span>
          </Link>
        </div>

      </div>

    </section>

    <section className="pink-campaign-section">
      <div className="pink-campaign-inner">

        <div className="pink-campaign-content">
          <p className="pink-campaign-eyebrow">
            Community Impact
          </p>

          <h2 className="pink-campaign-title">
            IGNITE Pink is Punk 2025:
            <span> United in Movement. United in Purpose.</span>
          </h2>

          <p className="pink-campaign-lead">
            We are proud to share that this year’s IGNITE Pink is Punk campaign
            raised an outstanding <strong>AED 111,858</strong> in support of
            Al Jalila Foundation breast cancer research and treatment initiatives.
          </p>

          <div className="pink-campaign-events">
            <div className="pink-campaign-events-title">
              Across three community driven events
            </div>

            <ul>
              <li>Pink is Punk Swim:Run</li>
              <li>Pink Moonlit Yoga</li>
              <li>Pink Paddle</li>
            </ul>
          </div>

          <p>
            We witnessed exceptional participation, energy, and commitment from
            partners, supporters, and the wider UAE community.
          </p>

          <p>
            This collective effort reflects the power of unity, movement, and
            shared purpose in driving meaningful impact. We extend our sincere
            appreciation to all our partners, sponsors, and participants for
            standing with us and helping create real change.
          </p>

          <div className="pink-campaign-permit">
            <span>IACAD Permit</span>
            <strong>PRHCE-004691180</strong>
          </div>

          <a
            href="https://www.youtube.com/watch?v=0k6vQakH-LM"
            target="_blank"
            rel="noopener noreferrer"
            className="pink-campaign-cta"
          >
            IGNITE Pink is Punk Campaign video 2024
            <span>↗</span>
          </a>
        </div>


        <div className="pink-campaign-gallery">

          <div className="pink-campaign-main-image">
            <img
              src="/assets/images/ignite.ae-8-600x300.png"
              alt="IGNITE Pink is Punk campaign"
            />

            <div className="pink-campaign-image-badge">
              Pink is Punk
            </div>
          </div>

          {/* <div className="pink-campaign-sub-grid">

            <div className="pink-campaign-sub-image pink-logo-card">
              <img
                src="/assets/images/pink-is-punk/Pink-is-Punk-logo-original-1.jpg"
                alt="Pink is Punk"
              />
            </div>

            <div className="pink-campaign-sub-image iacad-card">
              <img
                src="/assets/images/pink-is-punk/iacad.png"
                alt="IACAD"
              />
            </div>

          </div> */}

        </div>

      </div>
    </section>

      <section id="campaign" className="content-block">
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