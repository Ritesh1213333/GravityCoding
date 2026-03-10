import './Companies.css'

const logos = [
  { alt: 'TCS',     src: '/companies/tcs.png', large: true },
  { alt: 'Infosys', src: '/companies/infosys.svg' },
  { alt: 'Flipkart', src: '/companies/flipkart.svg' },
  { alt: 'Zomato',  src: '/companies/zomato.svg' },
  { alt: 'Stripe',  src: '/companies/stripe.svg' },
]

function MarqueeTrack({ items }) {
  const doubled = [...items, ...items]

  return (
    <div className="comp-row-wrap">
      <div className="comp-row-track">
        {doubled.map(({ alt, src, large }, i) => (
          <div key={i} className={`comp-logo-item${large ? ' comp-logo-item--tcs' : ''}`}>
            <img src={src} alt={alt} className="comp-logo-icon" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Companies() {
  return (
    <section className="companies-section">
      <MarqueeTrack items={logos} />
    </section>
  )
}
