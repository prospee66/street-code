import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ── Web3Forms ───────────────────────────────────────────
   1. Go to https://web3forms.com
   2. Enter streetcode139@gmail.com → click "Create Access Key"
   3. Copy the key into your .env file as:
      VITE_WEB3FORMS_KEY=your_key_here                    */
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''

const faqs = [
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping takes 5–7 business days, while expedited shipping delivers within 2–3 business days to most locations.',
  },
  {
    q: "What's your return policy?",
    a: 'All items can be returned within 30 days of purchase in original condition for a full refund or exchange. No questions asked.',
  },
  {
    q: 'Do you offer customization?',
    a: 'Yes! Many pieces can be customized with initials or specific requests. Contact us for details and pricing on custom orders.',
  },
  {
    q: 'Is Street Code sizing true to fit?',
    a: 'Our sizing is accurate to standard measurements. We provide a detailed size guide with every product. Contact support when in doubt.',
  },
  {
    q: 'How do I join the community?',
    a: 'Simply make a purchase or sign up for our newsletter. All members get exclusive access to events, drops, and community forums.',
  },
  {
    q: 'Can I collaborate with Street Code?',
    a: 'We love collaborations! If you\'re an artist, influencer, or creator, email us at streetcode139@gmail.com with your proposal.',
  },
]

const testimonials = [
  {
    text: '"The customer service team went above and beyond to help me find the perfect size. Real people who care about their customers."',
    author: 'Alex P.',
  },
  {
    text: '"My order arrived faster than expected with beautiful packaging. Street Code understands the details that matter."',
    author: 'Jordan L.',
  },
  {
    text: '"Had a question about customization and got a response within 2 hours. This level of service is rare. Highly impressed."',
    author: 'Casey M.',
  },
  {
    text: '"Street Code\'s team is passionate about what they do. You can feel it in every interaction. Can\'t wait to order again."',
    author: 'Taylor S.',
  },
]

const subjects = [
  { value: '',            label: 'Select a subject',  disabled: true },
  { value: 'general',    label: 'General Inquiry' },
  { value: 'support',    label: 'Customer Support' },
  { value: 'partnership',label: 'Partnership' },
  { value: 'feedback',   label: 'Feedback' },
  { value: 'order',      label: 'Order Related' },
  { value: 'other',      label: 'Other' },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const [newsEmail, setNewsEmail] = useState('')
  const [newsSent, setNewsSent]   = useState(false)

  const faqRef          = useScrollReveal()
  const testimonialsRef = useScrollReveal()

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
          subject:    `Street Code – ${form.subject || 'New Message'} from ${form.name}`,
          name:       form.name,
          email:      form.email,
          phone:      form.phone || 'Not provided',
          topic:      form.subject,
          message:    form.message,
          from_name:  'Street Code Website',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  async function handleNewsletter(e) {
    e.preventDefault()
    if (!newsEmail) return
    setNewsSent(true)
  }

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__content">
            <span className="section-label section-label--light">Reach Out</span>
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you — questions, collabs, or just saying hi.</p>
          </div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* ── Form card ── */}
            <div className="contact-form-card">
              {status === 'success' ? (
                <div className="form-success">
                  <span className="form-success__icon">✅</span>
                  <h3>Message Received!</h3>
                  <p>
                    Thanks for reaching out. We'll get back to you at{' '}
                    <strong>{form.email || 'your email'}</strong> within 24–48 hours.
                  </p>
                  <button
                    className="btn btn--outline-purple"
                    style={{ marginTop: 24 }}
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form and we'll get back to you as soon as possible.</p>

                  {status === 'error' && (
                    <div className="form-error">
                      ⚠️ Something went wrong. Please try again or email us directly at{' '}
                      <a href="mailto:streetcode139@gmail.com">streetcode139@gmail.com</a>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          id="name" name="name" type="text"
                          className="form-input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          disabled={status === 'sending'}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          id="email" name="email" type="email"
                          className="form-input"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          disabled={status === 'sending'}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          id="phone" name="phone" type="tel"
                          className="form-input"
                          placeholder="(optional)"
                          value={form.phone}
                          onChange={handleChange}
                          disabled={status === 'sending'}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <select
                          id="subject" name="subject"
                          className="form-input"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          disabled={status === 'sending'}
                        >
                          {subjects.map(s => (
                            <option key={s.value} value={s.value} disabled={s.disabled}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message" name="message"
                        className="form-input"
                        placeholder="Tell us what's on your mind..."
                        rows={6}
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
                      style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="spinner" /> Sending…
                        </>
                      ) : (
                        'Send Message →'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* ── Contact info ── */}
            <div className="contact-info-stack">
              <div className="contact-info-item">
                <h4>📍 Address</h4>
                <p>Street Code HQ</p>
                <p>Western Region, City Center</p>
                <p>Takoradi, Ghana</p>
              </div>

              <div className="contact-info-item">
                <h4>📞 Phone</h4>
                <a href="tel:+233536946759">+233 536 946 759</a>
              </div>

              <div className="contact-info-item">
                <h4>📧 Email</h4>
                <a href="mailto:streetcode139@gmail.com">streetcode139@gmail.com</a>
              </div>

              <div className="contact-info-item">
                <h4>⏰ Response Time</h4>
                <p>We typically respond within 24–48 hours. For urgent matters, please call us directly.</p>
              </div>

              <div className="contact-info-item">
                <h4>🌐 Follow Us</h4>
                <div className="contact-social">
                  <a href="#">Instagram</a>
                  <a href="#">Twitter</a>
                  <a href="#">TikTok</a>
                  <a href="#">YouTube</a>
                  <a href="#">Snapchat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--alt" ref={faqRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to the questions we hear most often.</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`faq-card reveal reveal-delay-${(i % 2) + 1}`}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" ref={testimonialsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Customer Impressions</span>
            <h2>What They're Saying</h2>
            <p>Hear from people who've experienced the Street Code difference.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t.author} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                <p>{t.text}</p>
                <h4>— {t.author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="newsletter">
        <div className="newsletter__glow" />
        <div className="newsletter__content">
          <span className="section-label section-label--light">Stay Connected</span>
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get exclusive drops, style tips, and community updates delivered to your inbox.</p>
          {newsSent ? (
            <p style={{ color: '#a78bfa', fontWeight: 600, fontSize: '1rem' }}>
              ✅ You're subscribed! Check your inbox.
            </p>
          ) : (
            <form className="newsletter__form" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter__input"
                value={newsEmail}
                onChange={e => setNewsEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn--primary">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
