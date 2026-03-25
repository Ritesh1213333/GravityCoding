import React, { useState } from 'react'
import './Section5.css'

const countries = [
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', flag: '🇰🇷', name: 'South Korea' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: '+880', flag: '🇧🇩', name: 'Bangladesh' },
  { code: '+94', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: '+977', flag: '🇳🇵', name: 'Nepal' },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+62', flag: '🇮🇩', name: 'Indonesia' },
  { code: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: '+84', flag: '🇻🇳', name: 'Vietnam' },
  { code: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: '+98', flag: '🇮🇷', name: 'Iran' },
  { code: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: '+972', flag: '🇮🇱', name: 'Israel' },
  { code: '+46', flag: '🇸🇪', name: 'Sweden' },
  { code: '+47', flag: '🇳🇴', name: 'Norway' },
  { code: '+45', flag: '🇩🇰', name: 'Denmark' },
  { code: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: '+64', flag: '🇳🇿', name: 'New Zealand' },
]

const col1 = [
  {
    label: 'UI/UX',
    icon: <img src="/Logos/figma-original.svg" alt="UI/UX" />,
  },
  {
    label: 'React JS',
    icon: <img src="/Logos/react-original-wordmark.svg" alt="React JS" />,
  },
  {
    label: 'Bootstrap',
    icon: <img src="/Logos/bootstrap.svg" alt="Bootstrap" />,
  },
  {
    label: 'Node JS',
    icon: <img src="/Logos/nodejs-original.svg" alt="Node JS" />,
  },
  {
    label: 'Next JS',
    icon: <img src="/Logos/nextjs-original.svg" alt="Next JS" />,
  },
  {
    label: 'TypeScript',
    icon: <img src="/Logos/typescript-original.svg" alt="TypeScript" />,
  },
]

const col2 = [
  {
    label: 'WordPress',
    icon: <img src="/Logos/wordpress-plain.svg" alt="WordPress" />,
  },
  {
    label: 'Express JS',
    icon: <img src="/Logos/expressjs-dark.svg" alt="Express JS" />,
  },
  {
    label: 'JavaScript',
    icon: <img src="/Logos/javascript-original.svg" alt="JavaScript" />,
  },
  {
    label: 'Figma',
    icon: <img src="/Logos/figma-original.svg" alt="Figma" />,
  },
  {
    label: 'Git',
    icon: <img src="/Logos/git-original.svg" alt="Git" />,
  },
  {
    // label: 'Python',
    icon: <img src="/Logos/python-original-wordmark.svg" alt="Python" style={{ transform: 'scale(1.4)' }} />,
  },
]

const col3 = [
  {
    label: 'CSS 3',
    icon: <img src="/Logos/css3-original.svg" alt="CSS 3" />,
  },
  {
    // label: 'MongoDB',
    icon: <img src="/Logos/mongodb-plain-wordmark.svg" alt="MongoDB" style={{ transform: 'scale(1.4)' }} />,
  },
  {
    label: 'HTML 5',
    icon: <img src="/Logos/html5-plain-wordmark.svg" alt="HTML 5" />,
  },
  {
    // label: 'Docker',
    icon: <img src="/Logos/docker-original-wordmark.svg" alt="Docker" style={{ transform: 'scale(1.4)' }} />,
  },
  {
    label: 'Tailwind',
    icon: <img src="/Logos/tailwindcss-original.svg" alt="Tailwind CSS" />,
  },
  {
    label: 'Vue JS',
    icon: <img src="/Logos/vuejs-original.svg" alt="Vue JS" />,
  },
]

function TechCard({ label, icon }) {
  return (
    <div className="section5-tech-card">
      <div className="section5-tech-icon">{icon}</div>
      <span className="section5-tech-label">{label}</span>
    </div>
  )
}

function ScrollCol({ cards, direction }) {
  const doubled = [...cards, ...cards]
  return (
    <div className="section5-col-wrap">
      <div className={`section5-col-track section5-col-${direction}`}>
        {doubled.map((tech, i) => (
          <TechCard key={i} label={tech.label} icon={tech.icon} />
        ))}
      </div>
    </div>
  )
}

function Section5() {
  const [selectedCode, setSelectedCode] = useState('+91')

  return (
    <section className="section5">
      <div className="section5-bg">
        <div className="section5-glow" />
      </div>
      <div className="section5-inner">

        <div className="section5-left">
          <span className="section5-badge">
            <span className="section5-badge-dot" />
            Free Registration · Limited Seats
          </span>

          <h2 className="section5-heading">
            JOIN FREE <span className="section5-highlight">LIVE DEMO</span><br />SESSION NOW
          </h2>
          <p className="section5-sub">
            Welcome to our courses! Join us for exploring code, gain skills and achieve success.
          </p>

          <form className="section5-form" onSubmit={e => e.preventDefault()}>
            <div className="section5-field">
              <span className="section5-field-icon">
                <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H3z"/></svg>
              </span>
              <input type="text" placeholder="Your Full Name" className="section5-input" />
            </div>
            <div className="section5-phone-unified">
              <span className="section5-phone-icon-wrap">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </span>
              <span className="section5-phone-divider" />
              <div className="section5-code-wrap">
                <span className="section5-code-display">{selectedCode}</span>
                <svg className="section5-code-arrow" viewBox="0 0 10 6" fill="currentColor"><path d="M0 0l5 6 5-6z"/></svg>
                <select
                  className="section5-country-select"
                  value={selectedCode}
                  onChange={e => setSelectedCode(e.target.value)}
                >
                  {countries.map((c, i) => (
                    <option key={i} value={c.code}>{c.flag} {c.name} ({c.code})</option>
                  ))}
                </select>
              </div>
              <span className="section5-phone-divider" />
              <input type="tel" placeholder="Phone Number" className="section5-phone-input" />
            </div>
            <div className="section5-field">
              <span className="section5-field-icon">
                <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 8.13V11a1 1 0 00.553.894l4 2a1 1 0 00.894 0l4-2A1 1 0 0015 11V8.13l2.394-1.21A1 1 0 0018 6l-7-4zM5 10.27V11l5 2.5 5-2.5v-.73L11 12a1 1 0 01-.894 0L5 10.27z"/></svg>
              </span>
              <input type="text" placeholder="Your Education" className="section5-input" />
            </div>

            <button type="submit" className="section5-btn-submit">
              Register for Free
              <svg className="section5-btn-arrow" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            </button>
          </form>

          <div className="section5-trust">
            <span className="section5-trust-item">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/></svg>
              No credit card
            </span>
            <span className="section5-trust-item">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/></svg>
              100% Free
            </span>
            <span className="section5-trust-item">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"/></svg>
              Instant confirm
            </span>
          </div>
        </div>

        <div className="section5-right">
          <div className="section5-cols">
            <ScrollCol cards={col1} direction="up" />
            <ScrollCol cards={col2} direction="down" />
            <ScrollCol cards={col3} direction="up" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section5
