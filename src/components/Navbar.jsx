import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/',         label: 'Home',     icon: '🏠', end: true },
  { to: '/features', label: 'Features', icon: '⚡' },
  { to: '/about',    label: 'About',    icon: '📖' },
  { to: '/contact',  label: 'Contact',  icon: '✉️' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* ── Top bar ─────────────────────────────────── */}
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={close}>
            Street <span>Code</span>
          </Link>

          <button
            className={`navbar__toggle${open ? ' is-active' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-label">MENU</span>
          </button>
        </div>
      </header>

      {/* ── Overlay ─────────────────────────────────── */}
      <div
        className={`sidebar-overlay${open ? ' sidebar-overlay--visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Sidebar drawer ──────────────────────────── */}
      <aside
        className={`sidebar${open ? ' sidebar--open' : ''}`}
        aria-label="Navigation menu"
        aria-hidden={!open}
      >
        {/* Sidebar header */}
        <div className="sidebar__header">
          <Link to="/" className="sidebar__logo" onClick={close}>
            Street <span>Code</span>
          </Link>
          <button
            className="sidebar__close"
            onClick={close}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <nav className="sidebar__nav">
          <p className="sidebar__nav-label">Navigation</p>
          <ul>
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
                  }
                >
                  <span className="sidebar__link-icon">{link.icon}</span>
                  <span className="sidebar__link-text">{link.label}</span>
                  <span className="sidebar__link-arrow">›</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar__divider" />

        {/* Social */}
        <div className="sidebar__social">
          <p className="sidebar__nav-label">Follow Us</p>
          <div className="sidebar__social-row">
            {['IG', 'TW', 'TK', 'YT', 'SC'].map(s => (
              <a key={s} href="#" className="sidebar__social-btn" aria-label={s}>
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="sidebar__divider" />

        {/* Contact snippet */}
        <div className="sidebar__contact">
          <a href="mailto:addaimichael3355@gmail.com" className="sidebar__contact-row">
            <span>📧</span>
            <span>addaimichael3355@gmail.com</span>
          </a>
          <a href="tel:+233536946759" className="sidebar__contact-row">
            <span>📞</span>
            <span>+233 536 946 759</span>
          </a>
        </div>

        {/* Footer brand */}
        <div className="sidebar__footer">
          <p>© 2026 Street Code</p>
          <p>Wear the Code. Lead the Way.</p>
        </div>
      </aside>
    </>
  )
}
