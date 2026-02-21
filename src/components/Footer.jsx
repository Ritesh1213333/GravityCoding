import './Footer.css'
import footerLogo from '../assests/Group 2 1.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-watermark">GRAVITY CODING</div>

      <div className="footer-inner">
        <div className="footer-grid">
          {/* Column 1 - Brand & Social */}
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <img src={footerLogo} alt="Gravity Coding" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Let's connect with our socials</p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58 0 4.85.07 1.17.05 1.97.22 2.43.37.57.16 1.05.37 1.51.82.46.46.66.94.82 1.51.15.46.32 1.26.37 2.43.07 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.22 1.97-.37 2.43-.16.57-.37 1.05-.82 1.51-.46.46-.94.66-1.51.82-.46.15-1.26.32-2.43.37-1.27.07-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.97-.22-2.43-.37-.57-.16-1.05-.37-1.51-.82-.46-.46-.66-.94-.82-1.51-.15-.46-.32-1.26-.37-2.43-.07-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85c.05-1.17.22-1.97.37-2.43.16-.57.37-1.05.82-1.51.46-.46.94-.66 1.51-.82.46-.15 1.26-.32 2.43-.37 1.27-.07 1.65-.07 4.85-.07zM12 0C8.74 0 8.33 0 7.05.07 5.78.14 4.96.33 4.22.7 3.46 1.1 2.8 1.64 2.15 2.2 1.5 2.76.84 3.42.7 4.22.33 4.96.14 5.78.07 7.05 0 8.33 0 8.74 0 12s0 3.67.07 4.95c.07 1.27.26 2.09.63 2.84.39.76.79 1.42 1.34 2.07.65.65 1.31 1.15 2.07 1.34.75.37 1.57.56 2.84.63C8.33 24 8.74 24 12 24s3.67 0 4.95-.07c1.27-.07 2.09-.26 2.84-.63.76-.39 1.42-.79 2.07-1.34.65-.65 1.15-1.31 1.34-2.07.37-.75.56-1.57.63-2.84.07-1.28.07-1.69.07-4.95s0-3.67-.07-4.95c-.07-1.27-.26-2.09-.63-2.84-.39-.76-.79-1.42-1.34-2.07-.65-.65-1.31-1.15-2.07-1.34-.75-.37-1.57-.56-2.84-.63C15.67 0 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.37a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Discord">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.32 4.37a19.8 19.8 0 00-4.9-1.46.08.08 0 00-.09.04 18.4 18.4 0 00-.82 1.49 18.2 18.2 0 00-5.49 0 18.4 18.4 0 00-.82-1.49.08.08 0 00-.09-.04 19.8 19.8 0 00-4.9 1.46.08.08 0 00-.04.06 20.6 20.6 0 00-1.45 15.73.08.08 0 00.05.06 19.9 19.9 0 004.91 2.35.08.08 0 00.1-.04 14.1 14.1 0 001.26-2.01.08.08 0 00-.05-.11 13.2 13.2 0 01-1.92-.92.08.08 0 010-.13 13.2 13.2 0 00.12-.11l.01-.01a.08.08 0 01.12 0 12 12 0 0010.68 0 .08.08 0 01.12 0l.01.01c.04.04.09.08.12.12a.08.08 0 010 .12 13.2 13.2 0 01-1.92.92.08.08 0 00-.05.12 14.1 14.1 0 001.26 2 .08.08 0 00.1.04 19.9 19.9 0 004.91-2.35.08.08 0 00.05-.06 20.6 20.6 0 00-1.45-15.73.08.08 0 00-.04-.06zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.4s.96-2.4 2.16-2.4 2.16 1.08 2.16 2.4-.97 2.4-2.16 2.4zm7.96 0c-1.18 0-2.16-1.08-2.16-2.4s.96-2.4 2.16-2.4 2.16 1.08 2.16 2.4-.97 2.4-2.16 2.4z"/></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.5a2.7 2.7 0 00-1.9-1.9C19.5 4 12 4 12 4s-7.5 0-9.6.6a2.7 2.7 0 00-1.9 1.9C0 8.6 0 12 0 12s0 3.4.5 5.5a2.7 2.7 0 001.9 1.9c2.1.6 9.6.6 9.6.6s7.5 0 9.6-.6a2.7 2.7 0 001.9-1.9c.5-2.1.5-5.5.5-5.5s0-3.4-.5-5.5zM9.5 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 7.35c-.48.24-1 .4-1.55.47.56-.33.98-.86 1.18-1.48-.52.31-1.1.53-1.7.65a2.76 2.76 0 00-4.7 2.52 7.82 7.82 0 01-5.67-2.88 2.75 2.75 0 00.85 3.68 2.75 2.75 0 01-1.24-.34v.03c0 1.33.95 2.44 2.21 2.69a2.77 2.77 0 01-1.24.05 2.76 2.76 0 002.58 1.92 5.53 5.53 0 01-3.42 1.18c-.22 0-.44-.01-.66-.05a7.8 7.8 0 004.22 1.24c5.07 0 7.84-4.2 7.84-7.84 0-.12 0-.24-.01-.36a5.6 5.6 0 001.37-1.43z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Condition</a></li>
              <li><a href="#">Pricing and Refund</a></li>
            </ul>
          </div>

          {/* Column 3 - Community */}
          <div className="footer-col">
            <h4 className="footer-heading">COMMUNITY</h4>
            <ul className="footer-links">
              <li><a href="#">Interns</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact">
              <li><a href="tel:+917462380649">+91 7462380649</a></li>
              <li><a href="tel:+917462380649">+91 7462380649</a></li>
              <li><a href="mailto:contact@gravitycoding.com">contact@gravitycoding.com</a></li>
              <li>23-B, Indrapuri Sector C,<br />Bhopal(MP), 462021</li>
            </ul>
            <a href="#" className="footer-cta">Contact us</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© All rights reserved. Skillverse Gravity Coding 2025</p>
          <div className="footer-legal">
            <a href="#">Imprint</a>
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
