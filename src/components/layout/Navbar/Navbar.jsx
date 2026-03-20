import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assests/Group 2 1.png'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '/', active: true },
  { label: 'About', href: '/about' },
  { label: 'Brand', href: '#' },
  { label: 'Courses', href: '#' },
  { label: 'Contact Now', href: '#' },
]

function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [hidden, setHidden]       = useState(false)
  const lastScrollY               = useRef(0)

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      if (currentY < 60) {
        setHidden(false)
      } else if (currentY > lastScrollY.current + 6) {
        setHidden(true)
      } else if (currentY < lastScrollY.current - 6) {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`nav-header${hidden ? ' nav-header--hidden' : ''}`}>
        <Link to="/" className="nav-brand">
          <img src={logo} alt="Gravity Coding" className="nav-logo" />
        </Link>

        <nav className="nav-desktop">
          <ul className="nav-list">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`nav-link ${item.active ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/signin" className="nav-cta nav-cta-desktop">
          Sign In <span>→</span>
        </Link>

        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </header>

      {/* Mobile overlay - rendered outside flow for clean z-index */}
      <div
        className={`nav-overlay ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav-overlay-inner">
          <div className="nav-overlay-header">
            <Link to="/" className="nav-overlay-logo" onClick={closeMenu}>
              <img src={logo} alt="Gravity Coding" className="nav-logo" />
            </Link>
            <button
              className="nav-overlay-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <ul className="nav-overlay-list">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`nav-link ${item.active ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/signin" className="nav-overlay-cta" onClick={closeMenu}>
            Sign In
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
