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

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  const statsRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState([2010, 0, 0, 0]);

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
    </main>
  );
}
