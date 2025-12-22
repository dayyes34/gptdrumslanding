export default function CTA() {
  return (
    <section 
      id="cta"
      style={{
        padding: '60px 20px',
        background: '#000427',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            color: 'white',
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '2rem',
            textTransform: 'uppercase',
          }}
        >
          Хватит мучиться!
        </h2>
      </div>
    </section>
  )
}


