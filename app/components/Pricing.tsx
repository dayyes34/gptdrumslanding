'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

// Фиксированная дата дедлайна: 01 января 2026, 00:00 (московское время UTC+3)
const FOMO_DEADLINE = new Date('2026-01-01T00:00:00+03:00').getTime()

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const [deadline, setDeadline] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  useEffect(() => {
    if (!sectionRef.current) return

    const node = sectionRef.current

    const startCountdown = () => {
      const now = Date.now()
      const target = FOMO_DEADLINE
      
      setDeadline(target)
      setTimeLeft(Math.max(0, target - now))
    }

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          startCountdown()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!deadline) return
    const interval = setInterval(() => {
      setTimeLeft(prev => Math.max(0, deadline - Date.now()))
    }, 1000)
    return () => clearInterval(interval)
  }, [deadline])

  const countdown = useMemo(() => {
    const total = Math.max(0, timeLeft)
    const totalSeconds = Math.floor(total / 1000)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return {
      days: Math.min(days, 99),
      hours,
      minutes,
      seconds
    }
  }, [timeLeft])

  const offerExpired = deadline !== null && timeLeft <= 0

  const formatNumber = (value: number) =>
    value.toString().padStart(2, '0')

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      style={{ 
        padding: '60px 20px',
        background: '#000427',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Плашка LIMITED OFFER */}
        <div
          style={{
            display: 'inline-block',
            background: '#ffd700',
            color: '#000',
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '2rem',
          }}
        >
          LIMITED OFFER
        </div>

        {/* Таймер */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            alignItems: 'center',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.65)',
              fontFamily: 'var(--font-rubik), Rubik, sans-serif',
              margin: 0,
            }}
          >
            Предложение истекает
          </p>
          {offerExpired ? (
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                margin: 0,
              }}
            >
              Предложение истекло
            </p>
          ) : (
            <div
              style={{
                display: 'flex',
                gap: 'clamp(0.75rem, 4vw, 1.5rem)',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  minWidth: '70px',
                  padding: '0.75rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: 'white',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  }}
                >
                  {formatNumber(countdown.days)}
                </span>
                <small
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  }}
                >
                  Дней
                </small>
              </div>
              <div
                style={{
                  minWidth: '70px',
                  padding: '0.75rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: 'white',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  }}
                >
                  {formatNumber(countdown.hours)}
                </span>
                <small
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  }}
                >
                  Часов
                </small>
              </div>
              <div
                style={{
                  minWidth: '70px',
                  padding: '0.75rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: 'white',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  }}
                >
                  {formatNumber(countdown.minutes)}
                </span>
                <small
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  }}
                >
                  Минут
                </small>
              </div>
              <div
                style={{
                  minWidth: '70px',
                  padding: '0.75rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: 'white',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  }}
                >
                  {formatNumber(countdown.seconds)}
                </span>
                <small
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  }}
                >
                  Секунд
                </small>
              </div>
            </div>
          )}
        </div>

        {/* Планы: FREE и PRO */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            marginTop: '3rem',
          }}
        >
          {/* План FREE */}
          <div
            style={{
              flex: '1 1 0',
              minWidth: '280px',
              maxWidth: '400px',
              padding: '2rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3
              style={{
                color: 'white',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 700,
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              FREE
            </h3>
            <div
              style={{
                color: 'white',
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 800,
                textAlign: 'center',
                marginBottom: '1rem',
              }}
            >
              0₽
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '1.5rem 0',
                flex: 1,
              }}
            >
              <li
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  marginBottom: '0.75rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}
              >
                <span style={{ position: 'absolute', left: 0 }}>✓</span>
                Базовые функции
              </li>
            </ul>
            <button
              style={{
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: 'auto',
              }}
            >
              Начать бесплатно
            </button>
          </div>

          {/* План PRO */}
          <div
            style={{
              flex: '1 1 0',
              minWidth: '280px',
              maxWidth: '400px',
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(90, 165, 197, 0.2) 0%, rgba(45, 210, 216, 0.2) 100%)',
              border: '2px solid #5AA5C5',
              borderRadius: '16px',
              boxShadow: '0 0 30px rgba(90, 165, 197, 0.4)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3
              style={{
                color: '#5AA5C5',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 700,
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              PRO
            </h3>

            {/* Переключатель Месячный/Годовой */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                marginBottom: '1rem',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                padding: '4px',
              }}
            >
              <button
                onClick={() => setBillingPeriod('monthly')}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  background: billingPeriod === 'monthly' ? '#5AA5C5' : 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Месячный
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  background: billingPeriod === 'yearly' ? '#5AA5C5' : 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Годовой
              </button>
            </div>

            <div
              style={{
                color: 'white',
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 800,
                textAlign: 'center',
                marginBottom: '1rem',
              }}
            >
              {billingPeriod === 'monthly' ? '299₽' : '2990₽'}
              <span style={{ fontSize: '0.5em', fontWeight: 400 }}>
                {billingPeriod === 'monthly' ? '/месяц' : '/год'}
              </span>
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '1.5rem 0',
                flex: 1,
              }}
            >
              <li
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  marginBottom: '0.75rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}
              >
                <span style={{ position: 'absolute', left: 0 }}>✓</span>
                Полный доступ
              </li>
              <li
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  marginBottom: '0.75rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}
              >
                <span style={{ position: 'absolute', left: 0 }}>✓</span>
                Все обновления
              </li>
              <li
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  marginBottom: '0.75rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}
              >
                <span style={{ position: 'absolute', left: 0 }}>✓</span>
                Приоритетная поддержка
              </li>
            </ul>
            <button
              style={{
                padding: '12px 24px',
                background: '#5AA5C5',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem',
                fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: 'auto',
                boxShadow: '0 4px 12px rgba(90, 165, 197, 0.4)',
              }}
            >
              Выбрать PRO
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

