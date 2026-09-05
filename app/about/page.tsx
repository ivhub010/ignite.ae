import type { Metadata } from 'next';
import Link from 'next/link';
import { DIVISIONS } from '@/lib/divisions';
import DivisionLink from '@/components/DivisionLink';

export const metadata: Metadata = { title: 'About IGNITE - Dubai`s Active Lifestyle Brand', description: 'Meet the team behind IGNITE Dubai`s leading active lifestyle brand since 2010. Water sports, team building, corporate wellness and more.' };

const NUMBERS = [
  ['2010', 'Established'],
  ['60+', 'Years combined experience'],
  ['10k+', 'People moved'],
  ['2500+', 'Satisfied clients'],
];

const TIMELINE = [
  [
    '2002',
    'Arrives in Dubai',
    "Begins working in fitness the start of a 20+ year journey in the UAE's active lifestyle industry."
  ],

  [
    '2006',
    "Launches Dubai's first outdoor bootcamp programme",
    'Pioneers the military bootcamp concept in Dubai, creating a new fitness category in the UAE.'
  ],

  [
    '2008',
    'Founds IGNITE Pink is Punk',
    "Launches the UAE's most recognised non-profit breast cancer awareness campaign raising funds through movement every year since."
  ],

  [
    '2010',
    'IGNITE founded',
    'Launches IGNITE with Corporate Wellness as the founding vertical a multi-division active lifestyle brand from day one.'
  ],

  [
    '2012',
    'Master Trainer London Olympic Village',
    'Selected to coach at the London 2012 Olympic Games. Also wins two gold medals at the Dragon Boat World Championships in Hong Kong.'
  ],

  [
    '2013',
    'Water Sports launched - Team Building goes standalone',
    'IGNITE Water Sports launches at Palm Jumeirah. Team Building established as its own vertical IGNITE now operates three distinct service businesses.'
  ],

  [
    '2016',
    'Lead Consultant Dubai Fitness Challenge',
    'Appointed Lead Consultant for the Dubai Fitness Challenge a landmark government health initiative reaching thousands across the city.'
  ],

  [
    '2020',
    'IGNITE rebrand',
    'IGNITE undergoes a full brand refresh repositioning as a modern, multi-vertical active lifestyle group for the next decade.'
  ],

  [
    '2025',
    'Recognised by HH Sheikh Mansour',
    'Formally recognised by HH Sheikh Mansoor bin Mohammed bin Rashid Al Maktoum and Al Jalila Foundation for community impact through Pink is Punk.'
  ],

  [
    '2026',
    'KSA expansion',
    'Guillaume begins active lifestyle consultancy in the Kingdom of Saudi Arabia taking the IGNITE mission into the wider GCC.'
  ],
];

