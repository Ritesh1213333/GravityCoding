import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import './TheArchitects.css';

const TheArchitects = () => {
  const team = [
    {
      name: "JAXSON VANE",
      role: "FOUNDER // SYSTEM LEAD",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=400&auto=format&fit=crop",
      isIllustration: true,

    },
    {
      name: "ARIA KAGE",
      role: "CORE PROTOCOL ARCHITECT",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      isIllustration: false,

    },
    {
      name: "LEO STERLING",
      role: "DEPLOYMENT STRATEGIST",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=400&auto=format&fit=crop",
      isIllustration: true,

    },
    {
      name: "SLOANE REYES",
      role: "EXPERIENCE LEAD",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
      isIllustration: true,

    }
  ];

  return (
    <section className="architects-section">
      <div className="architects-container">
        {/* HEADER */}
        <div className="architects-header-row">
          <div className="architects-title-col">
            <div className="team-overview-badge">
              [ TEAM_OVERVIEW ]
            </div>
            <h2 className="architects-title">
              THE<br />
              ARCHITECTS
            </h2>
            <p className="architects-desc">
              Meet the digital visionaries and system architects pushing the<br />
              boundaries of code education into the stratosphere.
            </p>
          </div>
          <div className="architects-line-col">
            <div className="architects-line"></div>
          </div>
        </div>

        {/* TEAM GRID */}
        <div className="architects-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <div className={`team-image-wrapper ${member.isIllustration ? 'is-illustration' : ''}`}>
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-socials">
                  <Linkedin className="social-icon" />
                  <Twitter className="social-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheArchitects;
