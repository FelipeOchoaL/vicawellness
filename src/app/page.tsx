import { Metadata } from 'next'
import MainPageHeader from '@/components/layout/MainPageHeader'
import Hero from '@/components/layout/Hero'
import Features from '@/components/layout/Features'
import About from '@/components/layout/About'
import CTA from '@/components/layout/CTA'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Home | VicaWellness',
  description: 'Welcome to VicaWellness - Your comprehensive health and wellness platform.',
}

export default function HomePage() {
  return (
    <>
      <MainPageHeader />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
