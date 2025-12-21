'use client'

export default function AccelerateProgress() {
  return (
    <section 
      id="accelerate-progress" 
      style={{ 
        padding: '60px 20px',
        background: '#000427',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Заголовок */}
        <h2
          style={{
            color: 'white',
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '3rem',
            textAlign: 'center',
          }}
        >
          Как мы ускоряем прогресс
        </h2>

        {/* Контент секции - можно добавить позже */}
        <div
          style={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
          }}
        >
          {/* Контент будет добавлен позже */}
        </div>
      </div>
    </section>
  )
}

