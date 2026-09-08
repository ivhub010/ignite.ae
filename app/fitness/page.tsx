import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Fitness & Wellness' };

const SERVICES = [
  ['Outdoor Boot Camp', 'High-intensity interval training in the open air. Beach, park, or corporate campus — we come to you.'],
  ['Yoga & Mindfulness', 'Flow, Hatha, Yin, and mindfulness sessions guided by certified instructors.'],
  ['Group Classes', 'Functional fitness, HIIT, circuit training — small group sessions that build community.'],
  ['Personal Coaching', 'One-to-one coaching tailored to your goals, schedule, and training history.'],
  ['Corporate Classes', 'On-site classes for your team. Morning, lunchtime, or after work.'],
  ['Wellness Workshops', 'Nutrition, sleep, stress — education sessions that complement physical training.'],
];

export default function Fitness() {
  return (
    <main>
      <section className="sec-hero">
        <div className="sec-hero-bg">
          <img src="/assets/images/IGNITE-Fitness-Wellness.png" alt="" />
          <div className="sec-hero-bg-ov" />
        </div>
        <div className="sec-hero-content">
          <p className="sec-eyebrow" style={{ color: '#C2D500' }}>Fitness &amp; Wellness</p>
          <h1 className="sec-title" style={{ color: '#C2D500' }}>Move.<br /><span style={{ color: '#fff' }}>Every day.</span></h1>
          <p className="sec-sub">Outdoor boot camps, yoga, group classes, and personal coaching — designed to fit any fitness level and delivered across Dubai.</p>
        </div>
      </section>

      <section className="content-block">
        <p className="content-label" style={{ color: '#C2D500' }}>What we offer</p>
        <h2 className="content-lead">Fitness that works for real life.</h2>
        <p className="content-body">Our Fitness &amp; Wellness programmes are built around one idea: movement that people actually enjoy keeps them coming back. We design sessions that challenge, inspire, and adapt — whether you&rsquo;re a complete beginner or a seasoned athlete.</p>
        <div className="card-grid">
          {SERVICES.map(([t, d]) => (
            <div key={t} className="card">
              <h3 className="card-title">{t}</h3>
              <p className="card-body">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-block dark">
        <p className="content-label" style={{ color: '#C2D500' }}>Ready to start?</p>
        <h2 className="content-lead">Your first session is on us.</h2>
        <p className="content-body">Come and try an IGNITE class before you commit to anything. Contact us to book your complimentary taster session.</p>
        <Link href="/contact" className="btn-primary">Book a free session</Link>
      </section>
    </main>
  );
}
