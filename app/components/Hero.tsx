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
          backgroundColor: '#0D1042',
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
                background: 'linear-gradient(to bottom, transparent 0%, #0D1042 100%)',
                pointerEvents: 'none',
                zIndex: '60'
              }}
            />
        </div>

        {/* Голубое свечение-туманность за текстовым блоком */}
        <div
          style={{
            position: 'absolute',
            top: '39%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '50%',
            borderRadius: '10%',
            background: 'radial-gradient(circle, rgba(88, 192, 226, 0.9) 0%, rgba(88, 192, 226, 0.7) 30%, rgba(88, 192, 226, 0.4) 60%, transparent 85%)',
            filter: 'blur(25px)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />

        {/* Темно-фиолетовый блок с текстом */}
        <div
          style={{
            background: 'linear-gradient(to bottom, #0D1042 0%, #000427 100%)',
            padding: '23px 10px 120px',
            marginBottom: '0',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
            marginTop: '90px',
            overflow: 'visible',
          }}
        >
          {/* Декоративные изображения */}
          <Image
            src="/yellow.webp"
            alt=""
            width={100}
            height={100}
            style={{
              position: 'absolute',
              left: '-12%',
              top: '13%',
              width: '120px',
              height: 'auto',
              opacity: 0.2,
              zIndex: 2,
              pointerEvents: 'none',
              transform: 'rotate(25deg)',
            }}
          />
          <Image
            src="/red.webp"
            alt=""
            width={100}
            height={100}
            style={{
              position: 'absolute',
              right: '-12%',
              top: '10%',
              width: '120px',
              height: 'auto',
              opacity: 0.2,
              zIndex: 2,
              pointerEvents: 'none',
              transform: 'rotate(-35deg)',
            }}
          />
          <Image
            src="/red.webp"
            alt=""
            width={100}
            height={100}
            style={{
              position: 'absolute',
              left: '-5%',
              bottom: '0%',
              width: '120px',
              height: 'auto',
              opacity: 0.2,
              zIndex: 2,
              pointerEvents: 'none',
              transform: 'rotate(10deg)',
            }}
          />
          <Image
            src="/yellow.webp"
            alt=""
            width={100}
            height={100}
            style={{
              position: 'absolute',
              right: '13%',
              bottom: '-8%',
              width: '120px',
              height: 'auto',
              opacity: 0.2,
              zIndex: 2,
              pointerEvents: 'none',
              transform: 'rotate(-20deg)',
            }}
          />
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

          {/* Внешний контейнер для разделения пространства */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '-0px',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingLeft: '20px',
              paddingRight: '0px',
              position: 'relative',
              zIndex: 10,
              overflow: 'visible',
            }}
          >
            {/* Контейнер с иконками и кнопкой */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                minWidth: 0,
                overflow: 'visible',
              }}
            >
              {/* Иконки-бейджики */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '10px',
                  overflow: 'visible',
                  padding: '20px',
                }}
              >
                {/* Бейджик 2 */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Image
                    src="/15min.webp"
                    alt="Всего 15 минут"
                    width={90}
                    height={90}
                    style={{
                      width: '45px',
                      height: '50px',
                      objectFit: 'contain',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-bebas-neue), Bebas Neue, sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'white',
                      fontSize: '12px',
                      textAlign: 'center',
                      display: 'block',
                    }}
                  >
                    Всего 15 <br />минут
                  </span>
                </div>
                {/* Бейджик 1 */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Image
                    src="/11k.webp"
                    alt="10000+ drummers"
                    width={95}
                    height={95}
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'contain',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-bebas-neue), Bebas Neue, sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'white',
                      fontSize: '12px',
                      textAlign: 'center',
                      display: 'block',
                    }}
                  >
                    10000+ <br />drummers
                  </span>
                </div>

                {/* Бейджик 3 */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Image
                    src="/aipowered.webp"
                    alt="AI Powered"
                    width={95}
                    height={95}
                    style={{
                      width: '49px',
                      height: '50px',
                      objectFit: 'contain',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-bebas-neue), Bebas Neue, sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'white',
                      fontSize: '12px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '32px',
                    }}
                  >
                    AI Powered
                  </span>
                </div>
              </div>

              {/* Кнопка Начать */}
              <button
                className="start-button"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(2px)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(0, 0, 0, 0.3), inset 0 3px 6px rgba(0, 0, 0, 0.4), 0 0 3px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.3), 0 3px 0 rgba(0, 0, 0, 0.3), 0 0 3px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translateY(2px)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(0, 0, 0, 0.3), inset 0 3px 6px rgba(0, 0, 0, 0.4), 0 0 3px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.3), 0 3px 0 rgba(0, 0, 0, 0.3), 0 0 3px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)';
                }}
                style={{
                  background: 'linear-gradient(180deg, #ff69b4 0%, #e04a9a 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '18px 40px',
                  fontSize: '20px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  cursor: 'pointer',
                  boxShadow: 'inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.3), 0 3px 0 rgba(0, 0, 0, 0.3), 0 0 3px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 105, 180, 0.3)',
                  transition: 'all 0.2s ease',
                  width: '100%',
                  boxSizing: 'border-box',
                  transform: 'translateY(0)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  outline: 'none',
                  marginTop: '30px',
                }}
              >
                Начать
              </button>
              {/* Текст под кнопкой */}
              <div
                style={{
                  fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                  fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  color: '#fff',
                  textAlign: 'center',
                  lineHeight: 1.6,
                  marginTop: '1rem',
                }}
              >
                Подходит новичкам <br />и профи
              </div>
            </div>
            
            {/* Мокап контейнер для разделения пространства */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '0px',
                overflow: 'visible',
                position: 'relative',
                width: '200px',
                height: '300px',
                padding: '30px',
              }}
            >
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '280px',
                height: '560px',
                padding: 0,
                marginLeft: '20px',
                marginTop: '-40px',
                lineHeight: 0,
                transform: 'scale(0.55)',
                transformOrigin: 'center center',
              }}>
                <PhoneMockup>
                  <Image
                    src="/home2.webp"
                    alt="Home Screen"
                    width={800}
                    height={1800}
                    style={{
                      position: 'absolute',
                      top: '-22px',
                      left: '-10px',
                      right: '0px',
                      bottom: '0px',
                      width: 'calc(112%)',
                      height: 'calc(112%)',
                      objectFit: 'cover',
                      zIndex: 1,
                    }}
                  />
                </PhoneMockup>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
