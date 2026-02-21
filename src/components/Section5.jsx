import { useState } from 'react'
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
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="18" height="18" rx="9" fill="#F24E1E"/>
        <rect x="26" y="4" width="18" height="18" rx="9" fill="#FF7262"/>
        <rect x="4" y="26" width="18" height="18" rx="5" fill="#0ACF83"/>
        <circle cx="35" cy="24" r="9" fill="#1ABCFE"/>
        <rect x="14" y="4" width="8" height="18" rx="0" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    label: 'React JS',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="4.5" fill="#61DAFB"/>
        <ellipse cx="24" cy="24" rx="21" ry="7.5" stroke="#61DAFB" strokeWidth="2" fill="none"/>
        <ellipse cx="24" cy="24" rx="21" ry="7.5" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="21" ry="7.5" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 24 24)"/>
      </svg>
    ),
  },
  {
    label: 'Bootstrap',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="10" fill="#7952B3"/>
        <path d="M15 13h10.5c2.5 0 4.5.6 5.8 1.7 1.3 1.1 1.9 2.6 1.9 4.4 0 1.3-.4 2.5-1.1 3.4-.7.9-1.7 1.5-2.9 1.9v.1c1.5.3 2.7 1 3.5 2 .8 1 1.2 2.3 1.2 3.8 0 2.1-.7 3.8-2.2 5-1.4 1.2-3.4 1.8-5.8 1.8H15V13zm4.5 9.5h5.5c1.5 0 2.6-.3 3.3-.9.7-.6 1.1-1.5 1.1-2.6 0-2.3-1.5-3.5-4.4-3.5h-5.5v7zm0 10h6c1.6 0 2.9-.4 3.7-1.1.8-.7 1.2-1.7 1.2-3 0-1.2-.4-2.2-1.3-2.9-.9-.7-2.2-1-3.9-1h-5.7v8z" fill="white"/>
      </svg>
    ),
  },
  {
    label: 'Node JS',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 3l19 10.5v21L24 45 5 34.5v-21L24 3z" fill="#43853D"/>
        <path d="M24 7l16 9v18L24 43 8 34V16L24 7z" fill="#3D7B35"/>
        <path d="M18 19v10.5l2 1v-4.5l4 2.5 4-2.5v4.5l2-1V19l-6 3.5L18 19z" fill="white"/>
        <path d="M30 19l-6 3.5-6-3.5" stroke="white" strokeWidth="1" fill="none"/>
      </svg>
    ),
  },
  {
    label: 'Next JS',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="21" fill="#000"/>
        <path d="M14 33V15h3.5L28 29V15h3v18h-3.5L17 19v14H14z" fill="white"/>
        <path d="M29 22l5 9h-3.5l-3.5-6.5L29 22z" fill="url(#ng)" opacity="0.7"/>
        <defs><linearGradient id="ng" x1="29" y1="22" x2="34" y2="31" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity="0"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: 'TypeScript',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="2" y="2" width="44" height="44" rx="4" fill="#3178C6"/>
        <path d="M27 25v-3h11v3h-4v14h-3V25h-4zM22 38c-.8.5-2 .8-3.3.8-3.5 0-5.7-2-5.7-5.8v-9h3v9c0 2 .9 3.1 2.8 3.1.8 0 1.6-.2 2.2-.6l1 2.5z" fill="white"/>
      </svg>
    ),
  },
]

