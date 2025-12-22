'use client'

import Image from 'next/image'

const points = [
  'Стать барабанщиком, который может сыграть ВСЕ',
  'Свободно импровизировать',
  'Прокачать мозг и конечности до PRO-уровня',
  'Развиваться равномерно и сбалансированно',
  'Сделать все это быстро и без напряжения',
]

export default function WhyGptDrums() {
  return (
    <section id="whygptdrums" style={{ padding: '20px 20px 40px 20px', position: 'relative' }}>
      {/* Фоновое изображение whybgg.webp */}
      <div
        style={{
          position: 'absolute',
          top: -5,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <Image
          src="/whybgg.webp"
          alt="whybg"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
        />
        {/* Плавный фейд в #010425 сверху */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '10%',
            background: 'linear-gradient(to bottom, #03062A 0%, rgba(1, 4, 37, 0.1) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
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
            color: '#ff9d00',
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '2rem',
            textAlign: 'center',
           
          }}
        >
          Зачем тебе <br />gptDrums?
        </h2>

        <p
          style={{
            color: '#ff9d00',
            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            lineHeight: 2.6,
            marginBottom: '1.75rem',
          }}
        >
          Если ты хочешь:
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            marginBottom: '2rem',
          }}
        >
          {points.map((point, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '0.75rem',
              }}
            >
              <Image
                src="/tick.webp"
                alt="Tick"
                width={80}
                height={80}
                style={{
                  width: 'auto',
                  height: 'clamp(55px, 9vw, 80px)',
                  objectFit: 'contain',
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src="/whypoints.webp"
                  alt="Point"
                  width={800}
                  height={100}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#000',
                    fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                    lineHeight: 1.2,
                    textAlign: 'left',
                    width: '90%',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                  }}
                >
                  {point}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            marginTop: '1rem',
            lineHeight: 0,
          }}
        >
          <Image
            src="/then.webp"
            alt="Then"
            width={1920}
            height={200}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  )
}
