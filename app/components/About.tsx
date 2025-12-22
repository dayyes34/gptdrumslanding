'use client'

import Image from 'next/image'

// Константы для секций сравнения
const comparisonSections = [
  {
    leftTitle: 'Поиск уроков',
    rightTitle: 'AI-тренер',
    leftImage: '/search.webp',
    leftImageAlt: 'Поиск уроков',
    rightImage: '/ai.webp',
    rightImageAlt: 'ИИ-тренер',
    badgeText: 'Быстрее и эффективнее',
    description: 'Продолжай где остановился в 1 клик',
    hasDarkBackground: true,
  },
  {
    leftTitle: 'Ноты',
    rightTitle: 'Живые паттерны',
    leftImage: '/notes.webp',
    leftImageAlt: 'Ноты',
    rightImage: '/patterns.webp',
    rightImageAlt: 'Живые паттерны',
    badgeText: 'Проще и понятнее',
    description: 'Не расшифровывай ноты, играй сразу',
    hasDarkBackground: false,
  },
  {
    leftTitle: 'Перекосы',
    rightTitle: 'Симметрия',
    leftImage: '/imbalanced.webp',
    leftImageAlt: 'Перекосы',
    rightImage: '/balanced.webp',
    rightImageAlt: 'Симметрия',
    badgeText: 'Ровнее и стабильнее',
    description: 'Правая рука не убежит от левой',
    hasDarkBackground: true,
  },
  {
    leftTitle: 'Преподаватель',
    rightTitle: 'Карман',
    leftImage: '/prepod.webp',
    leftImageAlt: 'Преподаватель',
    rightImage: '/247.webp',
    rightImageAlt: 'Карман',
    badgeText: 'Всегда с тобой',
    description: 'Достал - позанимался - убрал',
    hasDarkBackground: false,
  },
]

