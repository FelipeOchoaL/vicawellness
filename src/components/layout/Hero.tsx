'use client'

import React from 'react'
import { ArrowRight, Heart, Activity, Users } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'

const Hero: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section className="relative flex min-h-screen">
      {/* Left Section - Mint Green */}
      <div className="w-1/2 relative">
        <div className="absolute inset-0 bg-vica-mint"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            {/* Hero Content */}
            <h1 className="text-4xl md:text-5xl font-bold text-vica-greenletter mb-4 font-rufina">
              {t('hero.title')}
            </h1>
            <p className="text-lg font-bold text-vica-greenletter mb-6 font-rufina">
              {t('hero.subtitle')}
            </p>
            <p className="text-base text-vica-greenletter mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            
            {/* CTA Button */}
            <Button size="lg" className="text-base px-8 bg-vica-brown hover:bg-vica-brown/90 text-white">
              {t('hero.button')}
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section - Background Image */}
      <div className="w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/wellness-bg.jpg')"
          }}
        ></div>
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </section>
  )
}

export default Hero