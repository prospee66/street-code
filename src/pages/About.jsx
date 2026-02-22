import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const values = [
  { icon: '🔥', title: 'Authenticity', description: 'Real style comes from being true to yourself and your vision. No imitation, only genuine expression.' },
  { icon: '⭐', title: 'Excellence', description: 'We maintain the highest standards in everything we do — from design to delivery.' },
  { icon: '🌍', title: 'Community', description: 'We build a community of like-minded individuals who inspire and uplift each other.' },
  { icon: '💡', title: 'Innovation', description: 'Constantly evolving to meet the needs of our modern, forward-thinking audience.' },
]

export default function About() {
  const section1Ref = useScrollReveal()
  const section2Ref = useScrollReveal()
  const section3Ref = useScrollReveal()
  const valuesRef = useScrollReveal()

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__content">
            <span className="section-label section-label--light">Our Story</span>
            <h1>About Street Code</h1>
            <p>Discover the movement behind the brand — the hustle, the vision, and the code.</p>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section" ref={section1Ref}>
        <div className="container">
          <div className="split">
            <div className="split__text reveal">
              <span className="section-label">Who We Are</span>
              <h2>Born From the Streets, Built for Leaders</h2>
              <p>
                Street Code isn't just a brand; it's a power move for the youth who lead.
                We bridge the gap between high-level official outlooks and raw urban vibes,
                ensuring that when you step out, you aren't chasing the street — the street
                is chasing you.
              </p>
              <p>
                From bold graphics to effortless everyday essentials, Street Code represents
                hustle, ambition, and authentic self-expression. It's not just what you wear
                — it's how you wear your story.
              </p>
            </div>
            <div className="split__image reveal reveal-delay-2">
              <div className="split__image-frame">
                <img src="/images/street-code.jpeg" alt="Street Code" className="split__img" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE BLUEPRINT ── */}
      <section className="section section--alt" ref={section2Ref}>
        <div className="container">
          <div className="split split--reverse">
            <div className="split__image reveal">
              <div className="split__image-frame">
                <img src="/images/light-up.jpeg" alt="Light Up The Street" className="split__img" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="split__text reveal reveal-delay-2">
              <span className="section-label">Our Blueprint</span>
              <h2>The Principles We Live By</h2>
              <p>Three truths that guide every decision, every design, every drop.</p>
              <ul className="blueprint-list">
                <li>
                  <strong>Know the Code:</strong> True confidence comes from mastery of your
                  environment and your style.
                </li>
                <li>
                  <strong>The Look:</strong> Sharp, blue-black tailoring designed for those who
                  command respect in any room.
                </li>
                <li>
                  <strong>The Vibe:</strong> An aesthetic that screams "authority" while keeping
                  the energy of the youth alive.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="section" ref={section3Ref}>
        <div className="container">
          <div className="brand-story reveal">
            <h2>The Street Code Brand Story</h2>
            <p>
              Street Code emerged from the streets with a vision — to create a movement that
              celebrates the youth who dare to be different. We understand the hustle, the
              grind, and the unwavering determination it takes to make it in this world. Our
              brand is more than clothing; it's a lifestyle, a mindset, and a community.
            </p>
            <p>
              Every piece in the Street Code collection tells a story of resilience, style,
              and authority. We believe that your appearance is a reflection of your confidence
              and your message to the world. Whether you're walking into a boardroom or the
              streets, Street Code ensures you do it with intention and impact.
            </p>
            <p>
              Our commitment is to provide the youth with premium quality, authentic style,
              and a sense of belonging. We merge high-fashion sensibilities with street
              credibility, creating a unique aesthetic that speaks to today's generation.
              Street Code is for the dreamers, the believers, and those ready to take control
              of their narrative.
            </p>
          </div>
        </div>
      </section>

      {/* ── MEET THE VISION ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Meet the Vision</span>
            <h2>The Face Behind the Code</h2>
            <p>Capturing the raw energy and authentic style that defines everything Street Code stands for.</p>
          </div>
          <div className="caleb-grid">
            <div className="caleb-card">
              <img src="/images/caleb-1.jpeg" alt="Street Code Vision 1" loading="lazy" decoding="async" />
              <div className="caleb-card__body">
                <h4>The Essence</h4>
                <p>Capturing the raw energy and authentic style that defines Street Code.</p>
              </div>
            </div>
            <div className="caleb-card">
              <img src="/images/caleb-2.jpeg" alt="Street Code Vision 2" loading="lazy" decoding="async" />
              <div className="caleb-card__body">
                <h4>The Authority</h4>
                <p>Embodying the confidence and power that comes with wearing the code.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="section" ref={valuesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Core Values</span>
            <h2>What We Stand For</h2>
            <p>The principles that drive every decision, every design, and every interaction.</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className={`value-card reveal reveal-delay-${i + 1}`}>
                <span className="value-card__icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Join the Movement?</h2>
          <p>Experience the Street Code lifestyle and become part of something bigger.</p>
          <div className="cta-banner__buttons">
            <Link to="/contact" className="btn btn--outline-white">
              Get In Touch
            </Link>
            <Link
              to="/features"
              className="btn"
              style={{ background: 'white', color: '#5b21b6', fontWeight: 700 }}
            >
              View Features →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
