'use client'

import Image from 'next/image'

export default function WhyGptDrums() {
  return (
    <section id="whygptdrums" style={{ padding: '40px 20px', position: 'relative' }}>
      {/* Фон секции - изображение whybg.webp */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <Image
          src="/whybg.webp"
          alt="Background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
        />
      </div>
      
      {/* SVG волна скрыта */}
      <div
        style={{
          display: 'none',
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="hero-wave-svg"
          style={{
            width: '100%',
            height: '300px',
            display: 'block',
            filter: 'drop-shadow(0 -8px 16px rgba(0, 0, 0, 0.5))',
          }}
        >
          <defs>
            <linearGradient id="waveGradientWhygptdrums" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255)" />
              <stop offset="29%" stopColor="#90d2f5" />
              <stop offset="45%" stopColor="rgba(129, 190, 222)" />
              <stop offset="55%" stopColor="#81BEDE" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C240,65 480,35 720,50 C960,65 1200,35 1440,50 L1440,120 L0,120 Z"
            fill="url(#waveGradientWhygptdrums)"
          />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 3, paddingTop: '0px' }}>
        <h2
          style={{
            color: 'white',
            fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '2rem',
            textAlign: 'left',
          }}
        >
          Зачем тебе gptDrums?
        </h2>

        <p
          style={{
            color: 'white',
            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
          }}
        >
          Если ты хочешь:
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              color: 'white',
              fontSize: 'clamp(1rem, 4vw, 1.2rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              lineHeight: 1.6,
            }}
          >
            <span style={{ fontSize: '1.2em', flexShrink: 0 }}>✅</span>
            <span>Стать барабанщиком, который может сыграть ВСЕ</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              color: 'white',
              fontSize: 'clamp(1rem, 4vw, 1.2rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              lineHeight: 1.6,
            }}
          >
            <span style={{ fontSize: '1.2em', flexShrink: 0 }}>✅</span>
            <span>Свободно импровизировать</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              color: 'white',
              fontSize: 'clamp(1rem, 4vw, 1.2rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              lineHeight: 1.6,
            }}
          >
            <span style={{ fontSize: '1.2em', flexShrink: 0 }}>✅</span>
            <span>Прокачать мозг и конечности до PRO-уровня</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              color: 'white',
              fontSize: 'clamp(1rem, 4vw, 1.2rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              lineHeight: 1.6,
            }}
          >
            <span style={{ fontSize: '1.2em', flexShrink: 0 }}>✅</span>
            <span>Развиваться равномерно и сбалансированно</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              color: 'white',
              fontSize: 'clamp(1rem, 4vw, 1.2rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              lineHeight: 1.6,
            }}
          >
            <span style={{ fontSize: '1.2em', flexShrink: 0 }}>✅</span>
            <span>Сделать все это быстро и без напряжения</span>
          </div>
        </div>

        <p
          style={{
            color: 'white',
            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            lineHeight: 1.6,
            fontWeight: 600,
          }}
        >
          Тогда...
        </p>
      </div>
    </section>
  )
}
