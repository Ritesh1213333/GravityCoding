import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import courseArrow from '../assests/course_arrow.png'
import './Section7.css'

gsap.registerPlugin(ScrollTrigger)

const row1 = [
  { name: 'Google',    logo: 'https://logo.clearbit.com/google.com',    color: '#4285F4' },
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com', color: '#00A4EF' },
  { name: 'Amazon',    logo: 'https://logo.clearbit.com/amazon.com',    color: '#FF9900' },
  { name: 'Meta',      logo: 'https://logo.clearbit.com/meta.com',      color: '#0081FB' },
  { name: 'Adobe',     logo: 'https://logo.clearbit.com/adobe.com',     color: '#FF0000' },
  { name: 'TCS',       logo: 'https://logo.clearbit.com/tcs.com',       color: '#0033A0' },
  { name: 'Infosys',   logo: 'https://logo.clearbit.com/infosys.com',   color: '#007CC3' },
  { name: 'Wipro',     logo: 'https://logo.clearbit.com/wipro.com',     color: '#7B2D8B' },
]

const row2 = [
  { name: 'IBM',       logo: 'https://logo.clearbit.com/ibm.com',       color: '#1F70C1' },
  { name: 'Accenture', logo: 'https://logo.clearbit.com/accenture.com', color: '#A100FF' },
  { name: 'Flipkart',  logo: 'https://logo.clearbit.com/flipkart.com',  color: '#2874F0' },
  { name: 'Zomato',    logo: 'https://logo.clearbit.com/zomato.com',    color: '#E23744' },
  { name: 'Swiggy',    logo: 'https://logo.clearbit.com/swiggy.in',     color: '#FC8019' },
  { name: 'Paytm',     logo: 'https://logo.clearbit.com/paytm.com',     color: '#00BAF2' },
  { name: 'Cognizant', logo: 'https://logo.clearbit.com/cognizant.com', color: '#1263A7' },
  { name: 'HCL',       logo: 'https://logo.clearbit.com/hcltech.com',   color: '#007DC5' },
]

const stats = [
  { num: '200', plus: '+',  label: 'Students Placed' },
  { num: '50',  plus: '+',  label: 'Hiring Companies' },
  { num: '₹6',  plus: 'L+', label: 'Avg. Starting Package' },
  { num: '92',  plus: '%',  label: 'Placement Rate' },
]

function LogoCard({ name, logo, color }) {
  return (
    <div className="s7-logo-card" style={{ '--brand': color }}>
      <div className="s7-logo-img-wrap">
        <img
          src={logo}
          alt={name}
          className="s7-logo-img"
          onError={e => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <span className="s7-logo-fallback" style={{ background: color, display: 'none' }}>
          {name[0]}
        </span>
      </div>
      <span className="s7-logo-name">{name}</span>
    </div>
  )
}

function MarqueeRow({ companies, direction }) {
  const trackRef = useRef(null)
  const doubled = [...companies, ...companies]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth / 2
    gsap.set(track, { x: direction === 'left' ? 0 : -totalWidth })

    const tween = gsap.to(track, {
      x: direction === 'left' ? -totalWidth * 0.3 : totalWidth * 0.3 - totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: track.closest('.s7-marquees'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: 4,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [direction])

  return (
    <div className="s7-marquee-wrap">
      <div ref={trackRef} className="s7-marquee-track">
        {doubled.map((c, i) => <LogoCard key={i} {...c} />)}
      </div>
    </div>
  )
}

export default function Section7() {
  return (
    <section className="section7">
      <div className="s7-glow" />

      <div className="s7-inner">

        <div className="s7-header">
          <div className="s7-header-left">
            <h1 className="s7-watermark">COMPANIES</h1>
            <h2 className="s7-heading">
              <span className="s7-highlight">50+</span> Top Recruiting Companies
            </h2>
            <p className="s7-sub">Where Our Students Get Placed</p>
          </div>
          <img src={courseArrow} alt="" className="s7-header-arrow" aria-hidden />
        </div>

        <div className="s7-marquees">
          <MarqueeRow companies={row1} direction="left" />
          <MarqueeRow companies={row2} direction="right" />
        </div>

        <div className="s7-stats">
          {stats.map((s, i) => (
            <div key={i} className="s7-stat">
              <span className="s7-stat-num">{s.num}<span className="s7-stat-plus">{s.plus}</span></span>
              <span className="s7-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
