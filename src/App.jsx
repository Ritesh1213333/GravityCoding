import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar'
import HeroSection from './components/home/HeroSection/HeroSection'
import OurCourseSection from './components/home/OurCourseSection/OurCourseSection'
import Companies from './components/home/Companies/Companies'
import AchievementSection from './components/home/AchievementSection/AchievementSection'
import Section4 from './components/home/Section4/Section4'
import Section5 from './components/home/Section5/Section5'
import Section8 from './components/home/Section8/Section8'
import Footer from './components/layout/Footer/Footer'
import PrivacyPolicy from './components/legal/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './components/legal/TermsAndConditions/TermsAndConditions'
import PricingRefundPolicy from './components/legal/PricingRefundPolicy/PricingRefundPolicy'

import SignIn from './components/auth/SignIn/SignIn'
import SignUp from './components/auth/SignUp/SignUp'
import About from './pages/About/About'

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/pricing-refund-policy" element={<PricingRefundPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
