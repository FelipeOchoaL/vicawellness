'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function VicaJoyPage() {
  return (
    <>
      <div className="relative">
        {/* Header positioned absolutely over the Hero */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>
      </div>
      
      <main className="pt-24">
        {/* SECTION 1: VICA JOY - Beige Background, Images Left, Content Right */}
        <section className="bg-vica-beige2 min-h-screen py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column - Images */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Top Left - Large Vertical Image */}
                  <div className="row-span-2 relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-sm p-4 text-center">
                      Dance movement
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/joy-dance-1.jpg"
                      alt="Dance movement"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Top Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Joyful expression
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/joy-expression.jpg"
                      alt="Joyful expression"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Movement therapy
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/joy-movement.jpg"
                      alt="Movement therapy"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Group dance session
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/joy-group.jpg"
                      alt="Group dance session"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8 lg:pt-8"
              >
                {/* Title */}
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 font-rufina leading-tight">
                    <span className="text-vica-brown2">VICA</span>
                    <br />
                    <span className="text-vica-green2_claro">JOY</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-vica-brown2/80 italic mt-4">
                    "Move your body, free your spirit"
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-vica-brown2 leading-relaxed text-lg">
                    Vica Joy celebrates the healing power of movement and dance. Through expressive movement therapy, 
                    rhythmic dance, and somatic practices, we help you reconnect with your body, release tension, 
                    and experience the pure joy of physical expression. Let your body lead you to freedom and lightness.
                  </p>
                </div>

                {/* Benefits Section */}
                <div>
                  <h2 className="text-2xl font-bold text-vica-brown2 font-rufina mb-4">BENEFITS</h2>
                  <ul className="space-y-2 text-vica-brown2 text-lg">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Release physical & emotional tension</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Boost mood & energy levels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Improve body awareness & coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Connect with your authentic self</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Experience joy & playfulness</span>
                    </li>
                  </ul>
                </div>

                {/* Sessions Section */}
                <div>
                  <h2 className="text-2xl font-bold text-vica-brown2 font-rufina mb-4">SESSIONS</h2>
                  <p className="text-vica-brown leading-relaxed text-lg mb-4">
                    Our movement sessions welcome all bodies and abilities. Whether you prefer gentle somatic 
                    exploration or energetic dance, we offer a safe space for you to move freely and joyfully. 
                    Individual and group sessions available.
                  </p>
                  <div className="flex flex-wrap gap-3 text-vica-brown2 font-medium text-lg">
                    <span>MOVEMENT</span>
                    <span>•</span>
                    <span>FREEDOM</span>
                    <span>•</span>
                    <span>JOY</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: MOVEMENT MODALITIES - Mint Background, Content Left, Images Right */}
        <section className="bg-vica-beige_claro min-h-screen py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column - Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8 lg:pt-8"
              >
                {/* Title */}
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 font-rufina leading-tight">
                    <span className="text-vica-brown2">MOVEMENT</span>
                    <br />
                    <span className="text-vica-brown2">MODALITIES</span>
                  </h2>
                </div>

                {/* Description */}
                <div>
                  <p className="text-vica-brown2 leading-relaxed text-lg">
                    We offer diverse movement practices designed to meet you where you are and guide 
                    you toward embodied wellness and joy.
                  </p>
                </div>

                {/* Modalities Section */}
                <div>
                  <h3 className="text-2xl font-bold text-vica-brown2 font-rufina mb-4">WHAT WE OFFER</h3>
                  <ul className="space-y-2 text-vica-brown2 text-lg">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Expressive dance therapy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Somatic movement practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Authentic movement exploration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Rhythmic & ecstatic dance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Gentle movement for all ages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Body-centered mindfulness</span>
                    </li>
                  </ul>
                </div>

                {/* Additional Info */}
                <div>
                  <p className="text-vica-brown2 leading-relaxed text-lg italic">
                    No dance experience necessary. All you need is an open heart and a willingness 
                    to explore movement in your own unique way.
                  </p>
                </div>

                {/* Book Now Button */}
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-vica-greenletter text-white px-8 py-4 rounded-full text-base font-medium tracking-wide hover:bg-vica-greenletter/90 transition-colors shadow-lg"
                  >
                    BOOK NOW
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column - Images */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Top Image - Full Width */}
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-sm p-4 text-center">
                      Expressive movement
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/joy-expressive.jpg"
                      alt="Expressive movement"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Left - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Dance flow
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/joy-flow.jpg"
                      alt="Dance flow"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Body wisdom
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/joy-wisdom.jpg"
                      alt="Body wisdom"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Image - Full Width */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Joyful community
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/joy-community.jpg"
                      alt="Joyful community"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                </div>

                {/* Testimonials */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
                >
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-vica-brown2/10">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-vica-brown2 font-semibold text-lg mb-1">Life-changing!</p>
                      <p className="text-vica-brown2/70 text-lg mb-2">Contar sobre la experiencia</p>
                      <p className="text-vica-brown2/60 text-lg font-medium">Laura</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Disclaimer Footer */}
      <div className="bg-vica-green2 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-vica-beige_claro text-center text-sm leading-relaxed">
            OUR SERVICES SUPPORT YOUR WELL-BEING, BUT THEY DO NOT REPLACE MEDICAL CARE. 
            PLEASE SEEK PROFESSIONAL HELP IF NEEDED.
          </p>
        </div>
      </div>
      
      {/* Full Footer */}
      <Footer />
    </>
  )
}

