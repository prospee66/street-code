import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const featureCards = [
  {
    icon: '⚡',
    title: 'Lightning Fast Delivery',
    description:
      'Our streamlined process ensures your Street Code gear reaches you quickly without compromising quality. Fast shipping means your statement starts today.',
  },
  {
    icon: '🎨',
    title: 'Premium Design & Craftsmanship',
    description:
      'Every piece meticulously crafted with attention to detail. Blue-black tailoring and cutting-edge designs reflect the authority you embody.',
  },
  {
    icon: '🛡️',
    title: 'Authenticity Guaranteed',
    description:
      'Real recognizes real. Street Code products are 100% authentic — we stand behind every piece with full transparency and satisfaction guarantee.',
  },
  {
    icon: '🌍',
    title: 'Global Community',
    description:
      'Join thousands of youth leaders worldwide who wear the Code. Our community transcends borders, connecting like-minded individuals everywhere.',
  },
  {
    icon: '💪',
    title: 'Confidence Booster',
    description:
      'Wear the Code and feel the difference. Street Code gear boosts your presence in any room while maintaining that authentic youth energy.',
  },
  {
    icon: '🔥',
    title: 'Stay Ahead of Trends',
    description:
      'Constantly innovating and evolving. Street Code stays on the cutting edge of street fashion, ensuring you always wear what\'s next.',
  },
]

const highlights = [
  {
    image: '/images/street-code.jpeg',
    alt: 'Premium Quality',
    title: 'Unmatched Quality',
    description:
      'Street Code doesn\'t cut corners. We source the finest materials and employ master craftsmen who understand that real style demands real quality. Every stitch, every thread, every seam is a statement of excellence.',
    list: ['Premium fabric selection', 'Hand-finished details', 'Durability tested', 'Eco-conscious production'],
    reverse: false,
  },
  {
    image: '/images/light-up.jpeg',
    alt: 'Style & Innovation',
    title: 'Style That Speaks',
    description:
      'Your appearance is your voice. Street Code creates designs that command attention and respect. From the streets to the boardroom, our collections are versatile, bold, and unapologetically authentic.',
    list: ['Signature blue-black aesthetic', 'Modern & timeless designs', 'Customization options', 'Limited edition drops'],
    reverse: true,
  },
  {
    image: '/images/still-alive.jpeg',
    alt: 'Community Movement',
    title: 'The Community Movement',
    description:
      'Street Code is about belonging to something bigger than yourself. Our community of leaders, dreamers, and achievers supports each other, inspires one another, and collectively makes waves.',
    list: ['Exclusive member events', 'Community forums', 'Collaborations with artists', 'Social impact initiatives'],
    reverse: false,
  },
]

const reviews = [
  {
    stars: '★★★★★',
    text: '"Street Code changed how I see myself. The quality is insane and the confidence boost is real. I feel like I\'m walking into every room with authority."',
    author: 'Marcus J.',
    location: 'New York, USA',
  },
  {
    stars: '★★★★★',
    text: '"Finally found a brand that gets it. The blue-black tailoring is fire, and knowing I\'m part of a real community makes it even better. Worth every penny."',
    author: 'Sarah T.',
    location: 'London, UK',
  },
  {
    stars: '★★★★★',
    text: '"The energy is unmatched. Street Code isn\'t just clothing — it\'s a movement. I wear it to business meetings and to the streets, and it works everywhere."',
    author: 'David K.',
    location: 'Toronto, Canada',
  },
  {
    stars: '★★★★★',
    text: '"Respect to the whole team. The craftsmanship is top tier, and the customer service made my experience smooth. This is what authentic brand connection looks like."',
    author: 'Aisha M.',
    location: 'Lagos, Nigeria',
  },
  {
    stars: '★★★★★',
    text: '"Street Code gets me. Every piece fits perfectly, the quality speaks for itself, and I love supporting a brand that actually understands youth culture."',
    author: 'James R.',
    location: 'Los Angeles, USA',
  },
  {
    stars: '★★★★★',
    text: '"Wearing Street Code means something. It says I have standards, I have taste, I have authority. The community aspect is my favourite part."',
    author: 'Elena P.',
    location: 'Madrid, Spain',
  },
]

export default function Features() {
  const cardsRef = useScrollReveal()
  const reviewsRef = useScrollReveal()

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__content">
            <span className="section-label section-label--light">What We Offer</span>
            <h1>Our Features</h1>
            <p>Discover what makes Street Code the ultimate choice for youth leaders worldwide.</p>
          </div>
        </div>
      </section>

      {/* ── WHY STREET CODE ── */}
      <section className="section" ref={cardsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Street Code</span>
            <h2>Everything You Need to Lead</h2>
            <p>
              Street Code is more than just fashion — it's a complete lifestyle experience
              designed for those who dare to stand out.
            </p>
          </div>

          <div className="features-full-grid">
            {featureCards.map((card, i) => (
              <div
                key={card.title}
                className={`feature-full-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <span className="feature-full-card__icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE HIGHLIGHTS ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Feature Highlights</span>
            <h2>Going Deeper</h2>
            <p>Every aspect of Street Code is intentional, crafted with purpose and precision.</p>
          </div>

          {highlights.map((item) => (
            <div
              key={item.title}
              className={`feature-detail${item.reverse ? ' feature-detail--reverse' : ''}`}
            >
              <div className="feature-detail__image">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="feature-detail__text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="feature-list">
                  {item.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMMUNITY REVIEWS ── */}
      <section className="section" ref={reviewsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Community Reviews</span>
            <h2>What Our People Say</h2>
            <p>Real stories from the Street Code community around the world.</p>
          </div>

          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div
                key={r.author}
                className={`review-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <span className="review-card__stars">{r.stars}</span>
                <p>{r.text}</p>
                <div className="review-card__author">
                  <h4>{r.author}</h4>
                  <span>{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Experience Street Code?</h2>
          <p>Join the movement and start commanding respect everywhere you go.</p>
          <div className="cta-banner__buttons">
            <Link to="/contact" className="btn btn--outline-white">
              Get In Touch
            </Link>
            <Link
              to="/about"
              className="btn"
              style={{ background: 'white', color: '#5b21b6', fontWeight: 700 }}
            >
              Our Story →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
