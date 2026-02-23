import { useEffect, useRef } from 'react'
import './Companies.css'

const logos = [
  { name: 'Google',    slug: 'google' },
  { name: 'Microsoft', slug: 'microsoft' },
  { name: 'Amazon',    slug: 'amazon' },
  { name: 'Meta',      slug: 'meta' },
  { name: 'Adobe',     slug: 'adobe' },
  { name: 'IBM',       slug: 'ibm' },
  { name: 'Accenture', slug: 'accenture' },
  { name: 'TCS',       slug: 'tata' },
  { name: 'Infosys',   slug: 'infosys' },
  { name: 'Wipro',     slug: 'wipro' },
  { name: 'Flipkart',  slug: 'flipkart' },
  { name: 'Zomato',    slug: 'zomato' },
  { name: 'Cognizant', slug: 'cognizant' },
  { name: 'Oracle',    slug: 'oracle' },
  { name: 'Salesforce',slug: 'salesforce' },
]

function MarqueeTrack({ items }) {
  const trackRef = useRef(null)
  const animRef  = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let x = 0
    const speed = 0.55
    const tick = () => {
      const halfWidth = track.scrollWidth / 2
      x -= speed
      if (Math.abs(x) >= halfWidth) x = 0
      track.style.transform = `translateX(${x}px)`
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  const doubled = [...items, ...items]

  return (
    <div className="comp-row-wrap">
      <div ref={trackRef} className="comp-row-track">
        {doubled.map(({ name, slug }, i) => (
          <div key={i} className="comp-logo-item">
            <img
              src={`https://cdn.simpleicons.org/${slug}/ffffff`}
              alt={name}
              className="comp-logo-icon"
              onError={e => { e.currentTarget.style.display = 'none' }}
            />
            <span className="comp-logo-name">{name}</span>
            <span className="comp-divider" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Companies() {
  return (
    <section className="companies-section">
      <MarqueeTrack items={logos} />
    </section>
  )
}
