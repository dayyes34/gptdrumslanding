'use client'

import Image from 'next/image'
import PhoneMockup from './PhoneMockup'
import LandingSequencer from './LandingSequencer'

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
          style={{ width: '100%', lineHeight: 0, position: 'relative', marginBottom: '0', zIndex: 20 }}
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
              padding: '23px 10px 0px',
              textAlign: 'center',
              position: 'relative',
              zIndex: 10,
              marginTop: '-30px',
            }}
          >
           
            <h1
              style={{
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 8vw, 3rem)',
                margin: 0,
                marginBottom: '0.5rem',
                lineHeight: 1.3,
                position: 'relative',
                zIndex: 10,
              }}
            >
              <span style={{ color: 'white' }}>Умный ассистент </span>
              <span style={{ color: '#ff9d00' }}>барабанщика</span>
            </h1>

            {/* Внешний контейнер для разделения пространства */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '0px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '20px',
                paddingRight: '0px',
                position: 'relative',
                zIndex: 10,
              }}
            >
              {/* Контейнер с иконками и кнопкой */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flex: 1,
                  marginTop: '-45px',
                  minWidth: 0,
                }}
              >
                {/* Иконки-бейджики в ряд */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '16px',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Бейджик 1 - 15min */}
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
                        lineHeight: '1.3',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      15 минут <br />в день
                    </span>
                  </div>

                  {/* Бейджик 2 - 11k */}
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
                        lineHeight: '1.3',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      10000+ <br />drummers
                    </span>
                  </div>

                  {/* Бейджик 3 - aipowered */}
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
                        display: 'block',
                        lineHeight: '1.3',
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
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(0, 0, 0, 0.3), inset 0 3px 6px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.3), 0 3px 0 rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(2px)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(0, 0, 0, 0.3), inset 0 3px 6px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.3), 0 3px 0 rgba(0, 0, 0, 0.3)';
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
                    boxShadow: 'inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.3), 0 2px 0 rgba(0, 0, 0, 0.3)',
                    
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
              </div>
              
              {/* Мокап контейнер справа */}
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
                          <div
                            style={{
                              opacity: 1,
                              transition: 'opacity 0.5s ease-out',
                              width: '100%',
                              height: '100%',
                              scale: '1.18',
                              paddingTop: '35px'
                            }}
                          >
                            <LandingSequencer 
                              isLoopActive={false} 
                              isMuteActive={false}
                              hideBpmControl={true}
                            />
                          </div>
                        </PhoneMockup>
                      </div>
              </div>
            </div>
            
            {/* Изображение fits.webp под мокапом и кнопкой */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-2rem',
                marginBottom: '5rem',
                position: 'relative',
                zIndex: 10,
              }}
            >
              <Image
                src="/fits.webp"
                alt="Подходит новичкам и профи"
                width={400}
                height={100}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '80%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
