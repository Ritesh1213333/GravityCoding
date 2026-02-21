import { useEffect, useRef, useState } from 'react'
import './Section6.css'

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1800
          const step = (target / duration) * 16
          const timer = setInterval(() => {
            start += step
            if (start >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(start))
          }, 16)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { number: 500, suffix: '+', label: 'Students Enrolled', sub: 'Across India & beyond', icon: '🎓' },
  { number: 10,  suffix: '+', label: 'Hackathons Conducted', sub: 'Real-world problem solving', icon: '💻' },
  { number: 15,  suffix: '+', label: 'Foreign Students', sub: 'Nepal, Dubai, USA & more', icon: '🌍' },
  { number: 2,   suffix: '',  label: 'Offline Centers', sub: 'Jabalpur, Madhya Pradesh', icon: '📍' },
]

const timeline = [
  { year: '2022', title: 'Founded in Jabalpur', desc: 'Gravity Coding started with a simple mission — make coding accessible to everyone.', color: '#497DFF' },
  { year: '2023', title: 'First Hackathon', desc: 'Conducted our first hackathon with 100+ student participants across MP.', color: '#22c55e' },
  { year: '2023', title: 'Went International', desc: 'Students from Nepal, Dubai & USA joined our online programs.', color: '#f59e0b' },
  { year: '2024', title: '2 Offline Centers', desc: 'Launched two physical learning centers in Jabalpur, MP.', color: '#a855f7' },
  { year: '2024', title: '500+ Students', desc: 'Crossed a major milestone — 500+ students enrolled across all programs.', color: '#497DFF' },
]

const photos = [
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80', label: 'Mega Seminar', tag: 'Jabalpur' },
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80', label: 'Live Workshop', tag: 'Hands-on' },
  { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=700&q=80', label: 'International Webinar', tag: 'Foreign Students' },
  { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&q=80', label: 'Hackathon 2024', tag: 'GC Students Won' },
]

export default function Section6() {
  return (
    <section className="section6">
      <div className="section6-glow-1" />
      <div className="section6-glow-2" />

      <div className="section6-inner">

        {/* Badge + Heading */}
        <div className="section6-header">
          <span className="section6-badge">
            <span className="section6-badge-dot" />
            RESULT
          </span>
          <h2 className="section6-heading">
            How We Are Doing It{' '}
            <span className="section6-highlight">Faster</span>{' '}
            And Better Than Others!
          </h2>
        </div>

        {/* Stats Row */}
        <div className="section6-stats">
          {stats.map((s, i) => (
            <div key={i} className="s6-stat">
              <span className="s6-stat-icon">{s.icon}</span>
              <div className="s6-stat-number">
                <Counter target={s.number} suffix={s.suffix} />
              </div>
              <p className="s6-stat-label">{s.label}</p>
              <p className="s6-stat-sub">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Split: Timeline left + Photos right */}
        <div className="section6-split">

          {/* Timeline */}
          <div className="section6-timeline">
            <h3 className="s6-tl-title">Our Journey</h3>
            <div className="s6-tl-list">
              {timeline.map((item, i) => (
                <div key={i} className="s6-tl-item">
                  <div className="s6-tl-dot" style={{ background: item.color, boxShadow: `0 0 10px ${item.color}88` }} />
                  <div className="s6-tl-line" />
                  <div className="s6-tl-content">
                    <span className="s6-tl-year" style={{ color: item.color }}>{item.year}</span>
                    <p className="s6-tl-event">{item.title}</p>
                    <p className="s6-tl-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Mosaic */}
          <div className="section6-mosaic">
            <div className="s6-mosaic-tall">
              <img src={photos[0].url} alt={photos[0].label} />
              <div className="s6-mosaic-overlay">
                <span className="s6-photo-tag">{photos[0].tag}</span>
                <p className="s6-photo-label">{photos[0].label}</p>
              </div>
            </div>
            <div className="s6-mosaic-col">
              {photos.slice(1).map((photo, i) => (
                <div key={i} className="s6-mosaic-small">
                  <img src={photo.url} alt={photo.label} />
                  <div className="s6-mosaic-overlay">
                    <span className="s6-photo-tag">{photo.tag}</span>
                    <p className="s6-photo-label">{photo.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
