import type { Metadata } from 'next';
import Link from 'next/link';
import { DIVISIONS } from '@/lib/divisions';
import DivisionLink from '@/components/DivisionLink';

export const metadata: Metadata = { title: 'Who we are' };

const NUMBERS = [
  ['2007', 'Established'],
  ['60+', 'Years combined experience'],
  ['10k+', 'People moved'],
  ['2500+', 'Satisfied clients'],
];

const TIMELINE = [
  ['2007', 'Corporate Wellness founded', 'First corporate wellness programmes delivered across Dubai — the flagship B2B offer that defines IGNITE to this day.'],
  ['2010', 'Fitness & Wellness launches', 'Boot camps, yoga and group classes expand IGNITE beyond the corporate world to the wider community.'],
  ['2013', 'Team Building division', 'Physical-activity-led team challenges become a standalone division, serving organisations seeking creative ways to unite their teams.'],
  ['2016', 'Water Sports — RIVA Beach', 'SUP, kayak, paddle fitness and sunrise yoga at Palm Jumeirah. IGNITE\'s most lifestyle-driven division.'],
  ['2018', 'Pink is Punk campaign', 'Breast cancer awareness campaign launches, raising funds for Al Jalila Foundation. Now an annual fixture in the UAE wellness calendar.'],
  ['2020', 'Kids, Consultancy, Surface & Homespa', 'Four new divisions complete the group — structured movement for children, strategic wellness consultancy, outdoor surface sports, and in-home spa services.'],
];

export default function About() {
  return (
    <main>
      <section className="about-hero">
        <div className="about-watermark">IGNITE</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="about-eyebrow">Who we are</p>
          <h1 className="about-title">Wellness in<br /><span>motion.</span></h1>
          <div className="about-meta">
            <div className="about-meta-item">
              <p className="about-meta-label">Founded</p>
              <p className="about-meta-value">Dubai, UAE · 2007</p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Mission</p>
              <p className="about-meta-value">Contributing to the quality of life of our community by encouraging healthy lifestyle habits and movement.</p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Services</p>
              <p className="about-meta-value">Fitness, Corporate, Team Building, Water Sports, Kids, Consultancy, Surface, Homespa</p>
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

      <section className="pullquote">
        <p className="pullquote-text">Encouraging healthy lifestyle habits and movement is not a service we provide — <em>it&rsquo;s the reason we exist.</em></p>
        <p className="pullquote-attr">Guillaume Mariole — Founder &amp; Director, IGNITE</p>
      </section>

      <section className="story-section">
        <p className="story-sidebar-label">Our story</p>
        <div>
          <h2 className="story-lead">From one corporate wellness programme to one of the UAE&rsquo;s most trusted multi-division health groups.</h2>
          <p className="story-body">IGNITE started in 2007 with a simple belief: that movement changes everything. Our first programmes were delivered to corporate teams in Dubai who were looking for something beyond the standard gym membership. We created experiences that actually moved people.</p>
          <p className="story-body">Over seventeen years, that idea has grown into eight divisions, hundreds of client relationships, and tens of thousands of individuals who have moved, competed, recovered, and thrived with IGNITE.</p>
          <p className="story-body">We operate across the full spectrum of wellness — from high-intensity outdoor boot camps on the beach, to in-home spa treatments, to strategic workforce health consultancy for the region&rsquo;s largest organisations.</p>
        </div>
      </section>

      <section className="timeline-section">
        <div className="tl-header">
          <p className="tl-label">Timeline</p>
          <h2 className="tl-heading">Seventeen years of building something meaningful.</h2>
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

      <section className="founder-section">
        <div className="founder-visual">
          <img src="/assets/images/lifestyle-152A8124.jpg" alt="Guillaume Mariole" />
          <div className="founder-visual-overlay" />
          <div className="founder-visual-badge">
            <p className="founder-visual-name">Guillaume Mariole</p>
            <p className="founder-visual-role">Founder &amp; Director</p>
          </div>
        </div>
        <div className="founder-text">
          <p className="content-label" style={{ color: '#D2DD29' }}>The founder</p>
          <blockquote className="founder-quote">&ldquo;I started IGNITE because I believed that if we could make movement accessible and enjoyable for everyone — from CEOs to kids — we could genuinely change this city.&rdquo;</blockquote>
          <p className="founder-body">Guillaume has spent nearly two decades building IGNITE from a single corporate wellness idea into a multi-division group that touches every corner of the UAE&rsquo;s health and fitness landscape.</p>
          <p className="founder-body">His background spans exercise science, organisational psychology, and over 15 years of hands-on programme delivery across the region&rsquo;s most prominent organisations.</p>
          <Link href="/contact" className="founder-cta">Get in touch →</Link>
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
