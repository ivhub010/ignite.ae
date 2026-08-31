import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Pink is Punk' };

const WAYS = [
  ['Run 5K', 'Put on your pink kit and join the community run. All speeds and fitness levels.'],
  ['Sunrise Yoga', 'Start the day with a guided outdoor yoga session on the beach.'],
  ['Corporate Team', 'Enter your company team and earn your pink finisher medal together.'],
  ['Sponsor the campaign', 'Partner with IGNITE and Al Jalila Foundation to amplify your brand\'s impact.'],
];

const PINK_EVENTS = [
  {
    shortTitle: 'Pink is Punk Swim:Run - Oct 3rd',
    title: 'Oct 3rd',
    text: 'Put on your pink kit and join the community for an energetic Swim:Run experience.',
    image: '/assets/images/pink-is-punk/swim-run.png',
    link: 'https://www.premieronline.com/event/ignite_pink_is_punk_swim_run_8760',
    viewphotos: 'https://www.dropbox.com/scl/fo/m9m9jl2mg6kdcw8ia72v1/AEbZWuDrCJ7U_8dY3iqbyDY?rlkey=83zifnulx0n0tm0iamaiv4voi&st=ccbjb375&dl=0',
    viewvideos: 'https://www.instagram.com/reel/DP1C4zAj_w-/?utm_source=ig_web_copy_link&igsh=ZzBjaG5jcHByemNk'
  },
  {
    shortTitle: 'Pink is Punk Moonlit Yoga - Oct 5th',
    title: 'Oct 5th',
    text: 'Join us for a calming outdoor yoga experience focused on movement, connection and community.',
    image: '/assets/images/pink-is-punk/moonlit-yoga.png',
    link: 'https://www.premieronline.com/event/ignite_pink_is_punk_moonlit_yoga_8762',
    viewphotos: 'https://www.dropbox.com/scl/fo/fy1vw2jinxsx1psjjpjl4/AMm62UfpB8kNSaNaYIsJpMs?rlkey=jf3twc6h1xx1aszqu4asoael3&dl=0',
    viewvideos: 'https://www.instagram.com/reel/DP3g7AaD0aq/?utm_source=ig_web_copy_link&igsh=MXdydTk4dTVuZWw1MQ=='
  },
  {
    shortTitle: 'Pink is Punk Pink Paddle - Oct 10th',
    title: 'Oct 10th',
    text: 'Take to the water and paddle with us in support of the Pink is Punk campaign.',
    image: '/assets/images/pink-is-punk/pink-paddle.png',
    link: 'https://www.premieronline.com/event/ignite_pink_is_punk_pink_paddle_8761',
    viewphotos: 'https://www.dropbox.com/scl/fo/gmm4req28g4luz8r92t63/AHqDDufwZT_rkscxLhR-vyk?rlkey=5jeadlhuq5mjcmgvjl0eqnxcf&st=um3xpb8p&dl=0',
    viewvideos: 'https://www.instagram.com/reel/DQLpae4D66f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
];

const PARTNER_GROUPS = [
  {
    type: 'featured',
    title: 'Charity',
    items: [
      {
        name: 'Al Jalila Foundation',
        image: '/assets/images/pink-is-punk/partners/al-jalila-foundation.png',
      },
    ],
  },
  {
    type: 'featured',
    title: 'Title Sponsor',
    items: [
      {
        name: 'Medcare',
        image: '/assets/images/pink-is-punk/partners/medcare.png',
      },
    ],
  },
  {
    title: 'Communications',
    items: [
      {
        name: 'Communications Partners',
        image: '/assets/images/pink-is-punk/partners/KPR.png',
      },
    ],
  },
  {
    title: 'Venues',
    items: [
      {
        name: 'Anantara',
        image: '/assets/images/pink-is-punk/partners/anantara.jpg',
      },
      {
        name: 'Riva',
        image: '/assets/images/pink-is-punk/partners/riva.png',
      },
    ],
  },
];

const SUPPORTING_SPONSORS = [
  {
    name: 'Supporting Sponsor 1',
    image: '/assets/images/pink-is-punk/partners/sponsor-1.png',
  },
  {
    name: 'Supporting Sponsor 2',
    image: '/assets/images/pink-is-punk/partners/sponsor-2.png',
  },
  {
    name: 'Supporting Sponsor 3',
    image: '/assets/images/pink-is-punk/partners/sponsor-3.png',
  },
  {
    name: 'Supporting Sponsor 4',
    image: '/assets/images/pink-is-punk/partners/sponsor-4.png',
  },
  {
    name: 'TOADS',
    image: '/assets/images/pink-is-punk/partners/toads.png',
  },
  {
    name: 'Life',
    image: '/assets/images/pink-is-punk/partners/life.jpg',
  },
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

          <Link href="#join-ignite-pink-is-punk" className="pip-btn pip-btn-outline">
            Join 2026 <span>→</span>
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

      <div className="pink-campaign-inner" style={{ display: 'block' }}>
          <div className="pink-campaign-content" style={{ maxWidth: '100%' }}>
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
        </div>
    </section>

      {/* <section id="campaign" className="content-block">
        <p className="content-label" style={{ color: '#CE00A0' }}>The campaign</p>
        <h2 className="content-lead">Awareness through action.</h2>
        <p className="content-body">Pink is Punk started in 2018 with a single run on Dubai Marina Walk. What began as a small community event has grown into one of the UAE&rsquo;s most recognised annual wellness campaigns, drawing thousands of participants each October and raising significant funds for breast cancer research and support at Al Jalila Foundation.</p>
        <p className="content-body">The premise is simple: wear pink, move your body, and stand with the people fighting breast cancer in our community. Every year we add a new event — a sunrise yoga session, a group swim, a beach boot camp — all under the Pink is Punk banner.</p>
      </section> */}

      <section className="pink-events-section" id='join-ignite-pink-is-punk'>
        <div className="pink-events-inner">

          <div className="pink-events-header">
            <div>
              <p className="pink-events-eyebrow">
                How to get involved
              </p>

              <h2 className="pink-events-heading">
                Join the movement.
                <span> IGNITE Pink is Punk 2026</span>
              </h2>
            </div>

            <p className="pink-events-intro">
              Take part in <b>IGNITE Pink is Punk 2026</b> and help support a community
              united through movement and purpose.
            </p>
          </div>


          <div className="pink-events-grid">
            {PINK_EVENTS.map((event, index) => (
              <article className="pink-event-card" key={event.title}>

                <a
                  href={event.link}
                  className="pink-event-image"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                  />

                  <div className="pink-event-overlay" />

                  {/* <span className="pink-event-number">
                    {String(index + 1).padStart(2, '0')}
                  </span> */}

                  <span className="pink-event-image-title">
                    {event.shortTitle}
                  </span>
                </a>


                <div className="pink-event-content">
                  {/* <h3>{event.title}</h3> */}

                  <p>{event.text}</p>

                  <a
                    href={event.viewphotos}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pink-event-link"
                  >
                    View 2025 Photos
                    <span>↗</span>
                  </a>

                  <a
                    href={event.viewvideos}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pink-event-link"
                  >
                    View 2025 Videos
                    <span>↗</span>
                  </a>

                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pink-event-link"
                  >
                    Register Now
                    <span>↗</span>
                  </a>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="pink-partners-section">
        <div className="pink-partners-inner">

          <div className="pink-events-header">
            <div>
              <p className="pink-events-eyebrow">
                Our Partners
              </p>

              <h2 className="pink-events-heading">
                Powered by people who
                <span> believe in the cause.</span>
              </h2>
            </div>

            <p className="pink-events-intro">
              IGNITE Pink is Punk is made possible with the support of our charity,
              sponsors, communications partners and venues.
            </p>
          </div>

          <div className="pink-partners-featured">
            {PARTNER_GROUPS.slice(0, 2).map(group => (
              <article
                className="pink-partner-featured-card"
                key={group.title}
              >
                <div className="pink-partner-category">
                  {group.title}
                </div>

                <div className="pink-partner-featured-logo">
                  <img
                    src={group.items[0].image}
                    alt={group.items[0].name}
                  />
                </div>
              </article>
            ))}
          </div>


          <div className="pink-partner-secondary-grid">
            {PARTNER_GROUPS.slice(2).map(group => (
              <article
                className="pink-partner-group-card"
                key={group.title}
              >
                <div className="pink-partner-category">
                  {group.title}
                </div>

                <div
                  className={`pink-partner-group-logos ${
                    group.items.length > 1 ? 'multiple' : ''
                  }`}
                >
                  {group.items.map(item => (
                    <div
                      className="pink-partner-logo-box"
                      key={item.name}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>


          <div className="pink-supporting">
            <div className="pink-supporting-header">
              <span>Supporting Sponsors</span>
              <div />
            </div>

            <div className="pink-supporting-grid">
              {SUPPORTING_SPONSORS.map(sponsor => (
                <div
                  className="pink-supporting-logo"
                  key={sponsor.name}
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}