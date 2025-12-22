'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import sequencerStyles from './SequencerMarquee.module.css'

// Фиксированные данные для звезд (чтобы не перегенерировались при каждом рендере)
const FIXED_STARS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  rotation: Math.random() * 360,
  animationDelay: Math.random() * 2,
}))

// Компонент для синхронизированного изображения барабанщика
function SyncedDrummerImage() {
  const [imageSrc, setImageSrc] = useState('/drummer101.webp')

  useEffect(() => {
    const stepDuration = (60 / 30) / 4 // 0.5 секунды на шаг
    const cycleDuration = stepDuration * 4 // 2 секунды на полный цикл
    const halfStep = stepDuration / 2 // 0.25 секунды
    const updateInterval = 50 // Обновляем каждые 50мс для точности

    let startTime = Date.now()

    const updateImage = () => {
      const elapsed = (Date.now() - startTime) % (cycleDuration * 1000)
      const timeInCycle = elapsed / 1000

      // Определяем текущий шаг (0, 1, 2, 3)
      const currentStep = Math.floor(timeInCycle / stepDuration) % 4
      // Позиция внутри текущего шага (0.0 - 0.5)
      const positionInStep = timeInCycle % stepDuration
      
      // В первой половине шага (0.0-0.25s) показываем изображение шага (удар)
      // Во второй половине шага (0.25-0.5s) показываем 100
      if (positionInStep < halfStep) {
        // Первая половина - показываем изображение текущего шага
        setImageSrc(`/drummer10${currentStep + 1}.webp`)
      } else {
        // Вторая половина - показываем 100
        setImageSrc('/drummer100.webp')
      }
    }

    const interval = setInterval(updateImage, updateInterval)
    updateImage() // Первый вызов сразу

    return () => clearInterval(interval)
  }, [])

  return (
    <Image
      src={imageSrc}
      alt="Drummer"
      width={1920}
      height={1080}
      priority
      style={{
        position: 'absolute',
        top: 0,
        left: 55,
        width: '90%',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 5,
        pointerEvents: 'none',
      }}
    />
  )
}