const col2 = [
  {
    label: 'Adobe XD',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="2" y="2" width="44" height="44" rx="10" fill="#470137"/>
        <path d="M21 32.5l-2.5-6H13L10.5 32.5H7.5l7.5-18h3l7.5 18H21zm-8.5-8.5h5.5l-2.7-7.3L12.5 24zM36.5 32.5h-2.8l-.3-1.3c-1 1.1-2.3 1.6-3.7 1.6-3.8 0-6.2-2.8-6.2-6.6s2.4-6.7 6.2-6.7c1.3 0 2.5.4 3.3 1.2V16h3.5v16.5zm-6.5-2c1.8 0 3.2-1.5 3.2-4.7 0-3-1.4-4.6-3.2-4.6-2 0-3.2 1.6-3.2 4.6s1.2 4.7 3.2 4.7z" fill="#FF61F6"/>
      </svg>
    ),
  },
  {
    label: 'Express JS',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="2" y="2" width="44" height="44" rx="8" fill="#222"/>
        <text x="7" y="21" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10" fill="white" letterSpacing="-0.5">express</text>
        <text x="7" y="40" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="#68A063">js</text>
      </svg>
    ),
  },
  {
    label: 'JavaScript',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="2" y="2" width="44" height="44" rx="4" fill="#F0DB4F"/>
        <text x="6" y="40" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#323330">JS</text>
        <path d="M33 34c0 4-2.3 6-5.8 6-3.1 0-4.9-1.6-5.8-3.6l3.1-1.9c.6 1.1 1.1 2 2.3 2 1.2 0 1.9-.5 1.9-2.4V22h5.3v12zM38 33.5c0-3.5 2.7-5 6.5-5 .6 0 1.1 0 1.5.1v-3h-5v-3.5h8.5v10c-1.1.4-2.6.7-4 .7-2.7 0-4-.9-4-3v-.3h-.5z" fill="#323330"/>
      </svg>
    ),
  },
  {
    label: 'Figma',
    icon: (
      <svg viewBox="0 0 30 44" fill="none">
        <rect x="0" y="0" width="15" height="15" rx="7.5" fill="#F24E1E"/>
        <rect x="15" y="0" width="15" height="15" rx="7.5" fill="#FF7262"/>
        <rect x="0" y="15" width="15" height="15" rx="0" fill="#A259FF"/>
        <circle cx="22.5" cy="22.5" r="7.5" fill="#1ABCFE"/>
        <rect x="0" y="30" width="15" height="14" rx="7" fill="#0ACF83"/>
      </svg>
    ),
  },
  {
    label: 'Git',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M44.5 21.7L26.3 3.5c-1.4-1.4-3.6-1.4-5 0l-4.4 4.4 5.6 5.6c1.3-.4 2.8-.1 3.8 1 1 1 1.3 2.5.8 3.8l5.4 5.4c1.3-.5 2.8-.2 3.8.8 1.4 1.4 1.4 3.6 0 5-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1-1.1-1.1-1.4-2.7-.8-4l-5-5v13.2c.9.5 1.7 1.2 2.2 2.2.7 1.5.3 3.4-.8 4.5-1.4 1.4-3.6 1.4-5 0-1.4-1.4-1.4-3.6 0-5 .7-.7 1.7-1.1 2.6-1v-13c-.9 0-1.8-.3-2.6-1-1.1-1.1-1.4-2.7-.8-4L15.4 10 3.5 21.9c-1.4 1.4-1.4 3.6 0 5l18.2 18.2c1.4 1.4 3.6 1.4 5 0L44.5 26.7c1.4-1.4 1.4-3.6 0-5z" fill="#F05032"/>
      </svg>
    ),
  },
  {
    label: 'Python',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24.4 4C13.4 4 14.1 9 14.1 9v5.9h10.6v2H11S4.1 16.2 4.1 24c0 7.9 5.5 7.6 5.5 7.6H13v-3.7s-.2-5.5 5.4-5.5H29s5.2.1 5.2-5V10c0 0 .8-6-9.8-6zM18.7 7.2c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8z" fill="#3776AB"/>
        <path d="M23.6 44C34.6 44 33.9 39 33.9 39v-5.9H23.3v-2H37S43.9 31.8 43.9 24c0-7.9-5.5-7.6-5.5-7.6H35v3.7s.2 5.5-5.4 5.5H19s-5.2-.1-5.2 5v8.4c0 0-.8 6 9.8 6zm5.7-3.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" fill="#FFD43B"/>
      </svg>
    ),
  },
]

