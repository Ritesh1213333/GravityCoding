import { useState } from 'react'
import './Section3.css'
import rect21 from '../assests/Rectangle 21.jpg'
import yt1 from '../assests/Youtube_image1.png'
import yt2 from '../assests/Youtube_image2.png'

const cards = [
  { image: rect21, title: 'Hackathons are a waste of time!', views: '50k', likes: '2.1k', creator: 'Gravity Coding' },
  { image: yt1, title: 'Front-End Domination: Create Anything', views: '87k', likes: '3.4k', creator: 'Gravity Coding' },
  { image: yt2, title: 'FREE COURSE - Modern Frontend Web Dev', views: '120k', likes: '5.2k', creator: 'Gravity Coding' },
]

function Section3() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="section3" data-lenis-prevent>
      <div className="section3-inner">
        <span className="section3-label">YOUTUBE</span>
        <h2 className="section3-heading">
          <span className="section3-highlight">250+</span> Free Video Lessons
        </h2>
        <p className="section3-sub">Watch on Our YouTube Channel</p>
      </div>

      <div
        className="section3-track-wrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`section3-track ${isPaused ? 'paused' : ''}`}
        >
          {[...cards, ...cards, ...cards].map((card, i) => (
            <article key={i} className="section3-card">
              <div className="section3-card-thumb">
                <img src={card.image} alt="" />
              </div>
              <h3 className="section3-card-title">{card.title}</h3>
              <p className="section3-card-meta">
                {card.views} Views · {card.likes} Likes
              </p>
              <p className="section3-card-creator">{card.creator}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section3
