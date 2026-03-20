import React from 'react';
import { ArrowRight } from 'lucide-react';
import LightRays from './LightRays';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-ambient-glow"></div>
      
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />

      <div className="cta-container">
        <h2 className="cta-title">
          <span className="cta-title-light">READY FOR</span>
          <span className="cta-title-accent">OVERDRIVE?</span>
        </h2>
        <button className="cta-button">
          Join Now <ArrowRight className="cta-button-arrow" size={22} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
