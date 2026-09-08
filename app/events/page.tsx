import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Events' };

const EVENTS = [
  { month:'Mar', date:'Mar 2025', title:'IGNITE Beach Boot Camp Series', tag:'Fitness',       loc:'Kite Beach, Dubai', desc:'Eight-week outdoor boot camp programme. All fitness levels welcome. Runs every Saturday at sunrise.' },
  { month:'Apr', date:'Apr 2025', title:'Pink is Punk Run 2025',         tag:'Community',     loc:'Dubai Marina Walk', desc:'Annual 5K run in support of breast cancer awareness. Dress in pink, run with purpose.' },
  { month:'May', date:'May 2025', title:'Corporate Wellness Summit',     tag:'Corporate',     loc:'DIFC, Dubai',       desc:'Half-day workshop for HR and wellness leads. Covering programme design, ROI measurement, and employee engagement.' },
  { month:'Jun', date:'Jun 2025', title:'RIVA Beach SUP & Yoga Weekend', tag:'Water Sports',  loc:'Palm Jumeirah',     desc:'A full weekend of stand-up paddleboarding, sunrise yoga, and beach meditation sessions.' },
  { month:'Jul', date:'Jul 2025', title:'Kids Summer Fit Camp',          tag:'Kids',          loc:'Various locations', desc:'Two-week structured movement and play camp for children aged 6–14. Small groups, certified coaches.' },
  { month:'Sep', date:'Sep 2025', title:'IGNITE Annual Team Challenge',  tag:'Team Building', loc:'Hatta Mountains',   desc:'Full-day outdoor team challenge. Designed for corporate groups of 20–200. Custom programmes available.' },
];

export default function Events() {
  return (
    <main>
      <section className="sec-hero">
        <div className="sec-hero-bg">
          <img src="/assets/images/Swim-Run.jpg" alt="" />
          <div className="sec-hero-bg-ov" />
        </div>
        <div className="sec-hero-content">
          <p className="sec-eyebrow" style={{ color: '#D2DD29' }}>Events &amp; programmes</p>
          <h1 className="sec-title">Move with<br />the community.</h1>
          <p className="sec-sub">From sunrise beach boot camps to corporate wellness summits — find an IGNITE event that suits you.</p>
        </div>
      </section>

      <section className="content-block">
        <p className="content-label" style={{ color: '#D2DD29' }}>Upcoming events</p>
        <h2 className="content-lead">What&rsquo;s on in 2025.</h2>
        <div className="events-grid">
          {EVENTS.map(ev => (
            <article key={ev.title} className="event-card">
              <div className="event-date-num">{ev.month}</div>
              <span className="event-tag">{ev.tag}</span>
              <h3 className="event-title">{ev.title}</h3>
              <p className="event-desc">{ev.desc}</p>
              <p className="event-meta">{ev.loc} · {ev.date}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 60, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <p className="content-body">Looking for a custom corporate event or bespoke programme? We design and deliver tailored wellness experiences for teams of any size.</p>
          <Link href="/contact" className="btn-primary">Enquire about a custom event</Link>
        </div>
      </section>
    </main>
  );
}
