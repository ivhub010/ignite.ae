'use client';
import { useState, useEffect } from 'react';
import { DIVISIONS } from '@/lib/divisions';
import DivisionLink from './DivisionLink';

export default function DivisionRail() {
  const [active, setActive] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const sync = () => setIsTouch(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const current = DIVISIONS[active];

  return (
    <section className="rail" id="divisions">
      <div className="rail-list">
        {DIVISIONS.map((d, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={d.label} className="rail-row">
              <div
                className={'rail-item' + ((isTouch ? isOpen : active === i) ? ' active' : '')}
                style={{ ['--ic' as string]: d.color }}
                onMouseEnter={() => { if (!isTouch) setActive(i); }}
                onClick={() => { if (isTouch) setOpenIdx(isOpen ? null : i); }}
                role={isTouch ? 'button' : undefined}
                aria-expanded={isTouch ? isOpen : undefined}
              >
                <span className="rail-accent-ln" style={{ background: d.color }} />
                <span className="rail-num">{d.num}</span>
                <span className="rail-name">{d.label}</span>
                <span className="rail-chevron" style={{ color: d.color, transform: isOpen ? 'rotate(180deg)' : 'none' }}>⌄</span>
                <DivisionLink href={d.href} external={d.external} className="rail-arrow" style={{ color: d.color }}>→</DivisionLink>
              </div>

              {/* Mobile-only expanding panel */}
              <div className={'rail-panel' + (isOpen ? ' open' : '')}>
                <div className="rail-panel-inner">
                  <img src={d.image} alt={d.label} className="rail-panel-img" />
                  <div className="rail-panel-body">
                    <p className="rail-image-eyebrow" style={{ color: d.color }}>IGNITE</p>
                    <p className="rail-panel-title">{d.label}</p>
                    <div className="rail-chips">
                      {d.chips?.map(c => (
                        <span key={c} className="rail-chip" style={{ color: d.color }}>{c}</span>
                      ))}
                    </div>
                    <DivisionLink href={d.href} external={d.external} className="rail-panel-cta" style={{ color: d.color, borderColor: d.color }}>
                      {d.external ? 'Visit site →' : 'Explore →'}
                    </DivisionLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop image pane */}
      <div className="rail-image">
        {DIVISIONS.map((d, i) => (
          <img key={d.label} src={d.image} alt="" className={active === i ? 'visible' : ''} />
        ))}
        <div className="rail-image-overlay" />
        <div className="rail-image-label">
          <p className="rail-image-eyebrow" style={{ color: current.color }}>IGNITE</p>
          <p className="rail-image-title">{current.label}</p>
          <div className="rail-chips">
            {current.chips?.map(c => (
              <span key={c} className="rail-chip" style={{ color: current.color }}>{c}</span>
            ))}
          </div>
          <DivisionLink href={current.href} external={current.external} className="rail-panel-cta" style={{ color: current.color, borderColor: current.color, backgroundColor: "rgba(0, 0, 0,0.7)" }}>
                      {current.external ? 'Visit site →' : 'Explore →'}
                    </DivisionLink>
        </div>
      </div>
    </section>
  );
}