// Маленький секвенсорный блок для второй таблички, со своим локальным состоянием шагов
function MiniSequencerBlock() {
  const [sequencerStep, setSequencerStep] = useState(0)

  useEffect(() => {
    const stepDuration = (60 / 30) / 4 // 0.5 секунды на шаг

    const interval = setInterval(() => {
      setSequencerStep((prev) => (prev + 1) % 4)
    }, stepDuration * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={sequencerStyles.sequencerBlock}>
      <div className={sequencerStyles.grid}>
        {/* R – руки правая */}
        <div className={`${sequencerStyles.trackRow} ${sequencerStyles.trackRowNoLabel}`}>
          <div className={sequencerStyles.cellsWrapper}>
            <div
              className={`${sequencerStyles.gridCell} ${sequencerStyles.active} ${sequencerStyles['track-R']} ${
                sequencerStep === 0 ? sequencerStyles.playingActive : ''
              }`}
              data-instrument-id="r_accent"
            />
            <div
              className={`${sequencerStyles.gridCell} ${
                sequencerStep === 1 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${sequencerStyles.active} ${sequencerStyles['track-R']} ${
                sequencerStep === 2 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${sequencerStyles.active} ${sequencerStyles['track-R']} ${
                sequencerStep === 3 ? sequencerStyles.playingActive : ''
              }`}
            />
          </div>
        </div>

        {/* L – руки левая */}
        <div className={`${sequencerStyles.trackRow} ${sequencerStyles.trackRowNoLabel}`}>
          <div className={sequencerStyles.cellsWrapper}>
            <div
              className={`${sequencerStyles.gridCell} ${
                sequencerStep === 0 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${sequencerStyles.active} ${sequencerStyles['track-L']} ${
                sequencerStep === 1 ? sequencerStyles.playingActive : ''
              }`}
              data-instrument-id="l_accent"
            />
            <div
              className={`${sequencerStyles.gridCell} ${
                sequencerStep === 2 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${
                sequencerStep === 3 ? sequencerStyles.playingActive : ''
              }`}
            />
          </div>
        </div>

        {/* RF – правая нога */}
        <div className={`${sequencerStyles.trackRow} ${sequencerStyles.trackRowNoLabel}`}>
          <div className={sequencerStyles.cellsWrapper}>
            <div
              className={`${sequencerStyles.gridCell} ${sequencerStyles.active} ${sequencerStyles['track-RF']} ${
                sequencerStep === 0 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${sequencerStyles.active} ${sequencerStyles['track-RF']} ${
                sequencerStep === 1 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${
                sequencerStep === 2 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${
                sequencerStep === 3 ? sequencerStyles.playingActive : ''
              }`}
            />
          </div>
        </div>

        {/* LF – левая нога */}
        <div className={`${sequencerStyles.trackRow} ${sequencerStyles.trackRowNoLabel}`}>
          <div className={sequencerStyles.cellsWrapper}>
            <div
              className={`${sequencerStyles.gridCell} ${
                sequencerStep === 0 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${
                sequencerStep === 1 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${
                sequencerStep === 2 ? sequencerStyles.playingActive : ''
              }`}
            />
            <div
              className={`${sequencerStyles.gridCell} ${sequencerStyles.active} ${sequencerStyles['track-LF']} ${
                sequencerStep === 3 ? sequencerStyles.playingActive : ''
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <>
      {/* Стили для звезд */}
      <style jsx>{`
        .stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 1;
        }

        .star {
          position: absolute;
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
          animation: twinkle 2s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `}</style>

      {/* Синяя секция */}
      <section
        id="howitworks"
        style={{
          background: 'linear-gradient(to bottom,rgb(0, 0, 0) 0%, #000215 100%)',
          padding: '0 0 460px 0',
          marginTop: '0px',
          position: 'relative',
          zIndex: 10,
          overflow: 'visible',
        }}
      >
        <div style={{ padding: '0px 20px 0 20px' }}>
        {/* Звездочки - выключены */}
        {/* <div className="stars">
          {FIXED_STARS.map((star) => (
            <span key={star.id} className="star" style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              transform: `rotate(${star.rotation}deg)`
            }}>✦</span>
          ))}
        </div> */}
        
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
            overflow: 'visible',
          }}
        >
          {/* 3D табличка с текстом */}
          <div
            style={{
              perspective: '1000px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '-2rem',
              marginBottom: '5rem',
            }}
          >
            <div
              style={{
                background: 'none',
                backdropFilter: 'blur(10px)',
                border: 'none',
                borderRadius: '20px',
                padding: '2rem 3rem',
                transform: 'rotateY(20deg) rotateX(-5deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(2.8rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  letterSpacing: '-0.01em',
                  margin: 0,
                  textAlign: 'center',
                  color: '#fff',
                  textShadow: '0 2px 0 rgba(255, 255, 255, 0.5), 0 3px 0 rgba(112, 112, 112, 0.4), 0 4px 8px rgba(0, 0, 0, 0.6), 0 4px 6px rgba(124, 114, 114, 0.4), 0 8px 16px rgba(255, 255, 255, 0.05)',
                  transform: 'translateZ(20px)',
                }}
              >
                Учи ритмы, <br />а не ноты!
              </h2>
            </div>
          </div>
          
          {/* Синхронизированное изображение барабанщика под заголовком */}
          <div style={{ position: 'relative', width: '100%', marginTop: '-2rem' }}>
            <SyncedDrummerImage />
          </div>
          
          {/* Контейнер с perspective для 3D эффекта */}
          <div
            style={{
              perspective: '1000px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '-3rem',
              marginBottom: '-4rem',
              marginLeft: '-20px',
              padding: '0 1rem',
              width: '100%',
              overflow: 'visible',
              scale: '0.8',
            }}
          >
            {/* Невидимый контейнер с 3D наклоном для обеих табличек */}
            <div
              style={{
                transform: 'rotateY(40deg) rotateX(0deg)',
                transformStyle: 'preserve-3d',
                display: 'flex',
                marginLeft: '-20px',
                flexDirection: 'row',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}
            >
              {/* Первая табличка */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(88, 192, 226, 0.5)',
                  borderRadius: '16px',
                  padding: '1rem 1.25rem',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 20px rgba(88, 192, 226, 0.3)',
                  flex: '1 1 0',
                  minWidth: '140px',
                  maxWidth: '180px',
                }}
              >
                <div style={{ transform: 'translateZ(15px)' }}>
                  <h3
                    style={{
                      fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)',
                      fontWeight: 700,
                      fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                      letterSpacing: '-0.01em',
                      margin: 0,
                      marginBottom: '0.6rem',
                      textAlign: 'center',
                      color: '#fff',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    4 ряда = 4 конечности
                  </h3>
                  
                  {/* Радужный разделитель */}
                  <div
                    style={{
                      width: '100%',
                      height: '3px',
                      background: 'linear-gradient(90deg, #ff8c42 0%, #5AA5C5 25%, #ff69b4 50%, #ffffff 75%, #ff8c42 100%)',
                      borderRadius: '50px',
                      marginBottom: '0.8rem',
                      boxShadow: '0 0 10px rgba(88, 192, 226, 0.5)',
                    }}
                  />
                  
                  {/* 4 ряда с цветными клеточками */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                    }}
                  >
                    {/* ПР - Правая рука */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          backgroundColor: '#FF4A50',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          color: '#fff',
                          fontSize: '0.65rem',
                          boxShadow: '0 2px 8px rgba(255, 140, 66, 0.4)',
                          flexShrink: 0,
                        }}
                      >
                        R
                      </div>
                      <span style={{ color: '#FF4A50', fontFamily: 'var(--font-rubik), Rubik, sans-serif', fontSize: '0.75rem', fontWeight: 500, whiteSpace: 'nowrap', textShadow: '0 0 8px rgba(255, 74, 80, 0.6)' }}>
                        Правая рука
                      </span>
                    </div>
                    
                    {/* ЛР - Левая рука */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          backgroundColor: '#5AA5C5',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          color: '#fff',
                          fontSize: '0.65rem',
                          boxShadow: '0 2px 8px rgba(90, 165, 197, 0.4)',
                          flexShrink: 0,
                        }}
                      >
                        L
                      </div>
                      <span style={{ color: '#2DD2D8', fontFamily: 'var(--font-rubik), Rubik, sans-serif', fontSize: '0.75rem', fontWeight: 500, whiteSpace: 'nowrap', textShadow: '0 0 8px rgba(45, 210, 216, 0.6)' }}>
                        Левая рука
                      </span>
                    </div>
                    
                    {/* ПН - Правая нога */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          backgroundColor: '#DD0B8C',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          color: '#fff',
                          fontSize: '0.65rem',
                          boxShadow: '0 2px 8px rgba(255, 105, 180, 0.4)',
                          flexShrink: 0,
                        }}
                      >
                        K
                      </div>
                      <span style={{ color: '#DD0B8C', fontFamily: 'var(--font-rubik), Rubik, sans-serif', fontSize: '0.75rem', fontWeight: 500, whiteSpace: 'nowrap', textShadow: '0 0 8px rgba(221, 11, 140, 0.6)' }}>
                        Правая нога
                      </span>
                    </div>
                    
                    {/* ЛН - Левая нога */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          backgroundColor: '#FDA20A',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          color: '#fff',
                          fontSize: '0.65rem',
                          boxShadow: '0 2px 8px rgba(255, 255, 255, 0.4)',
                          flexShrink: 0,
                        }}
                      >
                        LF
                      </div>
                      <span style={{ color: '#FDA20A', fontFamily: 'var(--font-rubik), Rubik, sans-serif', fontSize: '0.75rem', fontWeight: 500, whiteSpace: 'nowrap', textShadow: '0 0 8px rgba(253, 162, 10, 0.7)' }}>
                        Левая нога
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Вторая табличка */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(88, 192, 226, 0.5)',
                  borderRadius: '16px',
                  padding: '1.5rem 0.5rem 0.5rem',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 20px rgba(88, 192, 226, 0.3)',
                  flex: '1 1 0',
                  minWidth: '160px',
                  maxWidth: '220px',
                }}
              >
                <div style={{ transform: 'translateZ(15px)' }}>
                  {/* Один блок секвенсора в стиле SequencerMarquee */}
                  <MiniSequencerBlock />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
