'use client'

export default function Pricing() {
  return (
    <section 
      id="pricing" 
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
            textTransform: 'uppercase',
          }}
        >
          СТОИМОСТЬ
        </h2>

        {/* Основной текст */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              color: 'white',
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              fontWeight: 600,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Год в приложении = 2-3 урока у репетитора
          </p>
        </div>

        {/* Сравнение цен */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          {/* Приложение */}
          <div
            style={{
              flex: '1 1 0',
              minWidth: '250px',
              maxWidth: '400px',
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(90, 165, 197, 0.2) 0%, rgba(45, 210, 216, 0.2) 100%)',
              border: '2px solid #5AA5C5',
              borderRadius: '16px',
              boxShadow: '0 0 30px rgba(90, 165, 197, 0.4)',
            }}
          >
            <p
              style={{
                color: '#5AA5C5',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
                marginBottom: '1rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Приложение
            </p>
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 800,
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              299₽<span style={{ fontSize: '0.5em', fontWeight: 400 }}>/месяц</span>
            </p>
          </div>

          {/* VS */}
          <div
            style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              fontWeight: 700,
            }}
          >
            VS
          </div>

          {/* Репетитор */}
          <div
            style={{
              flex: '1 1 0',
              minWidth: '250px',
              maxWidth: '400px',
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(255, 74, 80, 0.2) 0%, rgba(255, 140, 66, 0.2) 100%)',
              border: '2px solid #ff4a50',
              borderRadius: '16px',
              boxShadow: '0 0 30px rgba(255, 74, 80, 0.4)',
            }}
          >
            <p
              style={{
                color: '#ff4a50',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
                marginBottom: '1rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Репетитор
            </p>
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 800,
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              5000₽<span style={{ fontSize: '0.5em', fontWeight: 400 }}>/урок</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

