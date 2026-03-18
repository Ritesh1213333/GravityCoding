import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import OurCourseSection from './components/OurCourseSection'
import Companies from './components/Companies'
import AchievementSection from './components/AchievementSection'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section8 from './components/Section8'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
