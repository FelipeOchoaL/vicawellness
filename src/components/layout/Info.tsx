'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

const Info: React.FC = () => {
  const { t } = useLanguage()
  
  const services = [
    {
      id: 1,
      icon: '/service-icon-1.svg', // Placeholder - you can add your icon here
      title: t('info.service1'),
      iconPlaceholder: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <circle cx="40" cy="25" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M32 35 C32 35, 30 38, 30 42 C30 46, 32 48, 35 48 L45 48 C48 48, 50 46, 50 42 C50 38, 48 35, 48 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M35 48 L35 55 M45 48 L45 55" stroke="currentColor" strokeWidth="2"/>
          <path d="M28 55 L52 55" stroke="currentColor" strokeWidth="2"/>
          <circle cx="35" cy="42" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      id: 2,
      icon: '/service-icon-2.svg', // Placeholder - you can add your icon here
      title: t('info.service2'),
      iconPlaceholder: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <path d="M25 35 C25 35, 30 25, 40 25 C50 25, 55 35, 55 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M30 35 C30 35, 32 30, 40 30 C48 30, 50 35, 50 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M35 35 C35 35, 37 32, 40 32 C43 32, 45 35, 45 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M40 32 L40 50" stroke="currentColor" strokeWidth="2"/>
          <ellipse cx="40" cy="50" rx="12" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      id: 3,
      icon: '/service-icon-3.svg', // Placeholder - you can add your icon here
      title: t('info.service3'),
      iconPlaceholder: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <path d="M40 50 C40 50, 30 45, 30 35 C30 28, 35 25, 40 25 C45 25, 50 28, 50 35 C50 45, 40 50, 40 50Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M35 50 C35 50, 32 48, 30 45 M45 50 C45 50, 48 48, 50 45" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M25 55 C25 55, 30 50, 40 50 C50 50, 55 55, 55 55" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
  ]

  return (
    <section className="bg-vica-beige py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center text-center">
              {/* Icon Placeholder */}
              <div className="mb-6 text-vica-brown">
                {service.iconPlaceholder}
              </div>
              
              {/* Title */}
              <h3 className="text-base md:text-lg text-vica-brown mb-8 px-4 min-h-[60px] flex items-center">
                {service.title}
              </h3>
              
              {/* CTA Button */}
              <button className="bg-vica-mint text-vica-greenletter px-8 py-2 text-sm font-medium tracking-wide hover:bg-vica-mint/90 transition-colors">
                {t('info.button')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Info
