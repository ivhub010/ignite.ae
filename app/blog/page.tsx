import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'News & insights' };

const POSTS = [
  { tag:'Wellness',     title:'Five habits that separate high-performing teams from the rest', excerpt:'The organisations we work with that see the most sustained improvement share a handful of practices. None of them are complicated.', date:'12 Feb 2025', img:'/assets/images/IGNITE-Corporate-Wellness.png' },
  { tag:'Fitness',      title:'Why outdoor training outperforms the gym for most people',      excerpt:'The research on outdoor exercise is consistent and compelling. Here is what we have seen over fifteen years of delivering it.', date:'28 Jan 2025', img:'/assets/images/IGNITE-Fitness-Wellness.png' },
  { tag:'Community',    title:'Pink is Punk 2024 — the numbers behind the movement',           excerpt:'Last year&rsquo;s campaign was our biggest yet. A look at what we raised, who showed up, and what comes next in 2025.', date:'14 Jan 2025', img:'/assets/images/pip-1743.jpg' },
  { tag:'Water Sports', title:'A beginner&rsquo;s guide to stand-up paddleboarding in Dubai',  excerpt:'Dubai&rsquo;s coastline is one of the world&rsquo;s best backdrops for SUP. Everything you need to know before your first session.', date:'2 Jan 2025', img:'/assets/images/IGNITE-Water-Sports.png' },
  { tag:'Kids',         title:'Structured play: why it matters more than you think',           excerpt:'Unstructured playtime is essential — but structured, coached movement builds confidence and discipline that lasts a lifetime.', date:'18 Dec 2024', img:'/assets/images/IGNITE-Kids.png' },
  { tag:'Consultancy',  title:'Building a wellness strategy that actually gets used',          excerpt:'Most corporate wellness programmes fail within 18 months. The reason is almost always the same — and it is not budget.', date:'5 Dec 2024', img:'/assets/images/IGNITE-Consultancy.png' },
];

export default function Blog() {
  return (
    <main>
      <section className="sec-hero">
        <div className="sec-hero-bg">
          <img src="/assets/images/lifestyle-458A4715.jpg" alt="" />
          <div className="sec-hero-bg-ov" />
        </div>
        <div className="sec-hero-content">
          <p className="sec-eyebrow" style={{ color: '#D2DD29' }}>News &amp; insights</p>
          <h1 className="sec-title">Stories from<br />the community.</h1>
          <p className="sec-sub">Wellness research, event recaps, team stories, and practical guides from seventeen years in the field.</p>
        </div>
      </section>

      <section className="content-block">
        <div className="blog-grid">
          {POSTS.map(p => (
            <article key={p.title} className="blog-card">
              <img src={p.img} alt="" className="blog-card-img" />
              <div className="blog-card-body">
                <span className="blog-tag">{p.tag}</span>
                <h3 className="blog-title" dangerouslySetInnerHTML={{ __html: p.title }} />
                <p className="blog-excerpt" dangerouslySetInnerHTML={{ __html: p.excerpt }} />
                <time className="blog-date">{p.date}</time>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
