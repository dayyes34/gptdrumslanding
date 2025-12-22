'use client'

import { useState } from 'react'

const faqData = {
  eyebrow: 'Прямые ответы',
  items: [
    {
      question: 'Это для новичков или профи?',
      answer: 'Для обоих. AI подстраивается под ТВОЙ уровень. День 1 новичок? Продвинутый игрок? Не важно.',
    },
    {
      question: 'Нужны ли настоящие барабаны?',
      answer: 'Нет. Практик-пэды, электронная установка или даже твой стол подойдут.',
    },
    {
      question: 'Сколько времени в день?',
      answer: '15-30 минут. Постоянство важнее марафонских сессий.',
    },
    {
      question: 'Могу ли я отменить в любое время?',
      answer: 'Да. Без вопросов. Без скрытых платежей.',
    },
    {
      question: 'Почему не просто смотреть YouTube?',
      answer: 'Из-за огромной потери времени. 20-минутные видео с всего 10 секундами ценности. Структура + AI отслеживание = реальные результаты.',
    },
  ],
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq"
      style={{
        padding: '60px 20px',
        background: 'linear-gradient(to bottom, #010425, #121546)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.65)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          {faqData.eyebrow}
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {faqData.items.map((item, index) => (
            <div
              key={index}
              style={{
                border: `1px solid ${openIndex === index ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.12)'}`,
                borderRadius: '16px',
                background: openIndex === index ? 'rgba(10, 10, 10, 0.5)' : 'rgba(10, 10, 10, 0.4)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: 'inherit',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.95)',
                    lineHeight: 1.4,
                    flex: 1,
                    paddingRight: '1rem',
                    fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                  }}
                >
                  {item.question}
                </span>
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    color: 'rgba(255, 255, 255, 0.7)',
                    flexShrink: 0,
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div
                  style={{
                    padding: '0 1.5rem 1.25rem',
                  }}
                >
                  <p
                    style={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      lineHeight: 1.6,
                      fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                      margin: 0,
                      paddingTop: '0.75rem',
                      fontFamily: 'var(--font-rubik), Rubik, sans-serif',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


