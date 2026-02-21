import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './OurCourseSection.css'
import courseArrow from '../assests/course_arrow.png'
import courseThumb from '../assests/Rectangle 21.jpg'

const courses = [
  {
    image: courseThumb,
    title: 'Front-End Domination: Create Anything with Code',
    tags: ['Web Development', 'Animation', 'Design'],
    instructor: 'Amarjeet Ch.',
    price: '₹4999',
  },
  {
    image: courseThumb,
    title: 'Front-End Domination: Create Anything with Code',
    tags: ['Web Development', 'Animation', 'Design'],
    instructor: 'Amarjeet Ch.',
    price: '₹4999',
  },
  {
    image: courseThumb,
    title: 'Front-End Domination: Create Anything with Code',
    tags: ['Web Development', 'Animation', 'Design'],
    instructor: 'Amarjeet Ch.',
    price: '₹4999',
  },
  {
    image: courseThumb,
    title: 'Front-End Domination: Create Anything with Code',
    tags: ['Web Development', 'Animation', 'Design'],
    instructor: 'Amarjeet Ch.',
    price: '₹4999',
  },
  {
    image: courseThumb,
    title: 'Front-End Domination: Create Anything with Code',
    tags: ['Web Development', 'Animation', 'Design'],
    instructor: 'Amarjeet Ch.',
    price: '₹4999',
  },
  {
    image: courseThumb,
    title: 'Front-End Domination: Create Anything with Code',
    tags: ['Web Development', 'Animation', 'Design'],
    instructor: 'Amarjeet Ch.',
    price: '₹4999',
  },
  {
    image: courseThumb,
    title: 'Front-End Domination: Create Anything with Code',
    tags: ['Web Development', 'Animation', 'Design'],
    instructor: 'Amarjeet Ch.',
    price: '₹4999',
  },
]

function OurCourseSection() {
  return (
    <section className="saas-hero">
      {/* Background */}
      <div className="saas-hero-bg">
        <div className="saas-hero-glow" />
        <div className="saas-hero-vignette" />
      </div>

      {/* Sparkles */}
      <span className="saas-sparkle saas-sparkle-1" aria-hidden>✦</span>
      <span className="saas-sparkle saas-sparkle-2" aria-hidden>✦</span>
      <span className="saas-sparkle saas-sparkle-3" aria-hidden>✦</span>
      <span className="saas-sparkle saas-sparkle-4" aria-hidden>✦</span>

      <div className="saas-hero-inner">
        {/* Top Left Content */}
        <header className="saas-header">
          <div className="saas-header-left">
            <h1 className="saas-heading-watermark">OUR COURSE</h1>
            <h2 className="saas-subtitle">Start mastering your craft</h2>
            <p className="saas-desc">
              Become someone who gets results. Up your game with growth marketing, product, data, analytics, and UX design courses.
            </p>
          </div>

          {/* Arrow: OUR COURSE → Enroll */}
          <img src={courseArrow} alt="" className="saas-arrow-doodle" aria-hidden />
          {/* Top Right CTA */}
          <div className="saas-header-right">
            <a href="#" className="saas-cta-pill">Discover our courses →</a>
            <p className="saas-accent-text">
              <span className="saas-accent-highlight">Enroll</span> and boost your career now
            </p>
          </div>
        </header>

        {/* Center - Course Cards Swiper - data-lenis-prevent lets Swiper receive touch/scroll */}
        <div className="saas-swiper-wrap" data-lenis-prevent>
          <Swiper
            className="saas-swiper"
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'saas-dot',
              bulletActiveClass: 'active',
            }}
            breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {courses.map((course, i) => (
            <SwiperSlide key={i}>
              <article className="saas-card">
                <div className="saas-card-thumb">
                  <img src={course.image} alt="" className="saas-card-img" />
                </div>
                <h3 className="saas-card-title">{course.title}</h3>
                <div className="saas-card-tags">
                  {course.tags.map((tag) => (
                    <span key={tag} className="saas-tag-pill">{tag}</span>
                  ))}
                </div>
                <div className="saas-card-meta">
                  <span className="saas-card-author">By {course.instructor}</span>
                  <span className="saas-card-price">{course.price}</span>
                </div>
                <button className="saas-card-enroll">Enroll Now</button>
              </article>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default OurCourseSection
