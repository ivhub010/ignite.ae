'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import DivisionRail from '@/components/DivisionRail';

const WORDS = ['purpose.', 'motion.', 'balance.', 'forward.', 'community.'];

const TESTIMONIALS = [
  {
    quote: `IGNITE Corporate Wellness has redefined what the Vibrant Living program is to P&G.; From the flexibility of working with the team to the variety of initiatives available by the team to offer our organization, we have trusted Ignite to lead and execute our Company Wellness Program, with huge results and positive feedback from our employees. Thank You, on behalf of P&G;`,
    name: 'Rashed Al Sadiq',
    co: 'HR BAM Finance & Accounting AP/ HR Site Operations Leader P&G;',
    image: 'assets/images/testimonials/rashid.jpg',
  },
  {
    quote: `IGNITE corporate wellness have been instrumental in the success of our NRG wellness program. They helped build and structure the program and now part & parcel of our corporate family.

Whether its wellness events, talks, training for corporate expeditions all the way to managing & consulting on our in-house gym, Ignite are always there to support. After all, they have been our trusted partner for the past 5 years and will remain so as long as its driven by the passion of its founder Guillaume.`,
    name: 'Fadi Chamat',
    co: 'Omnicom Media Group Regional Executive Director – People Team',
    image: 'assets/images/testimonials/Fadi-Chamat.jpg',
  },
  {
    quote: `We had an offsite meeting last week with booking.com colleagues traveling from all over Europe and we asked the IGNITE team to organize team activities on the beach at The8 Hotel. Unfortunately, due to rainy weather, we have to completely change the venue to the indoor hall at Arjaan Hotel.

Guillaume was very supportive and accommodating from the beginning, making sure that we can run the activities smoothly even with the last-minute changes. Their team is very quick to set up all the equipment on time before the event starts.

We received so much positive feedback from colleagues, it was really fun, energetic, and very well-organized. Thank you so much Guillaume and the entire IGNITE team.`,
    name: 'William Simanjuntak',
    co: 'Strategic Partnerships Manager - - Middle East, Africa & Turkey at Booking.com',
    image: 'assets/images/testimonials/1648149503416.jpeg',
  },
  {
    quote: `Ignite helped wasl Owners Association by employing professional trainers and providing a professional management format to run the health club which has led to an increased revenue stream for the association and also provided a refreshed outlook for the residence.

The result is the health club is providing our residence with premier training options in house, our costs are being streamlined and the revenue increased. The trainers are all certified with all proper documentation from the municipality.

Their flexibility to cater to the specific needs of the communities residence is appreciated and their participation in community events has quickly made them a staple part of the community.

As a community manager I  would recommend Ignite to other communities who have a requirement for premier services for high end clientele, with all regulations followed providing for a safe and pleasant experience for their residents.`,
    name: 'Muhammad Osman Mumtaz',
    co: 'Association Officer - Property Management',
    image: 'assets/images/testimonials/Osman-Wasl-pic.png',
  },
  {
    quote: `Guillame and his team at IGNITE delivered a very well-organized set of team building activities for us on our Annual Wellness summit day with a strong focus on wellbeing. The event was smooth, engaging, and thoughtfully executed. We've worked with them multiple times, and each experience has been consistently satisfying. A great choice for any team building initiative and I would not hesitate recommending them to anyone.`,
    name: 'Fizza Sabir',
    co: 'Regional People and Culture Advisor, HR Head of Section, DNV',
    image: 'assets/images/testimonials/fizaa.jpg',
  },
  {
    quote: `We are a leading offshore law firm and engaged IGNITE to help us conceptualise an outdoor and active event for our referring law firms.  IGNITE produced  the "Walkers Beach Olympiad" in 2012 and have managed it for us for the last 6 years – growing from 40 participants to 170+ in 2018.  Guillaume and the team at IGNITE always put on a slick event and we would recommend any company or individual that wanted to be aligned with their services and offerings.`,
    name: 'Daniel Wood',
    co: 'Partner Walkers (Dubai) LLP',
    image: 'assets/images/testimonials/Daniel-Wood-2.png',
  },
  {
    quote: `We chose Ignite to run our corporate team building activity at one of our Deloitte events based on the energy and team spirit they had exuded at a previous event I had attended. The day was a great success and the Ignite team were very professional and set the right tone for an afternoon full of competitive and fun activities. Thanks Guillaume and the team at Ignite, we look forward to working with you again in the future`,
    name: 'Katie Fyfe',
    co: 'HR Assistant Director, Deloitte Professional Services (DIFC) Limited',
    image: 'assets/images/testimonials/Katie-Fyfe38.jpg',
  },
  {
    quote: `Jotun the market leader of Paints industry in UAE. Big part of Jotun’s leadership is because of the strong relationships we maintain and develop with diversified groups of customers. Ignite helped us with maintaining and strengthen these relationship through two main things; their high commitment to the plans and their high ability to meet our customers’ preferences and insights. This made every activity we had with Ignite meet its objectives perfectly.`,
    name: 'Yahia Maher',
    co: 'Marketing Manager – Jotun',
    image: 'assets/images/testimonials/Yahia-Maher.jpg',
  },
  {
    quote: `We would like to thank IGNITE for helping to organise our annual team building afternoon. The manner in which they conducted the games as well as the level of enthusiasm on the day left everyone in great spirits. A special thanks to Isobel for all of her help and guidance before the day. The atmosphere in the team since has been very positive and we’d gladly recommend Ignite to anyone looking for a professional team-building company to work with. I look forward to working with Guillaume and the rest of the IGNITE team for our event next year.`,
    name: 'Botan Osman',
    co: 'Managing Director – Restrata',
    image: 'assets/images/testimonials/Botan-Osman.jpg',
  },
  {
    quote: `I just wanted to say a huge thank you for everything the IGNITE team did to make our event run so well. Everything turned out perfectly, while running smoothly. The seamless transition between sessions was remarkable. Our executive members are very happy with how it went, and we’ve had feedback from staff that this is the best staff event they’ve been to. The IGNITE team was integral to the seamless production of our annual staff gathering. Their organizational skills and attention to detail is well noticed, working within the constraints of a ‘live to air’ production. We look forward to working with the team for more events in the future.`,
    name: 'Adnan El Balbissi',
    co: 'HR & Admin Manager - RAK ICC',
    image: 'assets/images/testimonials/testi-07.jpg',
  },
  {
    quote: `“On behalf of all the team at Geberit Gulf Representative Office, I would like to thank the staff at Ignite for a well prepared and conducted Team Building afternoon prepared specifically to bring out the best of team cooperation and spirit in a fun enjoyable series of games. Keep up the good works lads and looking forward to seeing you again in our 2021 Kickoff event.”`,
    name: 'Gabriel Nassar',
    co: 'MD Geberit Gulf Rep. Office',
    image: 'assets/images/testimonials/Gabriel-Nassar-Geberit.jpg',
  },
  {
    quote: `“In the month of June, we had a team building activity focused through sports activities, with the IGNITE team for 160 Deloitte M.E. Risk Advisory professionals people. The IGNITE team was just amazing – well-planned, very structured, organized understanding, adaptable to change on the fly; and very enthusiastic.

You must see them on the ground with high levels of energy that rejuvenate the teams to boost their energy levels & participate throughout without breaks.

As part of people’s mental well-being, team building & networking.. this was a great event organized by the IGNITE team, huge kudos.

Highly professional and truly recommend the Ignite team which brings the positive vibe, and energy for a successful team building activity. We had a fantastic experience! Great job team!!!”`,
    name: 'Ajay B',
    co: 'Senior Manager, Deloitte Risk Advisory Team',
    image: 'assets/images/testimonials/Ajay-Deloitte.jpg',
  },
  {
    quote: `“As a new team based in different parts of the world, the activities organized by IGNITE were really good as they thought us valuable lessons about working together and trusting each other. IGNITE team was very supportive and took the time to understand our needs to deliver tailor-made activities for us. This was the second activity with Ignite and in both cases, it has proven to be fun and very appropriate for developing team skills while having fun at the same time.”`,
    name: 'Kwame Kwakye Aboagye',
    co: 'Financing Solutions and Operations Support Manager',
    image: 'assets/images/testimonials/Kwame-Kwakye-Aboagye.jpg',
  },
];

