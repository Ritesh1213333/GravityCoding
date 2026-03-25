import React from 'react';
import CountUp from './CountUp';
import './ImpactStats.css';

const ImpactStats = () => {
  return (
    <section className="impact-stats-section">
      <div className="impact-stats-container">
        <div className="stats-grid">
          
          {/* STAT 1 */}
          <div className="stat-item">
            <div className="stat-value color-blue-dark">
              <CountUp end={850} duration={1000} />
              <span className="stat-unit">+</span>
            </div>
            <h4 className="stat-title">ARCHITECTS DEPLOYED</h4>
            <p className="stat-description">
              Developers trained and deployed into real-world engineering environments.
            </p>
          </div>

          {/* STAT 2 */}
          <div className="stat-item">
            <div className="stat-value color-blue-light">
              <CountUp end={12} duration={800} />
              <span className="stat-unit">ms</span>
            </div>
            <h4 className="stat-title">RESPONSE VELOCITY</h4>
            <p className="stat-description">
              Fast problem solving and high-speed execution mindset.
            </p>
          </div>

          {/* STAT 3 */}
          <div className="stat-item">
            <div className="stat-value color-white">
              <CountUp end={100} duration={1200} />
              <span className="stat-unit">%</span>
            </div>
            <h4 className="stat-title">MISSION SUCCESS</h4>
            <p className="stat-description">
              Students achieve real-world skills and project-based mastery.
            </p>
          </div>

        </div>

        {/* SECTION TAGLINE */}
        <div className="stats-tagline">
          Performance isn’t promised — it’s engineered.
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
