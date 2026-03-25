import React from 'react';
import BorderGlow from './BorderGlow';
import './CoreDirectives.css';

const CoreDirectives = () => {
  return (
    <section className="core-directives-section">
      <div className="core-directives-container">
        {/* HEADER */}
        <div className="directives-header">
          <h2 className="directives-title">CORE DIRECTIVES</h2>
          <div className="directives-sub-header">
            <span className="sub-title-left">SYSTEM ARCHITECTURE & LEARNING PHILOSOPHY</span>
            <span className="sub-title-right">[ STATUS: OPERATIONAL ]</span>
          </div>
        </div>

        {/* GRID */}
        <div className="directives-grid-custom">
          
          {/* CARD 1 - Span 5 */}
          <BorderGlow className="directive-card-custom card-span-5">
            <div className="card-bg-number">01</div>
            <div className="card-content">
              <div className="card-icon blue-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="card-title">VELOCITY OVER THEORY</h3>
              <p className="card-text">
                Execution beats explanation. We train developers to build fast, iterate faster, and ship real-world solutions — not just memorize concepts.
              </p>
            </div>
          </BorderGlow>

          {/* CARD 2 - Span 5 */}
          <BorderGlow className="directive-card-custom card-span-5">
            <div className="card-bg-number">02</div>
            <div className="card-content">
              <div className="card-icon blue-icon outline-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
              <h3 className="card-title">NEURAL NETWORKING</h3>
              <p className="card-text">
                Growth is exponential when minds connect. We create high-performance communities where developers collaborate, solve problems, and evolve together.
              </p>
            </div>
          </BorderGlow>

          {/* CARD 3 - Span 4 */}
          <BorderGlow className="directive-card-custom card-span-4">
            <div className="card-bg-number">03</div>
            <div className="card-content">
              <div className="card-icon blue-icon outline-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </div>
              <h3 className="card-title">TERMINAL MASTERY</h3>
              <p className="card-text">
                No shortcuts. No surface-level learning. We go deep into fundamentals — from logic to system-level understanding — building developers who truly understand what they write.
              </p>
            </div>
          </BorderGlow>

          {/* CARD 4 - Span 6 */}
          <BorderGlow className="directive-card-custom card-span-6 has-image">
            <div className="card-bg-number">04</div>
            <div className="card-content card-content-left">
              <div className="card-icon blue-icon outline-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="card-title">FUTURE PROOFING</h3>
              <p className="card-text">
                Technology evolves. We evolve faster. Our ecosystem continuously adapts to modern stacks, AI-driven workflows, and industry demands — keeping you ahead of the curve.
              </p>
            </div>
            
            <div className="card-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1737265320236-a4871e9d9df2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="3D Asset" 
                className="cube-3d-img" 
              />
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};

export default CoreDirectives;