const BRANDS = [
  { name: "4 SIGHT", image: "/assets/images/brands/4-sight-global-logo-e1738058076673.jpg" },
  { name: "Face", image: "/assets/images/brands/FACE-logo-e1738057789603.jpg" },
  { name: "Instashop", image: "/assets/images/brands/InstaShop-logo.png" },
  { name: "Omniyat", image: "/assets/images/brands/omniyat-logo-e1737548528518.jpg" },
  { name: "ICBA", image: "/assets/images/brands/ICBA-logo.png" },
  { name: "Damac", image: "/assets/images/brands/DAMAC-logo-e1735822317400.png" },
  { name: "ENOC", image: "/assets/images/brands/ENOC-logo.png" },
  { name: "3C Metal", image: "/assets/images/brands/3C-Metal-logo-e1735822232377.jpg" },
  { name: "Vista", image: "/assets/images/brands/VISTA-logo.png" },
  { name: "Duracell", image: "/assets/images/brands/Duracell-logo.png" },

  { name: "StickyGinger", image: "/assets/images/brands/Stickyginger.png" },
  { name: "Talabat", image: "/assets/images/brands/Talabat-Logo-new-2025.jpeg" },
  { name: "Shurooq", image: "/assets/images/brands/Shurooq-Logo.jpg" },
  { name: "PWC", image: "/assets/images/brands/PricewaterhouseCoopers_Logo.png" },
  { name: "NMK", image: "/assets/images/brands/NMK.png" },
  { name: "General Mills", image: "/assets/images/brands/Gen-Mills.png" },
  { name: "Flow Test", image: "/assets/images/brands/Flow-Test.png" },
  { name: "Dubai Customs", image: "/assets/images/brands/dubai-customs-vector-logo.png" },
  { name: "DNV", image: "/assets/images/brands/DNV-Logo.jpg" },
  { name: "Deloitte", image: "/assets/images/brands/Deloitte-Logo.jpg" },
  { name: "Chanel", image: "/assets/images/brands/Chanel-logo.png" },
  { name: "Buhler", image: "/assets/images/brands/Buhler-logo.png" },
  { name: "Axis Communications", image: "/assets/images/brands/Axis-Communication-Logo.jpg" },
  { name: "Booking.com", image: "/assets/images/brands/2560px-Booking.com_logo.png" },

  { name: "McKinsey", image: "/assets/images/brands/McKinsey_2019.png" },
  { name: "RAK ICC", image: "/assets/images/brands/rakicc_logo-.png" },
  { name: "Averda", image: "/assets/images/brands/averda.jpg" },

  { name: "Masar", image: "/assets/images/brands/masar.png" },
  { name: "Danzas", image: "/assets/images/brands/danzas.png" },
  { name: "Idemia", image: "/assets/images/brands/idemia.png" },
  { name: "Manzil", image: "/assets/images/brands/manzil.png" },
  { name: "Techno Gym", image: "/assets/images/brands/technogym.png" },
  { name: "Smart Dubai", image: "/assets/images/brands/smart-dubai.png" },

  { name: "Walkers", image: "/assets/images/brands/walkers.png" },

  { name: "DP World", image: "/assets/images/brands/dp-world.png" },
  { name: "Dubai Media INC", image: "/assets/images/brands/dubai-media-inc.png" },
  { name: "Dubai World Trade Center", image: "/assets/images/brands/dubai-trade-center.png" },
  { name: "Land Department", image: "/assets/images/brands/land-dept.png" },
  { name: "Omnicom Media Group", image: "/assets/images/brands/omnimediagroup.png" },
  { name: "RTA", image: "/assets/images/brands/rta-roads.png" },
  { name: "DLA Piper", image: "/assets/images/brands/dla-piper.png" },
  { name: "Bloomberg", image: "/assets/images/brands/bloomberg.png" },
  { name: "Coca Cola", image: "/assets/images/brands/coca-cola.png" },
  { name: "Department of Economic Development", image: "/assets/images/brands/department-of-economic-development.png" },
  { name: "Dubai Holding", image: "/assets/images/brands/dubai-holding.png" },
  { name: "Dubai Tourism", image: "/assets/images/brands/dubai-tourism.png" },
  { name: "Hult International Business School", image: "/assets/images/brands/hult-IBS.png" },
  { name: "JLW", image: "/assets/images/brands/JLW-1875.png" },
  { name: "Jotun", image: "/assets/images/brands/jotun.png" },
  { name: "Michael Page", image: "/assets/images/brands/michael-page.png" },
  { name: "Microsoft", image: "/assets/images/brands/microsoft.png" },
  { name: "Nestle", image: "/assets/images/brands/nestle.png" },
  { name: "Oman Insurance Company", image: "/assets/images/brands/oman-ins-company.png" },
  { name: "Pepsico", image: "/assets/images/brands/pepsico.png" },
  { name: "P&G", image: "/assets/images/brands/P-G.png" },
  { name: "Rotana Hotels & Resorts", image: "/assets/images/brands/rotana-hotels.png" },
  { name: "Seadrill", image: "/assets/images/brands/seadrill.png" },
  { name: "Shuaa Capital", image: "/assets/images/brands/shuaa-capital.png" },
  { name: "Siemens", image: "/assets/images/brands/siemens.png" },
  { name: "Stephenson Harwood", image: "/assets/images/brands/stephenson-harwood.png" },
  { name: "Stolt Nielsen", image: "/assets/images/brands/stolt-nielsen.png" },
];


