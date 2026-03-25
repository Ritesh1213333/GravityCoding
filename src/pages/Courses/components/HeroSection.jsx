import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="crypto-hero-section">
      {/* Background Ambience */}
      <div className="bg-circle center-glow"></div>
      <div className="bg-circle outline-circle left-circle"></div>
      <div className="bg-circle outline-circle right-circle"></div>

      <div className="crypto-hero-container">
        
        {/* TOP ROW: Stats & Main Text */}
        <div className="crypto-hero-main-row">
          
          {/* Left Stats */}
          <div className="side-stats">
            <div className="stat-item">
              <h3>10k+</h3>
              <p>Active students</p>
            </div>
            <div className="stat-line"></div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Placement rate</p>
            </div>
          </div>

          {/* Center Text */}
          <div className="center-text-content">
            <p className="tiny-top-text">
              Intensive curriculum designed to forge elite developers. <br />
              Accelerate your tech career with our premium courses.
            </p>
            
            <h1 className="main-headline">
              Next generation of <span className="icon-bolt">⚡</span> <span className="text-accent">coding</span> and<br/>
              <span className="icon-hash">#</span> <span className="text-accent">engineering</span>
            </h1>
            
            <div className="center-btn-wrapper">
              <button className="center-arrow-btn">
                <ArrowUpRight strokeWidth={2} size={20} />
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="side-stats right-align">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Expert mentors</p>
            </div>
            <div className="stat-line"></div>
            <div className="stat-item">
              <h3>4.9/5</h3>
              <p>Average rating</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