// Компонент секции сравнения
function ComparisonSection({ 
  leftTitle, 
  rightTitle, 
  leftImage, 
  leftImageAlt, 
  rightImage, 
  rightImageAlt, 
  badgeText,
  description,
  hasDarkBackground 
}: {
  leftTitle: string
  rightTitle: string
  leftImage: string
  leftImageAlt: string
  rightImage: string
  rightImageAlt: string
  badgeText: string
  description: string
  hasDarkBackground: boolean
}) {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'rgba(255, 255, 255, 0.2)',
          marginBottom: '0',
        }}
      />
      <div style={{ 
        background: hasDarkBackground ? 'rgba(0, 0, 0, 0.2)' : 'transparent', 
        padding: '2rem 0', 
        marginBottom: '0', 
        width: '100vw', 
        marginLeft: 'calc(-50vw + 50%)', 
        marginRight: 'calc(-50vw + 50%)' 
      }}>
        <div style={{ padding: '0 20px', maxWidth: '100%' }}>
          {/* Заголовок сравнения - названия со стрелкой */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                color: 'white',
                fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
              }}
            >
              {leftTitle}
            </span>
            <span style={{ color: 'white', fontSize: '2rem' }}>→</span>
            <span
              style={{
                color: 'white',
                fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
              }}
            >
              {rightTitle}
            </span>
          </div>

          {/* Два изображения в ряд */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Левое изображение с красной рамкой */}
            <div
              style={{
                flex: 1,
                minWidth: '150px',
                border: '3px solid #ff4a50',
                borderRadius: '24px',
                padding: '8px',
                background: 'rgba(255, 74, 80, 0.1)',
              }}
            >
              <Image
                src={leftImage}
                alt={leftImageAlt}
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  scale: '1',
                  borderRadius: '4px',
                }}
              />
            </div>

            {/* Правое изображение с зеленой рамкой */}
            <div
              style={{
                flex: 1,
                minWidth: '150px',
                border: '3px solid #00ff00',
                borderRadius: '24px',
                padding: '8px',
                background: 'rgba(0, 255, 0, 0.1)',
              }}
            >
              <Image
                src={rightImage}
                alt={rightImageAlt}
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>

          {/* Желтая текстовая плашка по центру */}
          <div
            style={{
              background: '#ffd700',
              color: '#000',
              padding: '8px 16px',
              borderRadius: '6px',
              textAlign: 'center',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              fontWeight: 600,
              margin: '0 auto',
              maxWidth: '60%',
              marginBottom: description ? '1rem' : '2rem',
            }}
          >
            {badgeText}
          </div>

          {/* Текстовая подпись под желтой плашкой */}
          {description && (
            <div
              style={{
                color: 'white',
                fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.5px',
                lineHeight: 1.5,
                textAlign: 'center',
                marginBottom: '0rem',
                padding: '0 20px',
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ padding: '0', background: 'linear-gradient(to bottom, #250F4C 0%,rgb(0, 0, 0) 100%)', position: 'relative', zIndex: 1, marginTop: '-85px' }}>
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
          style={{
            width: '100%',
            height: '300px',
            display: 'block',
           
          }}
        >
          <defs>
            <linearGradient id="waveGradientAbout" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255)" />
              <stop offset="29%" stopColor="#90d2f5" />
              <stop offset="45%" stopColor="rgba(129, 190, 222)" />
              <stop offset="55%" stopColor="#81BEDE" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C240,65 480,35 720,50 C960,65 1200,35 1440,50 L1440,120 L0,120 Z"
            fill="url(#waveGradientAbout)"
          />
        </svg>
      </div>

      <div style={{ padding: '40px 20px', position: 'relative', zIndex: 2, paddingTop: '40px' }}>
        {/* Заголовок */}
      <h2
        style={{
          color: 'white',
          fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
          fontFamily: 'var(--font-rubik), Rubik, sans-serif',
          fontWeight: 600,
          lineHeight: 1.2,
          marginTop: '90px',
          marginBottom: '1rem',
          textAlign: 'left',
        }}
      >
        Знакомься — <span style={{ color: '#ffd700' }}>Покет!</span>
      </h2>

      {/* Контейнер с текстом */}
      <div style={{ position: 'relative', marginBottom: '3rem' }}>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '12px 16px',
          }}
        >
          <p
            style={{
              color: 'white',
              fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              lineHeight: 1.6,
              fontWeight: 200,
              textAlign: 'left',
              margin: 0,
            }}
          >
            Я убрал все препятствия
            <br />
            на пути к свободной игре!
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            right: '-40px',
            top: '-100px',
            scale: '0.75',
            maxWidth: '200px',
            width: 'auto',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          {/* Голубое свечение за изображением */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(129, 190, 222, 0.3) 0%, rgba(129, 190, 222, 0.2) 40%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(30px)',
              zIndex: 0,
            }}
          />
          
          <Image
            src="/meetpocket.webp"
            alt="Meet Pocket"
            width={200}
            height={150}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              position: 'relative',
              zIndex: 1,
            }}
          />
          
          {/* Звездочки и точки поверх картинки */}
          {[
            { type: 'star', top: '20%', left: '25%' },
            { type: 'dot', top: '35%', left: '75%' },
            { type: 'star', top: '65%', left: '20%' },
            { type: 'dot', top: '75%', left: '80%' },
          ].map((spark, i) => (
            spark.type === 'star' ? (
              <div
                key={i}
                className="star-four-pointed"
                style={{
                  position: 'absolute',
                  top: spark.top,
                  left: spark.left,
                  zIndex: 2,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ) : (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: spark.top,
                  left: spark.left,
                  width: '3px',
                  height: '3px',
                  background: '#81BEDE',
                  borderRadius: '50%',
                  boxShadow: '0 0 6px #81BEDE, 0 0 12px #81BEDE',
                  zIndex: 2,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )
          ))}
        </div>
      </div>

      {/* Часть со сравнениями */}
      <div>
        {/* Горизонтальный разделитель */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)',
            marginBottom: '0',
          }}
        />

        {comparisonSections.map((section, index) => (
          <ComparisonSection
            key={index}
            leftTitle={section.leftTitle}
            rightTitle={section.rightTitle}
            leftImage={section.leftImage}
            leftImageAlt={section.leftImageAlt}
            rightImage={section.rightImage}
            rightImageAlt={section.rightImageAlt}
            badgeText={section.badgeText}
            description={section.description}
            hasDarkBackground={section.hasDarkBackground}
          />
        ))}
      </div>
      </div>
    </section>
  )
}