const LATEST_NEWS = [
  {
    date: 'February 13, 2026',
    title: 'Société Générale',
    image: '/assets/images/news/societe.png',
    // link: 'https://ignite.ae/societe-generale/',
    link: '#',
    description:
      'A fantastic afternoon with the Société Générale team! Colleagues from across the region joined us for a Beach Team Building session designed to challenge, energize, and strengthen collaboration. From engaging team exercises to problem-solving challenges, everyone brought their best. We concluded the day with a BBQ buffet and awards, celebrating achievements and creating lasting memories. At IGNITE, we create experiences that build stronger teams and meaningful connections. #TeamBuilding #EmployeeEngagement #Collaboration',
  },
  {
    date: 'January 16, 2026',
    title: 'Promo Fix',
    image: '/assets/images/news/promofix.png',
    // link: 'https://ignite.ae/promo-fix/',
    link: '#',
    description:
      'A fantastic afternoon with the Pro Fix team! Following their team kick-off, we hosted an engaging session filled with energy, collaboration, and meaningful team challenges. It was inspiring to see everyone connect, have fun, and build stronger bonds. We look forward to partnering with this team again and creating more memorable experiences! #TeamBuilding #EmployeeEngagement #Collaboration',
  },
  {
    date: 'January 08, 2026',
    title: 'Trust Wallet',
    image: '/assets/images/news/Turst_Wallet-scaled.jpg',
    // link: 'https://ignite.ae/trust-wallet/',
    link: '#',
    description:
      'We had a fantastic afternoon with the senior team from Trust Wallet. Brilliant energy, strong engagement, and great vibes all around, it was a pleasure working with such a dynamic team. We look forward to working with them again soon!',
  },
  {
    date: 'December 18, 2025',
    title: 'Facecard Team',
    image: '/assets/images/news/Face-group-shot-18.12.25-scaled.jpg',
    // link: 'https://ignite.ae/facecard-team/',
    link: '#',
    description:
      'We loved closing the year with the Facecard team in full festive spirit! From energizing yoga and Zumba sessions, to refreshing ice plunges, standup paddleboarding, kayaking, and a healthy breakfast to fuel it all – we made the most of the season together. And of course, a special surprise visit from Santa Claus and his helper added the perfect festive touch!',
  },
  {
    date: 'November 26, 2025',
    title: 'DNV Team',
    image: '/assets/images/news/DNV-Group-Shot-2025-scaled.jpg',
    // link: 'https://ignite.ae/dnv-team/',
    link: '#',
    description:
      'We had an incredible time with the DNV team, supporting their Wellness Day at JA Resort. The energy they bring is truly unmatched, two hours of constant enthusiasm, positivity, and engagement. Working with this team never feels like work; they lift the entire experience. Thank you once again for your trust and partnership. We look forward to creating even more impactful moments together in 2026.',
  },
  {
    date: 'October 20, 2025',
    title: 'A Wonderful Morning With The Emirates Facecard Team',
    image: '/assets/images/news/Emirates-Facecard-Oct-20th-scaled.jpg',
    // link: 'https://ignite.ae/a-wonderful-morning-spent-with-the-emirates-facecard-team/',
    link: '#',
    description:
      'We started the session with a sensual beach yoga class, followed by invigorating ice plunges and stand-up paddleboarding to soak up some vitamin sea. The morning concluded with a beautiful breakfast on the RIVA terrace, where the team could relax, unwind, and also choose to continue enjoying the services of IGNITE Water Sports. A perfect blend of wellness, recovery, and connection by the beach.',
  },
];

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  const statsRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState([2007, 0, 0, 0]);

  const [playVideo, setPlayVideo] = useState(false);

  // Put your YouTube video ID here later
  const youtubeId = '0k6vQakH-LM';


  useEffect(() => {
    const t = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => { setWordIdx(i => (i + 1) % WORDS.length); setWordVisible(true); }, 400);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = testimonialRef.current;
    if (!carousel) return;

    const interval = setInterval(() => {
      const firstCard = carousel.querySelector(
        '.testimonial-card'
      ) as HTMLElement | null;

      if (!firstCard) return;

      const gap = 24;
      const scrollAmount = firstCard.offsetWidth + gap;

      const maxScroll =
        carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScroll - 10) {
        carousel.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        carousel.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const targets = [2010, 60, 10000, 2500];
    const obs = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1800, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        setCounts(targets.map(v => Math.round(ease * v)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-bg">
          <img src="/assets/images/home-hero-ignite.png" alt="" />
          <div className="hero-bg-overlay" />
        </div>
        <div className="hero-left">
          <div className="hero-accent-line" />
          <p className="hero-eyebrow">Dubai UAE · Since 2010</p>
          <h1 className="hero-display">
            Move with<br />
            <span className="hero-word" style={{
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity .4s ease, transform .5s cubic-bezier(.16,1,.3,1)',
            }}>{WORDS[wordIdx]}</span>
          </h1>
          <p className="hero-sub">IGNITE means to spark, to kick off something new. At any phase of your life, in any context, that spark is available to you. For individuals taking their first step. For teams finding their rhythm. For communities coming together. For cities waking up and moving.</p>
          <div className="hero-actions">
            <a href="#divisions" className="btn-primary">Explore Services</a>
            <Link href="/contact" className="btn-ghost">Talk to us <span style={{ color: '#D2DD29' }}>→</span></Link>
          </div>
          {/* <div className="hero-stats">
            <div><div className="hero-stat-num">2010</div><div className="hero-stat-label">Established</div></div>
            <div><div className="hero-stat-num">10k+</div><div className="hero-stat-label">People moved</div></div>
            <div><div className="hero-stat-num">2500+</div><div className="hero-stat-label">Satisfied Clients</div></div>
            <div><div className="hero-stat-num">8</div><div className="hero-stat-label">Divisions</div></div>
          </div> */}
        </div>
      </section>

      <DivisionRail />

      <section className="stats-section" ref={statsRef}>
        <p className="stats-eyebrow">By the numbers</p>
        <h2 className="stats-heading">Seventeen years of moving people forward.</h2>
        <div className="stats-grid">
          <div className="stat-tile"><div className="stat-num">{counts[0]}</div><div className="stat-label">Established</div></div>
          <div className="stat-tile"><div className="stat-num">{counts[1]}+</div><div className="stat-label">Years combined experience</div></div>
          <div className="stat-tile"><div className="stat-num">{counts[2].toLocaleString('en-US')}+</div><div className="stat-label">People moved</div></div>
          <div className="stat-tile"><div className="stat-num">{counts[3]}+</div><div className="stat-label">Satisfied clients</div></div>
        </div>
      </section>

      <section className="pink-punk-section">
        <div className="pink-punk-inner">
          <div className="pink-punk-content">
            <p className="pink-punk-eyebrow">
              Community Impact
            </p>

            <h2 className="pink-punk-title">
              IGNITE Pink is Punk <span>2025</span>
            </h2>

            <p className="pink-punk-intro">
              <strong>IGNITE Pink is Punk 2025:</strong>{' '}
              United in Movement. United in Purpose.
            </p>

            <p>
              We are proud to share that this year’s IGNITE Pink is Punk
              campaign raised an outstanding AED 111,858 in support of Al Jalila
              Foundation breast cancer research and treatment initiatives.
            </p>

            <div className="pink-punk-events">
              <p>Across three community driven events</p>

              <ul>
                <li>Pink is Punk Swim:Run</li>
                <li>Pink Moonlit Yoga</li>
                <li>Pink Paddle</li>
              </ul>
            </div>

          </div>

          <div className="pink-punk-media">
            {!playVideo ? (
              <button
                  type="button"
                  className="pink-punk-video-poster"
                  onClick={() => setPlayVideo(true)}
                  aria-label="Play Pink is Punk video"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg)`,
                  }}
                >
                  <div className="pink-punk-video-overlay" />

                  {/* <div className="pink-punk-video-label">
                    Watch the story
                  </div> */}

                  <div className="pink-punk-play">
                    <span />
                  </div>

                  <div className="pink-punk-video-footer">
                    <span>IGNITE Pink is Punk</span>
                    <span>Play video</span>
                  </div>
                </button>
            ) : youtubeId ? (
              <div className="pink-punk-video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title="IGNITE Pink is Punk"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="pink-punk-video-placeholder">
                Add your YouTube ID to play the video.
              </div>
            )}
          </div>

        </div>

        <div className="pink-punk-inner" style={{ display: 'block' }}>
          <div className="pink-punk-content" style={{ maxWidth: '100%' }}>
            <p>
              We witnessed exceptional participation, energy, and commitment
              from partners, supporters, and the wider UAE community.
            </p>

            <p>
              This collective effort reflects the power of unity, movement, and
              shared purpose in driving meaningful impact. We extend our sincere
              appreciation to all our partners, sponsors, and participants for
              standing with us and helping create real change.
            </p>

            <div className="pink-punk-permit">
              IACAD Permit: PRHCE-005939271
            </div>

            <Link className="pink-punk-link" href="/pink-is-punk">Read More<span>↗</span></Link>
          </div>
        </div>

      </section>

      <section className="testimonial-section">
        <div className="testimonial-header">
          <p className="t-label">What our clients say</p>

          <h2 className="testimonial-title">
            Trusted by teams across the UAE.
          </h2>
        </div>

        <div
          className="testimonial-carousel"
          ref={testimonialRef}
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              className="testimonial-card"
              key={`${t.name}-${i}`}
            >
              <div className="testimonial-image">
                <img src={t.image} alt={t.name} />

                <span className="testimonial-quote-mark">
                  &ldquo;
                </span>
              </div>

              <div className="testimonial-card-content">
                <blockquote className="testimonial-quote">
                  {t.quote}
                </blockquote>

                <div className="testimonial-person">
                  <span className="testimonial-line" />

                  <div>
                    <div className="testimonial-name">
                      {t.name}
                    </div>

                    <div className="testimonial-company">
                      {t.co}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brands-section">
        <div className="brands-heading">
          <span>Our Clients</span>
        </div>

        <div className="brands-marquee">
          <div className="brands-track">

            <div className="brands-group">
              {BRANDS.map((brand, index) => (
                <div className="brand-item" key={`brand-a-${index}`}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="brands-group" aria-hidden="true">
              {BRANDS.map((brand, index) => (
                <div className="brand-item" key={`brand-b-${index}`}>
                  <img
                    src={brand.image}
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="latest-news-section">
        <div className="latest-news-header">
          <div>
            <p className="news-eyebrow">Latest news</p>

            <h2 className="news-heading">
              What we've been <span>up to.</span>
            </h2>
          </div>

        </div>

        <div className="news-carousel">
          {LATEST_NEWS.map((item, index) => (
            <article className="news-card" key={item.title}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card-image"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="news-image-shade" />

                <span className="news-card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </a>

              <div className="news-card-content">
                <div className="news-card-date">
                  {item.date}
                </div>

                <h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </h3>

                <p>{item.description}</p>

                {/* <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-card-link"
                >
                  Discover
                  <span>↗</span>
                </a> */}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
