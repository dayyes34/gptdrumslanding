'use client'

import Image from 'next/image'

export default function AccelerateProgress() {
  return (
    <section 
      id="accelerate-progress" 
      style={{ 
        padding: '0',
        background: 'transparent',
        position: 'relative',
      }}
    >
      <Image
        src="/speedsection.webp"
        alt="Accelerate Progress"
        width={1920}
        height={1080}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
    </section>
  )
}

