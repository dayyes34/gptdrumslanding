'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        background: '#000427',
        padding: '0',
        marginTop: '0',
      }}
    >
      {/* Перевернутая картинка hero-top */}
      <div
        style={{
          width: '100%',
          lineHeight: 0,
          position: 'relative',
          transform: 'rotate(180deg)',
          marginBottom: '0',
        }}
      >
        <div style={{ position: 'relative' }}>
          <Image
            src="/hero-top.webp"
            alt="Footer Top"
            width={1080}
            height={200}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            priority
          />
          {/* Градиентный overlay для плавного фейда в #121546 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '100%',
              background: 'linear-gradient(to bottom, #121546, transparent)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* Ссылки на легалки */}
      <div
        style={{
          padding: '40px 20px',
          background: '#000427',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <a
            href="/privacy"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
            }}
          >
            Политика конфиденциальности
          </a>
          <a
            href="/terms"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
            }}
          >
            Условия использования
          </a>
          <a
            href="/cookie"
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
            }}
          >
            Политика использования cookie
          </a>
        </div>
        <div
          style={{
            maxWidth: '1200px',
            margin: '2rem auto 0',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
          }}
        >
          © {new Date().getFullYear()} gptDrums. Все права защищены.
        </div>
      </div>
    </footer>
  )
}

