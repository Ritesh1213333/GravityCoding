import React, { useState } from 'react';
import CoursesHero from './components/CoursesHero';
import CourseCard from './components/CourseCard';
import CourseFAQ from './components/CourseFAQ';
import CourseComparison from './components/CourseComparison';

const COURSES_DATA = [
  {
    id: 1,
    title: 'React JS for Beginners',
    description: 'Build real-world apps with React',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    isFree: false,
    price: '999',
    originalPrice: '2,499',
    level: 'Beginner',
    duration: '8 Hours',
    projects: 5,
    isEnrolled: false,
    isComingSoon: true
  },
  {
    id: 2,
    title: 'Python for Data Science',
    description: 'Master data analysis with Python',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    isFree: false,
    price: '1,499',
    originalPrice: '3,999',
    level: 'Intermediate',
    duration: '12 Hours',
    projects: 8,
    isEnrolled: false,
    isComingSoon: true
  },
  {
    id: 3,
    title: 'UI/UX Masterclass: Premium Experiences',
    description: 'Design premium user experiences in Figma',
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=800&auto=format&fit=crop',
    isFree: false,
    price: '2,999',
    originalPrice: '6,999',
    level: 'Advanced',
    duration: '15 Hours',
    projects: 10,
    isEnrolled: true,
    progress: 60
  },
  {
    id: 4,
    title: 'Web Dev 101: The Basics',
    description: 'Start your journey into modern web development',
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
    isFree: true,
    price: '0',
    level: 'Beginner',
    duration: '4 Hours',
    projects: 2,
    isEnrolled: false
  },
  {
    id: 5,
    title: 'Node.js & Express: Backend Pro',
    description: 'Build fast and scalable server-side applications',
    thumbnail: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=800&auto=format&fit=crop',
    isFree: false,
    price: '1,299',
    originalPrice: '3,499',
    level: 'Intermediate',
    duration: '10 Hours',
    projects: 6,
    isEnrolled: false
  },
  {
    id: 6,
    title: 'Advanced CSS Animation',
    description: 'Master complex layout and high-performance UI motion',
    thumbnail: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=800&auto=format&fit=crop',
    isFree: false,
    price: '799',
    originalPrice: '1,999',
    level: 'Advanced',
    duration: '6 Hours',
    projects: 4,
    isEnrolled: false
  }
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All Technologies');

  return (
    <div className="min-h-screen bg-[#0b0c10] font-poppins pb-24">
      {/* Hero Section */}
      <CoursesHero />

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSES_DATA.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <CourseComparison />

      {/* FAQ Section */}
      <CourseFAQ />
    </div>
  );
};

export default Courses;
