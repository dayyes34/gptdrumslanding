import Hero from './components/Hero'
import About from './components/About'
import BeforeAfter from './components/BeforeAfter'
import HowItWorks from './components/HowItWorks'
import AI from './components/AI'
import CTA from './components/CTA'
import FAQ from './components/FAQ'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BeforeAfter />
      <HowItWorks />
      <AI />
      <CTA />
      <FAQ />
    </main>
  )
}

