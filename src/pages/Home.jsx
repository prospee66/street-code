import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast Delivery',
    description:
      'Your Street Code gear reaches you quickly without compromising quality. Fast shipping so you can start making your statement today.',
  },
  {
    icon: '🎨',
    title: 'Premium Craftsmanship',
    description:
      'Every piece meticulously crafted with attention to detail. Blue-black tailoring designed for those who command respect in any room.',
  },
  {
    icon: '🛡️',
    title: 'Authenticity Guaranteed',
    description:
      'Real recognizes real. Street Code products are 100% authentic — we stand behind every piece with full transparency.',
  },
]

const blueprintItems = [
  {
    num: '01',
    title: 'Know the Code',
    description: 'True confidence comes from mastery of your environment and your style.',
  },
  {
    num: '02',
    title: 'The Look',
    description: 'Sharp, blue-black tailoring designed for those who command respect in any room.',
  },
  {
    num: '03',
    title: 'The Vibe',
    description: 'An aesthetic that screams authority while keeping the energy of the youth alive.',
  },
]

export default function Home() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const featuresRef = useScrollReveal()
  const splitRef = useScrollReveal()
  const maskRef = useScrollReveal()
  const blueprintRef = useScrollReveal()
  const contactRef = useScrollReveal()

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject:    `Street Code – New message from ${form.name}`,
          name:       form.name,
          email:      form.email,
          message:    form.message,
          from_name:  'Street Code Website',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__glow-1" />
        <div className="hero__glow-2" />
        <div className="container">
          <div className="hero__inner">
            <div className="hero__text">
              <div className="hero__badge">
                <span className="hero__badge-dot" />
                New Collection Available
              </div>
              <h1 className="hero__title">
                Wear the
                <span className="line-accent">Code.</span>
                Lead the Way.
              </h1>
              <p className="hero__subtitle">
                Street Code is more than a brand — it's a mindset. Built for those who move
                with confidence, hustle with purpose, and live unapologetically.
              </p>
              <div className="hero__buttons">
                <Link to="/features" className="btn btn--primary">
                  Explore Collection →
                </Link>
                <Link to="/about" className="btn btn--outline-white">
                  Our Story
                </Link>
              </div>
            </div>

            <div className="hero__image-wrapper">
              <div className="hero__image-frame">
                <img src="/images/street.jpeg" alt="Street Code" className="hero__img" />
              </div>
              <div className="hero__stats">
                <div className="hero__stat">
                  <span className="hero__stat-number">2K+</span>
                  <span className="hero__stat-label">Members</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-number">50+</span>
                  <span className="hero__stat-label">Designs</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-number">10+</span>
                  <span className="hero__stat-label">Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES PREVIEW ── */}
      <section className="section" ref={featuresRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Street Code</span>
            <h2>Light up the Street</h2>
            <p>
              Street Code blends raw street energy with clean, modern design. Every piece
              reflects individuality, resilience, and the unspoken rules of the streets.
            </p>
          </div>

          <div className="feature-cards">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`feature-card reveal reveal-delay-${i + 1}`}
              >
                <span className="feature-card__icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STREET CODE EXPERIENCE ── */}
      <section className="section section--alt" ref={splitRef}>
        <div className="container">
          <div className="split">
            <div className="split__image reveal">
              <div className="split__image-frame">
                <img src="/images/street-code.jpeg" alt="Street Code Experience" className="split__img" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="split__text reveal reveal-delay-2">
              <span className="section-label">The Experience</span>
              <h2>Street Code Experience</h2>
              <p>
                Street Code isn't just a brand; it's a power move for the youth who lead. We
                bridge the gap between high-level official outlooks and raw urban vibes.
              </p>
              <p>
                When you step out in Street Code, you aren't chasing the street — the street
                is chasing you. That's the energy we bring to every single piece.
              </p>
              <Link to="/about" className="btn btn--primary">
                Learn Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE IDENTITY / MASK ── */}
      <section className="section" ref={maskRef}>
        <div className="container">
          <div className="split split--reverse">
            <div className="split__image reveal">
              <div className="split__image-frame">
                <img src="/images/mask.jpeg" alt="Street Code Identity" className="split__img" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="split__text reveal reveal-delay-2">
              <span className="section-label">The Identity</span>
              <h3>MASK</h3>
              <h2>Confidence is Your Identity</h2>
              <p>
                More than just a symbol. The mask represents the authority, confidence, and power
                of Street Code. It's about commanding respect in any room while keeping the
                authentic energy of the youth alive.
              </p>
              <Link to="/features" className="btn btn--outline-purple">
                See All Features →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE BLUEPRINT ── */}
      <section className="section section--alt" ref={blueprintRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Blueprint</span>
            <h2>The Code That Sets You Apart</h2>
            <p>Three principles that define what it means to truly wear the code.</p>
          </div>

          <div className="blueprint-grid">
            {blueprintItems.map((item, i) => (
              <div key={item.title} className={`blueprint-card reveal reveal-delay-${i + 1}`}>
                <div className="blueprint-card__num">{item.num}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STILL ALIVE BANNER ── */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__image">
              <div className="split__image-frame">
                <img src="/images/still-alive.jpeg" alt="Still Alive" className="split__img" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="split__text">
              <span className="section-label">Still Alive</span>
              <h2>The Energy Never Dies</h2>
              <p>
                No matter the obstacles, Street Code keeps moving. STILL ALIVE is more than
                a collection — it's a declaration that your hustle never stops, your energy
                never fades, and your story is still being written.
              </p>
              <Link to="/features" className="btn btn--primary">
                View Features →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="quote-section">
        <div className="quote-section__glow" />
        <blockquote>
          <span className="quote-section__mark">&ldquo;</span>
          <p>
            Stop chasing the pavement. Wear the Code and let the world follow your lead.
          </p>
          <cite>— Street Code</cite>
        </blockquote>
      </section>

      {/* ── QUICK CONTACT ── */}
      <section className="section home-contact" ref={contactRef}>
        <div className="container">
          <div className="home-contact__grid">
            <div className="home-contact__info reveal">
              <span className="section-label">Get In Touch</span>
              <h2>Ready to Join the Movement?</h2>
              <p>
                Have questions, want to collaborate, or just want to say something? We're
                here and we'd love to hear from you.
              </p>
              <ul className="home-contact__bullets">
                <li>Response within 24–48 hours</li>
                <li>Based in Takoradi, Ghana</li>
                <li>Global community, local heart</li>
                <li>Partnership & collaboration welcome</li>
              </ul>
            </div>

            <div className="reveal reveal-delay-2">
              {status === 'success' ? (
                <div className="quick-form">
                  <div className="form-success">
                    <span className="form-success__icon">✅</span>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. We'll get back to you within 24–48 hours.</p>
                    <button
                      className="btn btn--outline-purple"
                      style={{ marginTop: 20 }}
                      onClick={() => setStatus('idle')}
                    >
                      Send another
                    </button>
                  </div>
                </div>
              ) : (
                <form className="quick-form" onSubmit={handleSubmit} noValidate>
                  <h3>Send a Message</h3>

                  {status === 'error' && (
                    <div className="form-error" style={{ marginBottom: 16 }}>
                      ⚠️ Failed to send. Please email us at{' '}
                      <a href="mailto:addaimichael3355@gmail.com">addaimichael3355@gmail.com</a>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="home-name">Your Name</label>
                    <input
                      id="home-name" name="name" type="text"
                      className="form-input"
                      placeholder="e.g. Marcus Johnson"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="home-email">Email Address</label>
                    <input
                      id="home-email" name="email" type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="home-message">Message</label>
                    <textarea
                      id="home-message" name="message"
                      className="form-input"
                      placeholder="Tell us what's on your mind..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn--primary"
                    disabled={status === 'sending'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {status === 'sending' ? (
                      <><span className="spinner" /> Sending…</>
                    ) : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Wear the Code?</h2>
          <p>Join thousands of youth leaders worldwide who live the Street Code lifestyle.</p>
          <div className="cta-banner__buttons">
            <Link to="/features" className="btn btn--outline-white">
              Explore Features
            </Link>
            <Link to="/contact" className="btn" style={{ background: 'white', color: '#5b21b6', fontWeight: 700 }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
