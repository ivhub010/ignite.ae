'use client';
import { useState } from 'react';
import { DIVISIONS } from '@/lib/divisions';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <main>
      <div className="contact-layout">
        <div className="contact-form-side">
          <p className="contact-eyebrow">Get in touch</p>
          <h1 className="contact-heading">Let&rsquo;s move together.</h1>
          <p className="contact-sub">Whether you're booking a water sports session, planning a team building day, enquiring about corporate wellness or have a general question, we'd love to hear from you.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="first">First name</label>
                <input id="first" name="first" className="form-input" type="text" placeholder="Sarah" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="last">Last name</label>
                <input id="last" name="last" className="form-input" type="text" placeholder="Al Mansoori" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" name="email" className="form-input" type="email" placeholder="sarah@company.ae" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input id="phone" name="phone" className="form-input" type="tel" placeholder="+971 50 000 0000" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="interest">I&rsquo;m interested in</label>
              <select id="interest" name="interest" className="form-select" defaultValue="">
                <option value="" disabled>Select Service</option>
                {DIVISIONS.map(d => <option key={d.label}>{d.label}</option>)}
                <option>General enquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your team, goals, or what you're looking for…" />
            </div>
            <button type="submit" className="btn-submit" style={sent ? { background: '#00AE97', color: '#fff' } : undefined}>
              {sent ? 'Sent ✓' : 'Send message →'}
            </button>
          </form>
        </div>

        <div className="contact-info-side">
          <div className="info-block">
            <p className="info-label">Call us</p>
            <a href="tel:800446483" className="phone-big">800 IGNITE (446 483)</a>
            <p className="info-sub">Monday–Friday, 9am–6pm GST</p>
            <a href="https://wa.me/971800446483" className="whatsapp-btn">WhatsApp us</a>
          </div>
          <div className="info-block">
            <p className="info-label">Email</p>
            <p className="info-value"><a href="mailto:info@ignite.ae" style={{ color: '#D2DD29' }}>info@ignite.ae</a></p>
            <p className="info-sub">We reply within one business day</p>
          </div>
          <div className="info-block">
            <p className="info-label">Location</p>
            <p className="info-value">Water Sports RIVA Beach</p>
            <p className="info-sub">Palm Jumeirah, Dubai<br/>Open 6am–7pm daily</p>
            <br/>
            <p className="info-sub">Hours vary by season</p>
            <a href="https://book.ignitewatersports.com/?type=rentals" className="booknow-btn">Book Now</a>
            <p className="info-sub"><i>Season changes apply - check site for current hours</i></p>
          </div>
          <div className="info-block">
            <p className="info-label">Our Services</p>
            <div className="division-pills">
              {DIVISIONS.map(d => (
                <span key={d.label} className="division-pill" style={{ color: d.color }}>{d.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
