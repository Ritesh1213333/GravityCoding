import React from 'react';
import './About.css';
import HeroSection from './components/HeroSection';

import CoreDirectives from './components/CoreDirectives';
import ImpactStats from './components/ImpactStats';
import TheArchitects from './components/TheArchitects';
import CtaSection from './components/CtaSection';

const About = () => {
  return (
    <div className="about-page">
      {/* SECTION 1: HERO SECTION */}
      <HeroSection />

      {/* SECTION 2: CORE DIRECTIVES */}
      <CoreDirectives />

      {/* SECTION 3: IMPACT STATS */}
      <ImpactStats />

      {/* SECTION 4: THE ARCHITECTS */}
      <TheArchitects />

      {/* SECTION 5: CTA */}
      <CtaSection />
    </div>
  );
};

export default About;
