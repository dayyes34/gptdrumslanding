import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero">
      <Image
        src="/spacebg.webp"
        alt="Space background"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        priority
      />
      <h1>Умный тренажер барабанщика</h1>
    </section>
  )
}

