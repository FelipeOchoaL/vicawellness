'use client'

import React from 'react'
import { Heart, Sparkles, Users, Palette, Brain, Sun } from 'lucide-react'

const Features: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: Heart,
      title: 'Vica Express',
      description: 'Holistic well-being services for mental, emotional, physical, and spiritual balance.',
      bgClass: 'bg-vica-mint',
      textClass: 'text-vica-greenletter',
      iconBg: 'bg-white/20'
    },
    {
      id: 2,
      icon: Sparkles,
      title: 'Vica Harmony',
      description: 'Meditation, breathing exercises, and mindfulness practices for inner peace.',
      bgClass: 'bg-vica-beige',
      textClass: 'text-vica-brown',
      iconBg: 'bg-white/20'
    },
    {
      id: 3,
      icon: Palette,
      title: 'Vica Guide',
      description: 'Art therapy, creative expression, and activities that nurture the soul.',
      bgClass: 'bg-vica-mint',
      textClass: 'text-vica-greenletter',
      iconBg: 'bg-white/20'
    },
    {
      id: 4,
      icon: Brain,
      title: 'Vica Senior',
      description: 'Personal development coaching and emotional support for life challenges.',
      bgClass: 'bg-vica-beige',
      textClass: 'text-vica-brown',
      iconBg: 'bg-white/20'
    },
    {
      id: 5,
      icon: Users,
      title: 'Vica Senior',
      description: 'Specialized wellness programs designed for our senior community members.',
      bgClass: 'bg-vica-greenletter',
      textClass: 'text-white',
      iconBg: 'bg-white/20',
      isSpecial: true
    },
   
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vica-brown mb-4 font-rufina">
            Our Services
          </h2>
          <p className="text-lg text-vica-brown max-w-3xl mx-auto">
            Discover our comprehensive wellness services designed to nurture your mind, body, and spirit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                service.isSpecial ? 'ring-2 ring-vica-greenletter' : ''
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card Background */}
              <div className={`${service.bgClass} p-8 h-full min-h-[320px] flex flex-col justify-between relative`}>
                {/* Decorative Circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full ${service.iconBg} backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.textClass}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-2xl font-bold ${service.textClass} mb-4 font-rufina`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`${service.textClass} ${service.isSpecial ? 'text-white/90' : 'opacity-90'} leading-relaxed`}>
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="relative z-10 mt-6">
                  <button className={`${service.textClass} font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300`}>
                    Learn More
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframe animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Features
