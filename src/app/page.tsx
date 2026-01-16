import { Metadata } from 'next'
import MainPageHeader from '@/components/layout/MainPageHeader'
import Hero from '@/components/layout/Hero'
import Info from '@/components/layout/Info'
import Features from '@/components/layout/Features'
import About from '@/components/layout/About'
import Opinions from '@/components/layout/Opinions'
import Fqa from '@/components/layout/Fqa'
import CTA from '@/components/layout/CTA'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Home | VicaWellness',
  description: 'Welcome to VicaWellness - Your comprehensive health and wellness platform.',
}

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <Hero />
        {/* Header positioned absolutely over the Hero */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <MainPageHeader />
        </div>
      </div>
      <main>
        <Info />
        <About />
        <section id="Features">
          <Features />
        </section>
        <Fqa />
        <Opinions />
      </main>
      <Footer />
    </>
  )
}
