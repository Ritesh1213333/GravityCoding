<<<<<<< HEAD
import React, { Suspense, lazy } from 'react'
=======
import React from 'react'
>>>>>>> 05383c0c5308d42748e02a12870cfba212f2b27a
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

import HeroSection from './components/home/HeroSection/HeroSection'
import OurCourseSection from './components/home/OurCourseSection/OurCourseSection'

<<<<<<< HEAD
// Lazy Load Home Components
const Companies = lazy(() => import('./components/home/Companies/Companies'))
const AchievementSection = lazy(() => import('./components/home/AchievementSection/AchievementSection'))
const Section4 = lazy(() => import('./components/home/Section4/Section4'))
const Section5 = lazy(() => import('./components/home/Section5/Section5'))
const Section8 = lazy(() => import('./components/home/Section8/Section8'))

// Lazy Load Pages
const About = lazy(() => import('./pages/About/About'))
const SignIn = lazy(() => import('./components/auth/SignIn/SignIn'))
const SignUp = lazy(() => import('./components/auth/SignUp/SignUp'))
const PrivacyPolicy = lazy(() => import('./components/legal/PrivacyPolicy/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./components/legal/TermsAndConditions/TermsAndConditions'))
const PricingRefundPolicy = lazy(() => import('./components/legal/PricingRefundPolicy/PricingRefundPolicy'))
=======
import SignIn from './components/auth/SignIn/SignIn'
import SignUp from './components/auth/SignUp/SignUp'
import About from './pages/About/About'
import Courses from './pages/Courses/Courses'
import Contact from './pages/Contact/Contact'
>>>>>>> 05383c0c5308d42748e02a12870cfba212f2b27a

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

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
<<<<<<< HEAD
        <Suspense fallback={<div className="loading-placeholder" style={{ minHeight: '100vh', background: '#000' }}></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/pricing-refund-policy" element={<PricingRefundPolicy />} />
          </Routes>
        </Suspense>
=======
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
        </Routes>
>>>>>>> 05383c0c5308d42748e02a12870cfba212f2b27a
        <Footer />
      </div>
    </Router>
  )
}

export default App
