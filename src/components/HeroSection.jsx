import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import './HeroSection.css'

function HeroSection() {
  const scrollRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    const hero = heroRef.current
    if (!el || !hero) return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power2.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power2.out' })

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const moveX = (e.clientX - centerX) / (rect.width / 2) * 25
      const moveY = (e.clientY - centerY) / (rect.height / 2) * 25
      xTo(moveX)
      yTo(moveY)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    hero.addEventListener('mousemove', handleMouseMove)
    hero.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="hero-hero" ref={heroRef}>
        <div className="hero-bg-graphics" aria-hidden>
          <div className="hero-bg-orb hero-bg-orb-1" />
          <div className="hero-bg-orb hero-bg-orb-2" />
          <div className="hero-bg-orb hero-bg-orb-3" />
          <div className="hero-bg-grid" />
          <svg className="hero-bg-hex" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hexGrid" width="20" height="17.32" patternUnits="userSpaceOnUse">
                <path d="M10 0L20 5v10l-10 5L0 15V5z" fill="none" stroke="rgba(73,125,255,0.08)" strokeWidth="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexGrid)"/>
          </svg>
        </div>
        <span className="hero-label">Creative Studio</span>
        <span className="hero-arrow" aria-hidden>↗</span>

        <div className="hero-content">

          <div className="hero-stats">
            <div className="hero-avatars">
              <img src="https://i.pravatar.cc/80?img=1" alt="" className="hero-avatar" />
              <img src="https://i.pravatar.cc/80?img=2" alt="" className="hero-avatar" />
              <img src="https://i.pravatar.cc/80?img=3" alt="" className="hero-avatar" />
              <img src="https://i.pravatar.cc/80?img=4" alt="" className="hero-avatar" />
            </div>
            <p className="hero-stats-text">
              <span className="hero-stats-highlight">50K+</span> developers building real-world skills
            </p>
          </div>

          <h1 className="hero-heading">
            <span className="hero-line hero-line-1">Get Placed At Your</span>
            <span className="hero-line hero-line-2"><span className="hero-line-2-blue">Dream Company</span><span className="hero-line-2-light"> In 6 Months!</span></span>
          </h1>

          <p className="hero-community">
Master in-demand skills and land your dream role at top product companies.
          </p>

          <div className="hero-cta-wrap">
            <a href="#" className="hero-cta">Start Journey →</a>
          </div>

          <div className="hero-features">
            <span className="hero-feature">✓ Industry mentors</span>
            <span className="hero-feature">✓ Live projects</span>
            <span className="hero-feature">✓ Job support</span>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="hero-scroll-mouse" ref={scrollRef}>
            <div className="scroll-circle-wrap">
            <svg className="scroll-svg-text" viewBox="0 0 100 100" aria-hidden>
              <defs>
                <path id="scrollCirclePath" d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
              </defs>
              <text fill="rgba(255,255,255,0.85)" fontSize="8" fontWeight="500" letterSpacing="0.5">
                <textPath href="#scrollCirclePath" startOffset="0">SCROLL TO EXPLORE • GRAVITY CODING • </textPath>
              </text>
            </svg>
            <span className="scroll-arrow-down" aria-hidden>↓</span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection
