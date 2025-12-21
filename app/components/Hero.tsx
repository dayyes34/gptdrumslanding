'use client'

import Image from 'next/image'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <div
      className="new-mobile-hero-container"
      style={{
        paddingTop: 0,
        position: 'relative',
        background: '#000427',
      }}
    >
      {/* Фиксированный фон spacebg.webp */}
      <div
        className="fixed-space-bg"
        style={{
          zIndex: 0,
          backgroundImage: 'url(/spacebg.webp)',
          backgroundSize: '110%',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000427',
        }}
      />
      
      {/* Hero секция с шапкой */}
      <section
        id="hero"
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 1,
          marginTop: '0px',
        }}
      >
        {/* Шапка hero-top.webp */}
        <div 
          className="hero-top-container"
          style={{ width: '100%', lineHeight: 0, position: 'relative', marginBottom: '-100px', zIndex: 20 }}
        >
          <div style={{ position: 'relative' }}>
            <Image
              src="/hero-top.webp"
              alt="Hero Top"
              width={1080}
              height={200}
              priority
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                position: 'relative',
                zIndex: 20,
              }}
            />
            {/* Градиентный overlay для плавного фейда hero-top в фон */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '10%',
                background: 'linear-gradient(to bottom, transparent 0%, #13154A 100%)',
                pointerEvents: 'none',
                zIndex: 60
              }}
            />
          </div>
          
          {/* Блок с заголовками */}
          <div
            style={{
              background: 'linear-gradient(to bottom, #13154A 0%, #000427 100%)',
              padding: '23px 10px 60px',
              textAlign: 'center',
              position: 'relative',
              zIndex: 10,
              marginTop: '0px',
            }}
          >
            <h1
              style={{
                color: 'white',
                fontSize: 'clamp(2rem, 8vw, 3rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 10,
                textShadow: '0 2px 10px rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.2), 0 0 20px rgba(88, 192, 226, 0.4), 0 0 40px rgba(88, 192, 226, 0.2)',
              }}
            >
              Умный ассистент барабанщика
            </h1>
            <h2
              style={{
                color: '#ff9d00',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
                fontSize: '18px',
                margin: 0,
                marginBottom: '1.5rem',
                lineHeight: 1.3,
                position: 'relative',
                zIndex: 10,
                textShadow: '0 0 15px rgba(255, 50, 0, 0.7), 0 0 30px rgba(255, 50, 0, 0.3)',
              }}
            >
              Барабань как хочешь, <br />а не как можешь!
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}
