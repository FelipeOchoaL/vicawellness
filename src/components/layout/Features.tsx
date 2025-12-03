'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

const Features: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'VICA HARMONY',
      slug: 'vica-harmony',
      description: 'Meditation and mindfulness practices to bring peace and balance to your daily life.',
      image: '/vica-harmony.jpg', // Placeholder - add your image to /public/
      bgClass: 'bg-vica-browncardervices/20',
      textClass: 'text-vica-brown',
      buttonClass: 'bg-vica-mint text-vica-greenletter'
    },
    {
      id: 2,
      title: 'VICA SUPPORT',
      slug: 'vica-guide',
      description: 'Creative art therapy sessions that nurture the soul and encourage self-expression.',
      image: '/vica-guide.jpg', // Placeholder - add your image to /public/
      bgClass: 'bg-vica-browncardervices/20',
      textClass: 'text-vica-brown',
      buttonClass: 'bg-vica-mint text-vica-greenletter'
    },
    {
      id: 3,
      title: 'VICA SENIOR',
      slug: 'vica-senior',
      description: 'Specialized wellness programs tailored for our beloved senior community members.',
      image: '/vica-senior.jpg', // Placeholder - add your image to /public/
      bgClass: 'bg-vica-browncardervices/20',
      textClass: 'text-vica-brown',
      buttonClass: 'bg-vica-mint text-vica-greenletter'
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-28 bg-vica-beige scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vica-brown mb-4 font-rufina">
            CARE SOLUTION
          </h2>
          <p className="text-lg text-vica-brown max-w-3xl mx-auto leading-relaxed">
            Explore our range of specialized care services designed to support your wellness journey. 
            From quick rejuvenation sessions to comprehensive programs, we offer personalized solutions 
            for every stage of life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {/* Card */}
              <motion.div 
                className={`${service.bgClass} rounded-[30px] overflow-hidden transition-all duration-300`}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.1, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
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
                  <p className={`${service.textClass} text-sm mb-6 leading-relaxed opacity-80`}>
                    {service.description}
                  </p>
                  
                  {/* Button */}
                  <Link 
                    href={`/services/${service.slug}`}
                    className={`${service.buttonClass} px-6 py-2 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity mt-auto inline-block rounded-md`}
                  >
                    VIEW SERVICE
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
