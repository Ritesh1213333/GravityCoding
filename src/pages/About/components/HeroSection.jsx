import React from 'react';
import DarkVeil from './DarkVeil';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="about-hero-section">
      <div className="hero-background">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <div className="hero-container">
        <div className="protocol-tab">
          INITIATING PROTOCOL // GRAVITY FORGE
        </div>
        
        <h1 className="hero-title">
          <div className="title-line">
            <span className="title-solid">THE</span>{" "}
            <span className="title-outline">KINETIC</span>
          </div>
          <div className="title-line">
            <span className="title-solid">REVOLUTION</span>
          </div>
        </h1>
        
        <div className="hero-footer">
          <p className="hero-description">
            Gravity Coding is a high-performance engine for the next<br/>
            generation of digital architects. We don't just teach code; we<br/>
            accelerate the evolution of the human developer through<br/>
            refined intensity.
          </p>
          <div className="line-connector"></div>
          <div className="scroll-btn-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
