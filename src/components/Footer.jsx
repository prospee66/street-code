import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h2 className="footer__logo">Street Code</h2>
            <p>
              Wear the Code. Lead the Way. Built for those who move with confidence
              and live unapologetically. More than a brand — it's a mindset.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">IG</a>
              <a href="#" className="footer__social-link" aria-label="Twitter">TW</a>
              <a href="#" className="footer__social-link" aria-label="Facebook">FB</a>
              <a href="#" className="footer__social-link" aria-label="TikTok">TK</a>
              <a href="#" className="footer__social-link" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className="footer__links">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter / X</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Snapchat</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Street Code. All rights reserved.</p>
          <p>
            Takoradi, Ghana &nbsp;·&nbsp;{' '}
            <a href="mailto:addaimichael3355@gmail.com">addaimichael3355@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
