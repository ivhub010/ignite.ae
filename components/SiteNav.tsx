'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DIVISIONS } from '@/lib/divisions';
import DivisionLink from './DivisionLink';

const PAGES: [string, string, string?][] = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Services', '#'],
  ['Events', '#'],
  // ['Pink is Punk', '/pink-is-punk', '#CE00A0'],
  // ['News', '/blog'],
  ['Contact Us', '/contact'],
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;
      setScrolled(y > 40);
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="progress-bar" style={{ width: progress + '%' }} />

      <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
        <Link href="/" className="nav-logo"><img src="/assets/logos/Ignite brandmark_RGB_Green_FA.png" alt="" /></Link>
        <div className="nav-right">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <div className="nav-dropdown">
            <Link href="#" className="nav-link nav-dropdown-trigger">
              Services
              <span className="nav-dropdown-arrow">⌄</span>
            </Link>

            <div className="nav-dropdown-menu">
              {DIVISIONS.map(d => (
                <Link href={d.href} className="nav-dropdown-link">
                  {d.label}
                </Link>
              ))}
              
            </div>
          </div>
          <div className="nav-dropdown">
            <Link href="/events" className="nav-link nav-dropdown-trigger">
              Events
              <span className="nav-dropdown-arrow">⌄</span>
            </Link>

            <div className="nav-dropdown-menu">
              <Link href="/pink-is-punk" className="nav-dropdown-link pink">
                Pink is Punk
              </Link>
            </div>
          </div>

          <Link href="/contact" className="nav-link">contact</Link>

          <button
            className={'nav-menu-btn' + (open ? ' open' : '')}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="hb-bar" />
            <span className="hb-bar" />
            <span className="hb-bar" />
          </button>
        </div>
      </nav>

      <div className={'overlay-menu' + (open ? ' open' : '')} aria-hidden={!open}>
        <button className="ov-close" onClick={close}>✕ Close</button>

        <div className="ov-left">
          <div className="ov-scroll">
          
            {/* Mobile-only: pages + contact live here since the right pane is hidden */}
            <div className="ov-mobile-extra">
              <p className="ov-eyebrow ov-item" style={{ marginTop: 36, transitionDelay: '.44s' }}>Navigate</p>
              <div className="ov-nav-links">
                {PAGES.map(([label, href, color], i) => (
                  <div key={href}>
                    <Link
                      href={href}
                      className="ov-nav-link ov-item"
                      style={{
                        color,
                        transitionDelay: `${0.48 + i * 0.03}s`
                      }}
                      onClick={close}
                    >
                      {label}
                    </Link>

                    {label === 'Events' && (
                      <Link
                        href="/pink-is-punk"
                        className="ov-nav-link ov-nav-sublink ov-item"
                        style={{
                          color: '#CE00A0',
                          transitionDelay: `${0.50 + i * 0.03}s`
                        }}
                        onClick={close}
                      >
                        Pink is Punk
                      </Link>
                    )}

                  </div>
                ))}
              </div>
            </div>
            <br/>
            <br/>
            <p className="ov-eyebrow ov-item" style={{ transitionDelay: '.1s' }}>Services</p>
            {DIVISIONS.map((d, i) => (
              <DivisionLink
                key={d.label}
                href={d.href}
                external={d.external}
                className="ov-div-link ov-item"
                style={{ transitionDelay: `${0.12 + i * 0.04}s` }}
                onClick={close}
              >
                <span className="ov-div-dot" style={{ background: d.color }} />
                <span className="ov-div-name">{d.label}</span>
              </DivisionLink>
            ))}

            <div className="ov-mobile-extra">
              <div className="ov-item" style={{ marginTop: 32, transitionDelay: '.7s' }}>
                <p className="ov-eyebrow">Get in touch</p>
                <a href="tel:800446483" className="ov-contact-tel">800 IGNITE (446 483)</a>
                <a href="mailto:info@ignite.ae" className="ov-contact-email">info@ignite.ae</a>
                <br/>
                <a href="https://api.whatsapp.com/message/E6P4PRFFLS7OB1?autoload=1&app_absent=0" className="whatsapp-btn">WhatsApp us</a>
              </div>
            </div>
          </div>
        </div>

        <div className="ov-right">
          <div />
          <div className="ov-nav-links ov-item" style={{ transitionDelay: '.2s' }}>
            <p className="ov-eyebrow" style={{ marginBottom: 16 }}>Navigate</p>
            {PAGES.map(([label, href, color]) => (
              <div key={href}>
                <Link
                  href={href}
                  className="ov-nav-link"
                  style={{ color }}
                  onClick={close}
                >
                  {label}
                </Link>

                {label === 'Events' && (
                  <Link
                    href="/pink-is-punk"
                    className="ov-nav-link ov-nav-sublink"
                    style={{ color: '#CE00A0' }}
                    onClick={close}
                  >
                    Pink is Punk
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="ov-item" style={{ transitionDelay: '.28s' }}>
            <p className="ov-eyebrow" style={{ marginBottom: 12 }}>Get in touch</p>
            <a href="tel:800446483" className="ov-contact-tel">800 IGNITE</a>
            <a href="mailto:info@ignite.ae" className="ov-contact-email">info@ignite.ae</a>
            <br/>
            <a href="https://api.whatsapp.com/message/E6P4PRFFLS7OB1?autoload=1&app_absent=0" className="whatsapp-btn">WhatsApp us</a>
          </div>
        </div>
      </div>
    </>
  );
}
