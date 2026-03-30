import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import StudentLayout from './components/layout/StudentLayout/StudentLayout'

import HeroSection from './components/home/HeroSection/HeroSection'
import OurCourseSection from './components/home/OurCourseSection/OurCourseSection'

// Lazy Load Home Components
const Companies = lazy(() => import('./components/home/Companies/Companies'))
const AchievementSection = lazy(() => import('./components/home/AchievementSection/AchievementSection'))
const Section4 = lazy(() => import('./components/home/Section4/Section4'))
const Section5 = lazy(() => import('./components/home/Section5/Section5'))
const Section8 = lazy(() => import('./components/home/Section8/Section8'))

// Lazy Load Pages
const About = lazy(() => import('./pages/About/About'))
const Courses = lazy(() => import('./pages/Courses/Courses'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const SignIn = lazy(() => import('./components/auth/SignIn/SignIn'))
const SignUp = lazy(() => import('./components/auth/SignUp/SignUp'))
const PrivacyPolicy = lazy(() => import('./components/legal/PrivacyPolicy/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./components/legal/TermsAndConditions/TermsAndConditions'))
const PricingRefundPolicy = lazy(() => import('./components/legal/PricingRefundPolicy/PricingRefundPolicy'))

// Admin Pages
const AdminLogin = lazy(() => import('./pages/Admin/AdminLogin'))
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'))
const Inquiries = lazy(() => import('./pages/Admin/Inquiries'))

// Student Pages
const StudentDashboard = lazy(() => import('./pages/Student/StudentDashboard'))

const Home = () => (
  <>
    <HeroSection />
    <OurCourseSection />
    <Companies />
    <AchievementSection />
    <Section4 />
    <Section5 />
    <Section8 />
  </>
)

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/student') || location.pathname.startsWith('/admin');

  return (
    <div className="app">
      {!isDashboard && <Navbar />}
      <Suspense fallback={<div className="loading-placeholder" style={{ minHeight: '100vh', background: '#000' }}></div>}>
        {children}
      </Suspense>
      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/pricing-refund-policy" element={<PricingRefundPolicy />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/inquiries" element={<Inquiries />} />

          {/* Student Routes */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<Navigate to="/student/dashboard" replace />} />
            <Route path="dashboard" element={<StudentDashboard />} />
          </Route>
        </Routes>
      </LayoutWrapper>
    </Router>
  )
}

export default App

