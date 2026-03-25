import React, { Suspense, lazy } from 'react';
import './About.css';
import HeroSection from './components/HeroSection';

const CoreDirectives = lazy(() => import('./components/CoreDirectives'));
const ImpactStats = lazy(() => import('./components/ImpactStats'));
const TheArchitects = lazy(() => import('./components/TheArchitects'));
const CtaSection = lazy(() => import('./components/CtaSection'));

const About = () => {
  return (
    <div className="about-page">
      {/* SECTION 1: HERO SECTION */}
      <HeroSection />

      <Suspense fallback={<div className="section-placeholder">Loading performance data...</div>}>
        {/* SECTION 2: CORE DIRECTIVES */}
        <CoreDirectives />

        {/* SECTION 3: IMPACT STATS */}
        <ImpactStats />

        {/* SECTION 4: THE ARCHITECTS */}
        <TheArchitects />

        {/* SECTION 5: CTA */}
        <CtaSection />
      </Suspense>
    </div>
  );
};

export default About;
