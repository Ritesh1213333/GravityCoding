import React from 'react';
import './Courses.css';
import HeroSection from './components/HeroSection';
import CoursesList from './components/CoursesList';

const Courses = () => {
  return (
    <div className="courses-page">
      <HeroSection />
      <CoursesList />
    </div>
  );
};

export default Courses;
