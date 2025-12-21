'use client'

import Image from 'next/image'

export default function AI() {
  return (
    <section 
      id="ai" 
      style={{ 
        position: 'relative',
        padding: '60px 20px',
        minHeight: '100vh',
        backgroundImage: 'url(/aibg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Затемнение фона для читаемости */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
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
          AI-система ведет тебя день за днем
        </h2>

        {/* 3 неоновые плашки в ряд */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Голубая обводка */}
          <div
            style={{
              flex: '1 1 0',
              minWidth: '200px',
              maxWidth: '300px',
              padding: '1.5rem',
              border: '2px solid #5AA5C5',
              borderRadius: '12px',
              background: 'rgba(90, 165, 197, 0.1)',
              boxShadow: '0 0 20px rgba(90, 165, 197, 0.5)',
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
                textAlign: 'center',
                margin: 0,
              }}
            >
              Подходит любому уровню
            </p>
          </div>

          {/* Зеленая обводка */}
          <div
            style={{
              flex: '1 1 0',
              minWidth: '200px',
              maxWidth: '300px',
              padding: '1.5rem',
              border: '2px solid #00ff00',
              borderRadius: '12px',
              background: 'rgba(0, 255, 0, 0.1)',
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
                textAlign: 'center',
                margin: 0,
              }}
            >
              Гарантирует быстрые результаты
            </p>
          </div>

          {/* Оранжевая обводка */}
          <div
            style={{
              flex: '1 1 0',
              minWidth: '200px',
              maxWidth: '300px',
              padding: '1.5rem',
              border: '2px solid #ff8c42',
              borderRadius: '12px',
              background: 'rgba(255, 140, 66, 0.1)',
              boxShadow: '0 0 20px rgba(255, 140, 66, 0.5)',
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
                textAlign: 'center',
                margin: 0,
              }}
            >
              Персональный путь развития
            </p>
          </div>
        </div>

        {/* Подзаголовок */}
        <h3
          style={{
            color: 'white',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '2rem',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          КАК РАБОТАЕТ
        </h3>

        {/* 4 контейнера в ряд */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {/* Контейнер 1 */}
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 500,
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Мгновенная практика без поиска
            </p>
          </div>

          {/* Контейнер 2 */}
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 500,
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Анализ и баланс всех навыков
            </p>
          </div>

          {/* Контейнер 3 */}
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 500,
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Помнит о каждой сессии
            </p>
          </div>

          {/* Контейнер 4 */}
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 500,
                textAlign: 'center',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              5 минут = видимый прогресс
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
