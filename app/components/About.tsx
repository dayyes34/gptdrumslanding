'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" style={{ padding: '40px 20px', background: '#000427', position: 'relative', zIndex: 1 }}>
      {/* Заголовок */}
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
        Знакомься - <span style={{ color: '#ffd700' }}>Покет!</span>
      </h2>

      {/* Контейнер с текстом */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '3rem',
        }}
      >
        <p
          style={{
            color: 'white',
            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
            fontFamily: 'var(--font-rubik), Rubik, sans-serif',
            lineHeight: 1.6,
            textAlign: 'left',
            margin: 0,
          }}
        >
          Хочешь играть свободнее?
          <br />
          Я знаю короткий путь!
        </p>
      </div>

      {/* Часть со сравнениями */}
      <div>
        {/* Горизонтальный разделитель */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)',
            marginBottom: '2rem',
          }}
        />

        {/* Сравнение с названиями над картинками */}
        <div>
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
              поиск уроков
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
              ии-тренер
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
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(255, 74, 80, 0.1)',
              }}
            >
              <Image
                src="/search.webp"
                alt="Поиск уроков"
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
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
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(0, 255, 0, 0.1)',
              }}
            >
              <Image
                src="/ai.webp"
                alt="ИИ-тренер"
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
            maxWidth: '300px',
            marginBottom: '3rem',
          }}
        >
          Быстрее и эффективнее
        </div>

        {/* Второе сравнение: Ноты - живые паттерны */}
        <div>
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.2)',
              marginBottom: '2rem',
            }}
          />
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
              Ноты
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
              живые паттерны
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: '150px',
                border: '3px solid #ff4a50',
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(255, 74, 80, 0.1)',
              }}
            >
              <Image
                src="/notes.webp"
                alt="Ноты"
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div
              style={{
                flex: 1,
                minWidth: '150px',
                border: '3px solid #00ff00',
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(0, 255, 0, 0.1)',
              }}
            >
              <Image
                src="/patterns.webp"
                alt="Живые паттерны"
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
              maxWidth: '300px',
              marginBottom: '3rem',
            }}
          >
            Проще и понятнее
          </div>
        </div>

        {/* Третье сравнение: Перекосы - Симметрия */}
        <div>
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.2)',
              marginBottom: '2rem',
            }}
          />
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
              Перекосы
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
              Симметрия
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: '150px',
                border: '3px solid #ff4a50',
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(255, 74, 80, 0.1)',
              }}
            >
              <Image
                src="/imbalanced.webp"
                alt="Перекосы"
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div
              style={{
                flex: 1,
                minWidth: '150px',
                border: '3px solid #00ff00',
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(0, 255, 0, 0.1)',
              }}
            >
              <Image
                src="/balanced.webp"
                alt="Симметрия"
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
              maxWidth: '300px',
              marginBottom: '3rem',
            }}
          >
            Ровнее и стабильнее
          </div>
        </div>

        {/* Четвертое сравнение: Преподаватель - Карман */}
        <div>
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.2)',
              marginBottom: '2rem',
            }}
          />
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
              Преподаватель
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
              Карман
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                flex: 1,
                minWidth: '150px',
                border: '3px solid #ff4a50',
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(255, 74, 80, 0.1)',
              }}
            >
              <Image
                src="/prepod.webp"
                alt="Преподаватель"
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div
              style={{
                flex: 1,
                minWidth: '150px',
                border: '3px solid #00ff00',
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(0, 255, 0, 0.1)',
              }}
            >
              <Image
                src="/247.webp"
                alt="Карман"
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
              maxWidth: '300px',
            }}
          >
            Всегда с тобой
          </div>
        </div>
      </div>
    </section>
  )
}
