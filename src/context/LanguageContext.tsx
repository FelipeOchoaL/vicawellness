'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    'nav.home': 'HOME',
    'nav.services': 'SERVICES', 
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    'button.book': 'Book now',
    
    // Hero
    'hero.title': 'VICA WELLNESS',
    'hero.subtitle': 'By Luz Elvira Coach',
    'hero.description': 'At Vica Wellness, we provide comprehensive and holistic well-being services that embrace mental, emotional, physical, and spiritual dimensions. We are here to help you live with vitality and inner balance.',
    'hero.button': 'EXPLORE NOW',
    
    // Info Services
    'info.service1': 'Experiences of inner calm and connection',
    'info.service2': 'Creative activities that nurture the soul and express from the heart.',
    'info.service3': 'Emotional support and spiritual guidance.',
    'info.button': 'VIEW SERVICE',
  },
  es: {
    // Header
    'nav.home': 'INICIO',
    'nav.services': 'SERVICIOS',
    'nav.about': 'ACERCA DE',
    'nav.contact': 'CONTACTO',
    'button.book': 'Reservar ahora',
    
    // Hero
    'hero.title': 'VICA WELLNESS',
    'hero.subtitle': 'Por Luz Elvira Coach',
    'hero.description': 'En Vica Wellness, brindamos servicios integrales y holísticos de bienestar que abarcan las dimensiones mental, emocional, física y espiritual. Estamos aquí para ayudarte a vivir con vitalidad y equilibrio interior.',
    'hero.button': 'EXPLORAR AHORA',
    
    // Info Services
    'info.service1': 'Experiencias de calma interior y conexión',
    'info.service2': 'Actividades creativas que nutren el alma y se expresan desde el corazón.',
    'info.service3': 'Apoyo emocional y orientación espiritual.',
    'info.button': 'VER SERVICIO',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