const col3 = [
  {
    label: 'CSS 3',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M6 4l3.6 40L24 48l14.4-4L42 4H6z" fill="#1572B6"/>
        <path d="M24 44.5l11.7-3.2 3.1-34.8H24V44.5z" fill="#33A9DC"/>
        <path d="M24 20.5h-6.3l-.5-5.5H24v-5H12.5l1.3 15.5H24v-5zM24 35v-5.3l-.1.1-5.3-1.4-.3-3.6h-5l.6 6.6 10 2.7V35z" fill="white"/>
        <path d="M24 20.5v5h5.6l-.5 6-5.1 1.4V38l10-2.7 1.5-15.8H24v1z" fill="#EBEBEB"/>
      </svg>
    ),
  },
  {
    label: 'MongoDB',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 3C24 3 11 19 11 29.5c0 7.2 5.8 13 13 13s13-5.8 13-13C37 19 24 3 24 3z" fill="#589636"/>
        <path d="M24 3v39.5c0 0 13-10.5 13-13C37 19 24 3 24 3z" fill="#4CAC31" opacity="0.7"/>
        <path d="M24 3v39.5c0 0-13-10.5-13-13C11 19 24 3 24 3z" fill="#41A247"/>
        <rect x="22.5" y="40" width="3" height="8" rx="1.5" fill="#41A247"/>
      </svg>
    ),
  },
  {
    label: 'HTML 5',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M6 4l3.6 40L24 48l14.4-4L42 4H6z" fill="#E34F26"/>
        <path d="M24 44.5l11.7-3.2 3.1-34.8H24V44.5z" fill="#EF652A"/>
        <path d="M24 20H17l-.5-5H24v-5H12.5l1.3 14.5H24V20zM24 35v-5.5l-5.3-1.4-.3-3.6H14l.7 7 9.3 2.5V35z" fill="white"/>
        <path d="M24 20v4.5h5.5l-.5 6-5 1.3V37l9.3-2.6L35 13H24v7z" fill="#EBEBEB"/>
      </svg>
    ),
  },
  {
    label: 'Docker',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M46.5 21c-1.2-5.5-6.5-7.5-6.5-7.5-1.2-7-7-9-7-9H14v18h16c2.5 0 4 1 4 1s.5 1-.5 3.5c-1 2.5-5 3.5-5 3.5H6.5C7 34 8 38 11 39.5l2 1H35c10 0 12-12 11.5-19.5z" fill="#2496ED"/>
        <rect x="8" y="17" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
        <rect x="15" y="17" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
        <rect x="22" y="17" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
        <rect x="15" y="11" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
        <rect x="22" y="11" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
      </svg>
    ),
  },
  {
    label: 'Tailwind',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 10c-8 0-13 4-15 12 3-4 6.5-5.5 10.5-4 2.3.6 3.9 2.3 5.7 4.2C27.8 25 31.5 28 37 28c8 0 13-4 15-12-3 4-6.5 5.5-10.5 4-2.3-.6-3.9-2.3-5.7-4.2C33.2 13 29.5 10 24 10zM9 24c-8 0-13 4-15 12 3-4 6.5-5.5 10.5-4 2.3.6 3.9 2.3 5.7 4.2C12.8 39 16.5 42 22 42c8 0 13-4 15-12-3 4-6.5 5.5-10.5 4-2.3-.6-3.9-2.3-5.7-4.2C18.2 27 14.5 24 9 24z" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    label: 'Vue JS',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 42L2 6h9l13 22L37 6h9L24 42z" fill="#41B883"/>
        <path d="M24 42L13 24l-2-4h7l6 10 6-10h7l-2 4L24 42z" fill="#34495E"/>
        <path d="M24 34L17 22h5l2 4 2-4h5L24 34z" fill="#41B883" opacity="0.5"/>
      </svg>
    ),
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
