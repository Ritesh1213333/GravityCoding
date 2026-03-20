import React from 'react';
import './ImpactStats.css';

const ImpactStats = () => {
  return (
    <section className="impact-stats-section">
      <div className="impact-stats-container">
        <div className="stats-grid">
          
          {/* STAT 1 */}
          <div className="stat-item">
            <div className="stat-value color-blue-dark">
              850<span className="stat-unit">+</span>
            </div>
            <h4 className="stat-title">ARCHITECTS DEPLOYED</h4>
            <p className="stat-description">
              Successfully integrated into<br />
              elite engineering teams.
            </p>
          </div>

          {/* STAT 2 */}
          <div className="stat-item">
            <div className="stat-value color-blue-light">
              12<span className="stat-unit">ms</span>
            </div>
            <h4 className="stat-title">RESPONSE VELOCITY</h4>
            <p className="stat-description">
              Average time from problem<br />
              identification to resolution.
            </p>
          </div>

          {/* STAT 3 */}
          <div className="stat-item">
            <div className="stat-value color-white">
              100<span className="stat-unit">%</span>
            </div>
            <h4 className="stat-title">MISSION SUCCESS</h4>
            <p className="stat-description">
              Curriculum mastery and<br />
              internship placement rate.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
