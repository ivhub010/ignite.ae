import Link from 'next/link';
import { DIVISIONS } from '@/lib/divisions';
import DivisionLink from './DivisionLink';

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-wordmark">IGNITE</div>
        <div className="footer-grid">
          <div>
            <p className="footer-about">Dubai's leading active lifestyle brand. Since 2010.</p>
          </div>
          <div>
            <p className="footer-heading">Associate Links</p>
            <ul className="footer-links">
              {DIVISIONS.map(d => (
                <li key={d.label}>
                  <DivisionLink href={d.href} external={d.external} style={{ color: d.color }}>{d.label}</DivisionLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-heading">Company</p>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/pink-is-punk">Pink is Punk</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <a href="tel:+971800446483" className="footer-contact-link">800 IGNITE (446483)</a>
            <a href="mailto:info@ignite.ae" style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, display: 'block', marginTop: 8 }}>info@ignite.ae</a>
            {/* <a href="https://wa.me/971800446483" style={{ color: '#25D366', fontSize: 13, fontWeight: 600, display: 'block', marginTop: 10 }}>WhatsApp →</a> */}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} IGNITE. All rights reserved.</span>
          <span className="footer-copy">Dubai, UAE</span>
        </div>
      </footer>

      <a href="https://wa.me/971800446483" className="whatsapp-fab" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.523 5.843L.057 23.882l6.19-1.622A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.007-1.37l-.358-.213-3.72.975.994-3.63-.233-.374A9.795 9.795 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        </svg>
      </a>
    </>
  );
}
