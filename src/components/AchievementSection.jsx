import { useState, useRef } from 'react'
import './AchievementSection.css'

const allPages = [
  /* ── Page 1 ── */
  [
    { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', label: 'Office Opening',       tag: 'Jabalpur HQ' },
    { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', label: 'Mega Seminar',         tag: '500+ Students' },
    { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80', label: 'International Webinar',tag: 'Nepal • Dubai • USA' },
    { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80', label: 'Hackathon 2024',       tag: 'GC Students Won' },
    { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', label: 'Live Workshop',        tag: 'Hands-on Coding' },
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', label: 'Internship Drive',      tag: 'Industry Partners' },
  ],
  /* ── Page 2 ── */
  [
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', label: 'Team Collaboration',   tag: 'Sprint Day' },
    { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', label: 'Training Session',     tag: 'Batch 2024' },
    { url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80', label: 'Award Ceremony',       tag: 'Top Performers' },
    { url: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80', label: 'Coding Marathon',      tag: '48hrs Hackathon' },
    { url: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&q=80', label: 'Campus Connect',        tag: 'College Outreach' },
    { url: 'https://images.unsplash.com/photo-1558403194-611308249627?w=800&q=80', label: 'Placement Celebration',  tag: 'Dream Job!' },
  ],
  /* ── Page 3 ── */
  [
    { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80', label: 'Tech Talk',            tag: 'Industry Expert' },
    { url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80', label: 'Product Launch',        tag: 'Student Project' },
    { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', label: 'Classroom Session',    tag: 'Daily Grind' },
    { url: 'https://images.unsplash.com/photo-1573166953836-06864dc68207?w=800&q=80', label: 'Mentorship Program',   tag: 'One-on-One' },
    { url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80', label: 'Global Webinar',         tag: '1000+ Joined' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', label: 'Student Meetup',       tag: 'Community' },
  ],
]

function Gallery({ photos, slideDir }) {
  return (
    <div className={`achieve-gallery achieve-gallery--slide-${slideDir}`}>
      {photos.map((p, i) => (
        <div key={i} className={`achieve-photo achieve-photo--${i + 1}`}>
          <img src={p.url} alt={p.label} loading="lazy" />
          <div className="achieve-photo-overlay">
            <span className="achieve-photo-tag">{p.tag}</span>
            <p className="achieve-photo-label">{p.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AchievementSection() {
  const [page, setPage] = useState(0)
  const [slideDir, setSlideDir] = useState('none')
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)

  const goTo = (next) => {
    if (animating) return
    const dir = next > page ? 'in' : 'back'
    setSlideDir(dir)
    setAnimating(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setPage(next)
      setSlideDir('none')
      setAnimating(false)
    }, 480)
  }

  const isLast = page === allPages.length - 1

  return (
    <section className="achieve">
      <div className="achieve-glow-1" />
      <div className="achieve-glow-2" />
      <div className="achieve-glow-3" />

      <div className="achieve-inner">

        {/* Header */}
        <header className="achieve-header">
          <div className="achieve-header-left">
            <h1 className="achieve-watermark">ACHIEVEMENTS</h1>
            <h2 className="achieve-subtitle">Our proudest <span className="achieve-blue">moments</span></h2>
            <p className="achieve-desc">
              From humble beginnings in Jabalpur to students placed globally —
              every milestone tells our story.
            </p>
          </div>
        </header>

        {/* Gallery wrapper — clips sliding */}
        <div className="achieve-gallery-viewport">
          <Gallery photos={allPages[page]} slideDir={slideDir} />
        </div>

        {/* Dots + More button */}
        <div className="achieve-controls">
          <div className="achieve-dots">
            {allPages.map((_, i) => (
              <button
                key={i}
                className={`achieve-dot${i === page ? ' achieve-dot--active' : ''}`}
                onClick={() => i !== page && goTo(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          {!isLast ? (
            <button className="achieve-more-btn" onClick={() => goTo(page + 1)}>
              More <span className="achieve-more-arrow">→</span>
            </button>
          ) : (
            <button className="achieve-more-btn achieve-more-btn--back" onClick={() => goTo(0)}>
              <span className="achieve-more-arrow">←</span> Back
            </button>
          )}
        </div>

      </div>
    </section>
  )
}
