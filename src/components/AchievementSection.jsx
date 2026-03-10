import { useState, useRef } from 'react'
import './AchievementSection.css'

const allPages = [
  /* ── Page 1 ── */
  [
    { url: '/events/IMG_20260125_175934_933.webp', label: 'Event', tag: 'Gravity Coding' },
    { url: '/events/IMG_20241112_163920_607.webp', label: 'Workshop', tag: 'November 2024' },
    { url: '/events/IMG_20241114_160841_409.webp', label: 'Session', tag: 'Hands-on' },
    { url: '/events/IMG_20251010_185521.webp', label: 'Event', tag: 'October 2025' },
    { url: '/events/IMG_20250526_112902_962.webp', label: 'Workshop', tag: 'May 2025' },
    { url: '/events/IMG_20250526_113942_503.webp', label: 'Training', tag: 'Batch 2025' },
  ],
  /* ── Page 2 ── */
  [
    { url: '/events/IMG-20251208-WA0090.webp', label: 'Event', tag: 'December 2025' },
    { url: '/events/IMG-20241120-WA0005.webp', label: 'Meetup', tag: 'November 2024' },
    { url: '/events/IMG_20260125_184439_538.webp', label: 'Event', tag: 'January 2026' },
    { url: '/events/IMG_20241116_134452_771.webp', label: 'Session', tag: 'Training Day' },
    { url: '/events/IMG_20250526_113626_561.webp', label: 'Workshop', tag: 'Campus' },
    { url: '/events/IMG_20241112_160141_561.webp', label: 'Event', tag: 'Jabalpur HQ' },
  ],
  /* ── Page 3 ── */
  [
    { url: '/events/IMG-20250807-WA0031.webp', label: 'Event', tag: 'August 2025' },
    { url: '/events/IMG_20241115_151229_438.webp', label: 'Session', tag: 'Community' },
    { url: '/events/IMG_20241115_141813_379.webp', label: 'Workshop', tag: 'Coding' },
    { url: '/events/IMG_20250526_132850_253.webp', label: 'Event', tag: 'May 2025' },
    { url: '/events/DSC_0227.webp', label: 'Event', tag: 'Gravity Coding' },
    { url: '/events/IMG_20251229_170446_530.webp', label: 'Meetup', tag: 'December 2025' },
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
