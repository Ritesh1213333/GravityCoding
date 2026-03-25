import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../../assests/Gc_logo.png'



const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Contact Us', href: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [hidden, setHidden]       = useState(false)
  const lastScrollY               = useRef(0)
  const location                  = useLocation()

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
      <header className={`fixed top-0 left-0 right-0 z-[1002] flex justify-between items-center px-6 md:px-28 py-5 bg-black/40 backdrop-blur-xl transition-transform duration-400 ease-in-out ${hidden ? '-translate-y-full shadow-none' : 'translate-y-0 shadow-lg shadow-black/10'}`}>
        <Link to="/" className="flex items-center no-underline outline-none scale-100 active:scale-95 transition-transform">
          <img src={logo} alt="Gravity Coding" className="h-[36px] md:h-[40px] w-auto object-contain block" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`text-[0.95rem] font-medium py-1 relative no-underline transition-colors duration-300 outline-none
                      ${isActive ? 'text-white after:scale-x-100' : 'text-white/85 hover:text-white after:scale-x-0'}
                      after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-[#497DFF] 
                      after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-400 after:ease-out
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center">
          <Link to="/signin" className="flex items-center gap-2 px-6 py-2.5 text-[0.95rem] font-semibold text-white bg-[#497DFF] border-none rounded-full cursor-pointer transition-all duration-300 hover:bg-[#3269f5] hover:-translate-y-0.5 active:scale-95 no-underline shadow-md shadow-[#497DFF]/20">
            Sign In <span>→</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg border-none cursor-pointer z-[1003] outline-none transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <X className="text-white w-7 h-7 transition-all duration-300 transform rotate-0 scale-100" />
          ) : (
            <Menu className="text-white w-7 h-7 transition-all duration-300 transform rotate-0 scale-100" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[1001] bg-[#0a0a0a] transition-all duration-500 ease-in-out lg:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-hidden={!menuOpen}
      >
        <div className="min-h-full flex flex-col items-start justify-start px-10 py-32">
          <ul className="flex flex-col items-start gap-10 list-none m-0 p-0 mb-16">
            {NAV_LINKS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`text-4xl font-bold py-1 relative no-underline transition-colors duration-300 outline-none
                      ${isActive ? 'text-white after:scale-x-100' : 'text-white/60 hover:text-white after:scale-x-0'}
                      after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-1 after:bg-[#497DFF] 
                      after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-400 after:ease-out
                    `}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link to="/signin" className="px-14 py-4.5 text-xl font-bold text-white bg-[#497DFF] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 no-underline shadow-2xl shadow-[#497DFF]/30" onClick={closeMenu}>
            Sign In
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
