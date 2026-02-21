import { useRef, useState } from 'react'
import './Section4.css'
import rect21 from '../assests/Rectangle 21.jpg'
import yt1 from '../assests/Youtube_image1.png'
import yt2 from '../assests/Youtube_image2.png'
import youtubeArrow from '../assests/youtube_arrow.png'

const cards = [
  { image: rect21, title: 'Hackathons are a waste of time!', views: '50k', likes: '2.1k', creator: 'Gravity Coding' },
  { image: yt1, title: 'Front-End Domination: Create Anything', views: '87k', likes: '3.4k', creator: 'Gravity Coding' },
  { image: yt2, title: 'FREE COURSE - Modern Frontend Web Dev', views: '120k', likes: '5.2k', creator: 'Gravity Coding' },
]

function Section4() {
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="section4" data-lenis-prevent>
      <img src={youtubeArrow} alt="" className="section4-arrow" aria-hidden />
      <div className="section4-inner">
        <div className="section4-header-left">
          <h1 className="section4-label">YOUTUBE</h1>
          <h2 className="section4-heading">
            <span className="section4-highlight">200+</span> Free Video Lessons
          </h2>
          <p className="section4-sub">Watch on Our YouTube Channel</p>
        </div>
        <div className="section4-logo-3d">
          <svg viewBox="0 0 159 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M154 17.5c-1-10-7.5-17.5-17.5-17.5H23.5C13.5 0 6 7.5 5 17.5v75c1 10 7.5 17.5 17.5 17.5h112c10 0 16.5-7.5 17.5-17.5v-75z" fill="#FF0000"/>
            <path d="M64 76V34l52 21-52 21z" fill="white"/>
          </svg>
        </div>
      </div>

      <div
        className="section4-track-wrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className={`section4-track ${isPaused ? 'paused' : ''}`}
        >
          {[...cards, ...cards, ...cards].map((card, i) => (
            <article key={i} className="section4-card">
              <div className="section4-card-thumb">
                <img src={card.image} alt="" />
              </div>
              <h3 className="section4-card-title">{card.title}</h3>
              <p className="section4-card-meta">
                {card.views} Views · {card.likes} Likes
              </p>
              <p className="section4-card-creator">{card.creator}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section4
