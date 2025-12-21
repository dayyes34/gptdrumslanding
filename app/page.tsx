import Hero from './components/Hero'
import WhyGptDrums from './components/WhyGptDrums'
import About from './components/About'
import BeforeAfter from './components/BeforeAfter'
import HowItWorks from './components/HowItWorks'
import AccelerateProgress from './components/AccelerateProgress'
import AI from './components/AI'
import GetStarted from './components/GetStarted'
import AdditionalFeatures from './components/AdditionalFeatures'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FAQ from './components/FAQ'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyGptDrums />
      <About />
      <BeforeAfter />
      <HowItWorks />
      <AccelerateProgress />
      <AI />
      <GetStarted />
      <AdditionalFeatures />
      <Pricing />
      <CTA />
      <FAQ />
    </main>
  )
}

