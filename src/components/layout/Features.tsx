'use client'

import React from 'react'
import Image from 'next/image'

const Features: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'VICA EXPRESS',
      description: 'Quick wellness sessions designed for your busy lifestyle. Rejuvenate in under an hour.',
      image: '/vica-express.jpg', // Placeholder - add your image to /public/
      bgClass: 'bg-vica-browncardervices/20',
      textClass: 'text-vica-brown',
      buttonClass: 'bg-vica-mint text-vica-greenletter'
    },
    {
      id: 2,
      title: 'VICA HARMONY',
      description: 'Meditation and mindfulness practices to bring peace and balance to your daily life.',
      image: '/vica-harmony.jpg', // Placeholder - add your image to /public/
      bgClass: 'bg-vica-browncardervices/20',
      textClass: 'text-vica-brown',
      buttonClass: 'bg-vica-mint text-vica-greenletter'
    },
    {
      id: 3,
      title: 'VICA GUIDE',
      description: 'Creative art therapy sessions that nurture the soul and encourage self-expression.',
      image: '/vica-guide.jpg', // Placeholder - add your image to /public/
      bgClass: 'bg-vica-browncardervices/20',
      textClass: 'text-vica-brown',
      buttonClass: 'bg-vica-mint text-vica-greenletter'
    },
    {
      id: 4,
      title: 'VICA SENIOR',
      description: 'Specialized wellness programs tailored for our beloved senior community members.',
      image: '/vica-senior.jpg', // Placeholder - add your image to /public/
      bgClass: 'bg-vica-greenletter',
      textClass: 'text-white',
      buttonClass: 'bg-vica-mint text-vica-greenletter',
      isSpecial: true
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-vica-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vica-brown mb-4 font-rufina">
            CARE SOLUTION
          </h2>
          <p className="text-lg text-vica-brown max-w-3xl mx-auto leading-relaxed">
            Explore our range of specialized care services designed to support your wellness journey. 
            From quick rejuvenation sessions to comprehensive programs, we offer personalized solutions 
            for every stage of life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card */}
              <div className={`${service.bgClass} rounded-[30px] overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl`}>
                {/* Image Container */}
                <div className="relative w-full h-48 bg-gray-300 overflow-hidden rounded-t-[30px]">
                  {/* Placeholder for image - will show gray until you add actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                    {service.title}
                    <br />
                    Image Here
                  </div>
                  {/* Uncomment when you add images to /public/
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>

                {/* Content */}
                <div className="p-6 text-center flex flex-col h-full">
                  {/* Title */}
                  <h3 className={`text-lg font-semibold ${service.textClass} mb-3 tracking-wide`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`${service.textClass} text-sm mb-6 leading-relaxed ${service.isSpecial ? 'text-white/90' : 'opacity-80'}`}>
                    {service.description}
                  </p>
                  
                  {/* Button */}
                  <button className={`${service.buttonClass} px-6 py-2 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity mt-auto`}>
                    VIEW SERVICE
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
