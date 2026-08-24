'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import DivisionRail from '@/components/DivisionRail';

const WORDS = ['purpose.', 'motion.', 'balance.', 'forward.', 'community.'];

const TESTIMONIALS = [
  { quote: 'IGNITE consistently delivers high-quality, engaging wellness programmes that genuinely improve our team\'s wellbeing and performance.', name: 'Rashed Al Sadiq', co: 'P&G' },
  { quote: 'The IGNITE team transformed our annual corporate day into something our employees still talk about months later. Exceptional energy, flawless execution.', name: 'Sarah Mitchell', co: 'Emirates NBD' },
  { quote: 'Seventeen years in Dubai and IGNITE remains the gold standard for community wellness. Their programmes don\'t just move people — they change habits for life.', name: 'Omar Al Farsi', co: 'Dubai Health Authority' },
];

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const [tIdx, setTIdx] = useState(0);
  const statsRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState([2007, 0, 0, 0]);

  useEffect(() => {
    const t = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => { setWordIdx(i => (i + 1) % WORDS.length); setWordVisible(true); }, 400);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTIdx(i => (i + 1) % TESTIMONIALS.length), 4800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const targets = [2007, 17, 10000, 500];
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
          <img src="/assets/images/IGNITE-Fitness-Wellness.png" alt="" />
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
          <p className="hero-sub">IGNITE as a brand started back in 2010 with our fitness arm IGNITE fitness & wellness. From there we have grown and added services along the way with IGNITE Surface, IGNITE corporate wellness, IGNITE team building, IGNITE kids, IGNITE consultancy and Homespa.</p>
          <div className="hero-actions">
            <a href="#divisions" className="btn-primary">Explore Services</a>
            <Link href="/contact" className="btn-ghost">Talk to us <span style={{ color: '#D2DD29' }}>→</span></Link>
          </div>
          <div className="hero-stats">
            <div><div className="hero-stat-num">2010</div><div className="hero-stat-label">Established</div></div>
            <div><div className="hero-stat-num">10k+</div><div className="hero-stat-label">People moved</div></div>
            <div><div className="hero-stat-num">2500+</div><div className="hero-stat-label">Satisfied Clients</div></div>
            {/* <div><div className="hero-stat-num">8</div><div className="hero-stat-label">Divisions</div></div> */}
          </div>
        </div>
      </section>

      <DivisionRail />

      <section className="stats-section" ref={statsRef}>
        <p className="stats-eyebrow">By the numbers</p>
        <h2 className="stats-heading">Seventeen years of moving people forward.</h2>
        <div className="stats-grid">
          <div className="stat-tile"><div className="stat-num">{counts[0]}</div><div className="stat-label">Established</div></div>
          <div className="stat-tile"><div className="stat-num">{counts[1]}+</div><div className="stat-label">Years experience</div></div>
          <div className="stat-tile"><div className="stat-num">{counts[2].toLocaleString('en-US')}+</div><div className="stat-label">People moved</div></div>
          <div className="stat-tile"><div className="stat-num">{counts[3]}+</div><div className="stat-label">Satisfied clients</div></div>
        </div>
      </section>

      <section className="testimonial-section">
        <p className="t-label">What our clients say</p>
        <div className="t-track">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={'t-slide' + (tIdx === i ? ' active' : '')}>
              <span className="t-mark">&ldquo;</span>
              <blockquote className="t-quote">{t.quote}</blockquote>
              <div className="t-meta">
                <div className="t-div" />
                <div><div className="t-name">{t.name}</div><div className="t-co">{t.co}</div></div>
              </div>
            </div>
          ))}
        </div>
        <div className="t-nav">
          {TESTIMONIALS.map((t, i) => (
            <button key={t.name} className={'t-dot' + (tIdx === i ? ' active' : '')} onClick={() => setTIdx(i)} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </section>
    </main>
  );
}