export default function About() {
  return (
    <main>
      <section className="about-hero">
        <div className="hero-bg">
          <img src="/assets/images/Guillaume-IGNITE.jpg" alt="" />

          <div className="hero-bg-overlay" />
        </div>
        <div className="about-watermark">IGNITE</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="about-eyebrow">Who we are</p>
          <h1 className="about-title">IGNITE means to spark - to kick off something<br /><span>New</span></h1>
          <p className="about-meta-value">At any phase of your life, in any context, that spark is available to you. For individuals taking their first step. For teams finding their rhythm. For communities coming together. For cities waking up and moving.</p>
          <br/>
          <div className="about-meta">
            <div className="about-meta-item">
              <p className="about-meta-label">Founded</p>
              <p className="about-meta-value">Dubai, UAE · 2010</p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Mission</p>
              <p className="about-meta-value">Our mission is to contribute to the community’s quality of life, by encouraging healthy lifestyle habits and movement</p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Services</p>
              <p className="about-meta-value">Water Sports, Kids, Team Building, Corporate Wellness, Fitness & Wellness, Consultancy</p>
            </div>
          </div>
        </div>
      </section>

      <div className="numbers-bar">
        {NUMBERS.map(([v, l]) => (
          <div key={l} className="number-item">
            <div className="number-val">{v}</div>
            <div className="number-lbl">{l}</div>
          </div>
        ))}
      </div>

      {/* <section className="pullquote">
        <p className="pullquote-text">Encouraging healthy lifestyle habits and movement is not a service we provide — <em>it&rsquo;s the reason we exist.</em></p>
        <p className="pullquote-attr">Guillaume Mariole — Founder &amp; Director, IGNITE</p>
      </section> */}

      <section className="story-section">
        <p className="story-sidebar-label">Brand story - legacy and origin</p>
        <div>
          <h2 className="story-lead">Our Story</h2>
          <p className="story-body">This belief was not born in a boardroom. Our founder has been shaping the UAE's active lifestyle landscape since 2002, working as a personal trainer in the early days of Dubai's fitness scene. He launched one of the city's first outdoor bootcamps in 2006, and a year later pioneered the UAE's first corporate wellness programme proving that movement could transform not just individuals, but entire organisations.</p>
          <p className="story-body">We started IGNITE in Dubai in 2010 with one idea and a lot of energy: that movement changes lives. What began as the UAE's first outdoor fitness programme has grown into one of the region's most recognised active lifestyle brands. Water sports, team building, corporate wellness, kids experiences and consultancy, each one built around the belief that an active, connected life is a better life.</p>
          <p className="story-body">Our approach is holistic. We believe wellness is physical, mental and social, and best achieved together. Through movement, we bring people together, build connection, and create lasting experiences.</p>
          <p className="story-body">Today we operate across the UAE and are expanding into the GCC. This is IGNITE in 2026, sixteen years of programmes built on twenty-four years of experience. And we are just getting started.</p>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-visual">
          <img src="/assets/images/Guillaume-Mariole.jpg" alt="Guillaume Mariole" />
          <div className="founder-visual-overlay" />
          <div className="founder-visual-badge">
            <p className="founder-visual-name">Guillaume Mariole</p>
            <p className="founder-visual-role">Founder & CEO, IGNITE</p>
          </div>
        </div>
        <div className="founder-text">
          <p className="content-label" style={{ color: '#D2DD29' }}>The founder</p>
          <blockquote className="founder-quote">"I started IGNITE because I believed that if we could make movement accessible and enjoyable for everyone from CEOs to kids, we could genuinely change this city."</blockquote>
          <p className="founder-body">Guillaume Mariole has been shaping Dubai's active lifestyle landscape since 2002. He launched one of the city's first outdoor bootcamps, pioneered the UAE's first corporate wellness programme, and founded IGNITE in 2010 building it into one of the region's most recognised active lifestyle brands.</p>
          <p className="content-label" style={{ color: '#D2DD29' }}>IGNITE means to spark - to kick off something new.</p>
          <p className="founder-body">At any phase of your life, that spark is available to you. That belief is not a tagline. It's what drives every programme, every session and every experience Guillaume has built over two decades from individual training to city-wide government initiatives, from kids on the water at Palm Jumeirah to corporate teams finding their rhythm on the beach.</p>
          <p className="founder-body">Over twenty years he has consulted for Al Futtaim Group, Dubai World Trade Centre, Dubai Tourism and Expo 2020, served as Lead Consultant for the Dubai Fitness Challenge, and grown IGNITE from a single corporate wellness idea into a multi-division group spanning water sports, team building, corporate wellness, kids experiences and consultancy.</p>
          <p className='founder-body'>Today Guillaume is expanding that mission into the wider GCC bringing the same belief that has driven IGNITE since day one: that movement changes lives, at whatever stage you are in.</p>
          <Link href="/contact" className="founder-cta">Get in touch →</Link>
        </div>
      </section>


      <section className="timeline-section">
        <div className="tl-header">
          <p className="tl-label">Key milestones</p>
          <h2 className="tl-heading">10 milestones · 2002 - 2026</h2>
        </div>
        <div>
          {TIMELINE.map(([yr, ev, desc]) => (
            <div key={yr} className="tl-item">
              <div className="tl-year">{yr}</div>
              <div>
                <p className="tl-event">{ev}</p>
                <p className="tl-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="divs-section">
        <div className="divs-header">
          <p className="divs-sidebar-label">Our services</p>
          <h2 className="divs-heading">Eight ways to move.</h2>
        </div>
        <div>
          {DIVISIONS.map(d => (
            <DivisionLink key={d.label} href={d.href} external={d.external} className="div-row">
              <span className="div-row-num">{d.num}</span>
              <span className="div-row-dot" style={{ background: d.color }} />
              <span className="div-row-name">{d.label}</span>
              <span className="div-row-arrow" style={{ color: d.color }}>→</span>
            </DivisionLink>
          ))}
        </div>
      </section>
    </main>
  );
}
