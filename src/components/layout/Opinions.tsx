'use client'

import React from 'react'
import { Star } from 'lucide-react'

const Opinions: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Texto introductorio para ofrecer tus servicios de sound healing, tu trabajo de arte y adultos mayores',
      name: 'Jacobo',
      rating: 5
    },
    {
      id: 2,
      text: 'Texto introductorio para ofrecer tus servicios de sound healing, tu trabajo de arte y adultos mayores',
      name: 'Camila',
      rating: 5
    },
    {
      id: 3,
      text: 'Texto introductorio para ofrecer tus servicios de sound healing, tu trabajo de arte y adultos mayores',
      name: 'Felipe',
      rating: 5
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-vica-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vica-brown font-rufina">
            Transformative Client Experience
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-vica-mint rounded-[40px] p-10 relative flex flex-col min-h-[280px] shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  width="50"
                  height="40"
                  viewBox="0 0 40 32"
                  fill="none"
                  className="text-vica-brown/40"
                >
                  <path
                    d="M0 17.92C0 10.88 2.24 5.44 6.72 1.6L11.2 5.6C8.32 8.48 6.88 11.84 6.88 15.68C6.88 16.32 6.96 16.96 7.12 17.6C8.16 17.28 9.36 17.12 10.72 17.12C15.84 17.12 19.68 20.8 19.68 26.08C19.68 31.04 15.84 32 10.88 32C4.48 32 0 27.52 0 17.92ZM20.32 17.92C20.32 10.88 22.56 5.44 27.04 1.6L31.52 5.6C28.64 8.48 27.2 11.84 27.2 15.68C27.2 16.32 27.28 16.96 27.44 17.6C28.48 17.28 29.68 17.12 31.04 17.12C36.16 17.12 40 20.8 40 26.08C40 31.04 36.16 32 31.2 32C24.8 32 20.32 27.52 20.32 17.92Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-vica-brown mb-10 leading-relaxed flex-grow text-base">
                {testimonial.text}
              </p>

              {/* Name and Stars */}
              <div className="mt-auto space-y-3">
                <h4 className="text-vica-brown font-semibold text-lg">
                  {testimonial.name}
                </h4>
                
                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Opinions

