import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import courseArrow from '../assests/course_arrow.png'
import './Section8.css'

const reviews = [
  {
    text: "Gravity Coding ne meri zindagi badal di. 6 mahine mein mujhe TCS mein placement mila. Instructors bahut helpful hain aur live projects se real experience milta hai.",
    name: 'Rahul Sharma',
    role: 'Software Engineer | TCS',
    avatar: 'https://i.pravatar.cc/80?img=11',
    rating: 5,
  },
  {
    text: "Best coding institute in Jabalpur! The curriculum is industry-relevant and the mentors guide you at every step. Got placed at Infosys right after completing the course.",
    name: 'Priya Verma',
    role: 'Associate Developer | Infosys',
    avatar: 'https://i.pravatar.cc/80?img=47',
    rating: 5,
  },
  {
    text: "I joined from Nepal and the online program was excellent. The hackathons gave me real-world exposure. Now I'm working at a product startup in Kathmandu.",
    name: 'Anish Thapa',
    role: 'Frontend Developer | Nepal',
    avatar: 'https://i.pravatar.cc/80?img=33',
    rating: 5,
  },
  {
    text: "Pehle coding se darta tha, ab confidently React aur Node.js use karta hoon. Gravity Coding ka structured approach aur support system kamaal ka hai.",
    name: 'Amit Patel',
    role: 'Full Stack Developer | Wipro',
    avatar: 'https://i.pravatar.cc/80?img=52',
    rating: 5,
  },
  {
    text: "The hackathons conducted by Gravity Coding helped me build my portfolio. Within 3 months I landed my first internship at a product company in Pune.",
    name: 'Sneha Joshi',
    role: 'SDE Intern | Pune Startup',
    avatar: 'https://i.pravatar.cc/80?img=25',
    rating: 5,
  },
  {
    text: "Coming from a non-CS background, I was skeptical. But GC's structured learning path made it easy to transition into tech. Got placed in 5 months!",
    name: 'Ravi Kumar',
    role: 'Junior Developer | HCL',
    avatar: 'https://i.pravatar.cc/80?img=60',
    rating: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="s8-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="s8-star" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ text, name, role, avatar, rating }) {
  return (
    <div className="s8-card">
      <StarRating count={rating} />
      <p className="s8-card-text">"{text}"</p>
      <div className="s8-card-author">
        <img src={avatar} alt={name} className="s8-avatar" />
        <div className="s8-author-info">
          <span className="s8-author-name">{name}</span>
          <span className="s8-author-role">{role}</span>
        </div>
      </div>
    </div>
  )
}

export default function Section8() {
  return (
    <section className="section8">
      <div className="s8-glow-1" />
      <div className="s8-glow-2" />

      <div className="s8-inner">

        {/* Header */}
        <div className="s8-header">
          <div className="s8-header-left">
            <div className="s8-watermark-wrap">
              <h1 className="s8-watermark">REVIEWS</h1>
              <img src={courseArrow} alt="" className="s8-arrow" aria-hidden />
            </div>
            <h2 className="s8-heading">
              Kind words from our{' '}
              <span className="s8-highlight">students</span>{' '}
              around the world
            </h2>
          </div>
          <a href="#" className="s8-cta">Discover our courses →</a>
        </div>

        {/* Swiper */}
        <div className="s8-swiper-wrap" data-lenis-prevent>
          <Swiper
            className="s8-swiper"
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: 's8-dot',
              bulletActiveClass: 'active',
            }}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <ReviewCard {...r} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  )
}
