import React from 'react';
import { BookOpen, Clock, Star } from 'lucide-react';
import './CoursesList.css';

const coursesData = [
  {
    id: 1,
    title: 'AI Reinforcement',
    instructor: 'Dr. Laura Kim',
    image: 'https://images.unsplash.com/photo-1620712948343-0088b392b950?q=80&w=600&auto=format&fit=crop',
    lessons: '16 Lessons',
    duration: '12h 25m',
    rating: '4.4',
    price: '$269'
  },
  {
    id: 2,
    title: 'Advanced Neural Networks',
    instructor: 'Prof. Alan Turing',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop',
    lessons: '24 Lessons',
    duration: '18h 40m',
    rating: '4.8',
    price: '$349'
  },
  {
    id: 3,
    title: 'Machine Learning Basics',
    instructor: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
    lessons: '12 Lessons',
    duration: '8h 15m',
    rating: '4.2',
    price: '$199'
  }
];

const CoursesList = () => {
  return (
    <section className="courses-list-section">
      <div className="courses-list-header">
        <h2 className="courses-list-title">Explore Our Programs</h2>
      </div>
      
      <div className="courses-grid-light">
        {coursesData.map(course => (
          <div key={course.id} className="course-card-light">
            
            <div className="card-img-wrapper">
              <span className="card-price-badge">{course.price}</span>
              <img src={course.image} alt={course.title} className="card-img" />
            </div>

            <div className="card-text-content">
              <h3 className="card-title-light">{course.title}</h3>
              <p className="card-instructor">{course.instructor}</p>

              <div className="card-stats-row">
                <div className="stat-item-light">
                  <BookOpen size={16} className="stat-icon" />
                  <span>{course.lessons}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item-light">
                  <Clock size={16} className="stat-icon" />
                  <span>{course.duration}</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item-light">
                  <Star size={16} className="stat-icon" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <button className="btn-enroll">
                Enroll Session
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesList;
