'use client'

export default function GetStarted() {
  return (
    <section 
      id="getstarted" 
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
          ПРОСТО НАЧНИТЕ
        </h2>

        {/* Список из 4 пунктов */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: '3rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #5AA5C5 0%, #2DD2D8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 700,
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              1
            </div>
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 500,
                margin: 0,
              }}
            >
              Запустите приложение
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #5AA5C5 0%, #2DD2D8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 700,
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              2
            </div>
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 500,
                margin: 0,
              }}
            >
              Наденьте наушники
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #5AA5C5 0%, #2DD2D8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 700,
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              3
            </div>
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 500,
                margin: 0,
              }}
            >
              Включите упражнение
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #5AA5C5 0%, #2DD2D8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 700,
                fontSize: '1.2rem',
                flexShrink: 0,
              }}
            >
              4
            </div>
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 500,
                margin: 0,
              }}
            >
              Играйте
            </p>
          </div>
        </div>

        {/* Текст про Pocket */}
        <div
          style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              color: 'white',
              fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              fontWeight: 600,
              marginBottom: '1rem',
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: '#ffd700' }}>Pocket</span> (наш маскот) проведет вас к мастерству.
          </p>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Просто следуйте за ним.
          </p>
        </div>
      </div>
    </section>
  )
}

