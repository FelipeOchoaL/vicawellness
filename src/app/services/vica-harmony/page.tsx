'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function VicaHarmonyPage() {
  return (
    <>
      <div className="relative">
        {/* Header positioned absolutely over the Hero */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>
      </div>
      
      <main className="pt-24">
        {/* SECTION 1: VICA HARMONY - Beige Background, Images Left, Content Right */}
        <section className="bg-vica-beige min-h-screen py-16 lg:py-24">
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
                      Hands in meditation pose
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/harmony-hands-1.jpg"
                      alt="Meditative hands"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Top Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Singing bowl with smoke
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/harmony-bowl-1.jpg"
                      alt="Singing bowl"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Hands with mallet
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/harmony-bowl-2.jpg"
                      alt="Singing bowl session"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Singing bowl close-up
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/harmony-bowl-3.jpg"
                      alt="Crystal bowl"
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
                    <span className="text-vica-green">VICA</span>
                    <br />
                    <span className="text-vica-brown">HARMONY</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-vica-brown/80 italic mt-4">
                    "let sound guide you back to calm"
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-vica-brown leading-relaxed text-base">
                    Sound healing is a wellness practice that uses sound and vibration, such as those from crystal bowls and ancestral instruments to harmonize the body, mind, and emotions. Through specific frequencies, it helps balance the body&apos;s energy centers (chakras), reduce stress, and mood and promote deep, restorative relaxation.
                  </p>
                </div>

                {/* Benefits Section */}
                <div>
                  <h2 className="text-2xl font-bold text-vica-brown font-rufina mb-4">BENEFITS</h2>
                  <ul className="space-y-2 text-vica-brown text-sm">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Reduces stress & anxiety</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Enhances sleep & relaxation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Relieves pain & inflammation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Improves focus, creativity & calm</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Helps balance and unblock the body&apos;s energy (chakras)</span>
                    </li>
                  </ul>
                </div>

                {/* Sessions Section */}
                <div>
                  <h2 className="text-2xl font-bold text-vica-brown font-rufina mb-4">SESSIONS</h2>
                  <p className="text-vica-brown leading-relaxed text-base mb-4">
                    Using crystal bowls and ancestral instruments, our sound journeys are designed to relax, balance and reconnect. We accompany women, couples, and groups who are seeking wellness.
                  </p>
                  <div className="flex flex-wrap gap-3 text-vica-brown font-medium text-sm">
                    <span>HARMONY</span>
                    <span>•</span>
                    <span>EXPRESSION</span>
                    <span>•</span>
                    <span>GUIDANCE</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INSTINCTIVE ART - Mint Background, Content Left, Images Right */}
        <section className="bg-vica-mint min-h-screen py-16 lg:py-24">
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
                    <span className="text-vica-brown">INSTINCTIVE</span>
                    <br />
                    <span className="text-vica-brown">ART</span>
                  </h2>
                </div>

                {/* Description */}
                <div>
                  <p className="text-vica-brown leading-relaxed text-base">
                    Join our creative workshops and support groups, where art meets therapy. In a welcoming environment, we make you feel fully embraced and at home.
                  </p>
                </div>

                {/* Benefits Section */}
                <div>
                  <h3 className="text-2xl font-bold text-vica-brown font-rufina mb-4">BENEFITS</h3>
                  <ul className="space-y-2 text-vica-brown text-sm">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Decreasing levels of anxiety and stress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Increasing positive emotions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Stimulating memory and concentration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Encouraging self-identity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Improving the motor skills and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>We foster self-love and a meaningful life</span>
                    </li>
                  </ul>
                </div>

                {/* Sessions Section */}
                <div>
                  <h3 className="text-2xl font-bold text-vica-brown font-rufina mb-4">SESSIONS</h3>
                  <p className="text-vica-brown leading-relaxed text-base mb-4">
                    We use accessible, innovative techniques such as:
                  </p>
                  <ul className="space-y-1 text-vica-brown text-sm ml-4">
                    <li>• Collage</li>
                    <li>• Drawing</li>
                    <li>• Painting</li>
                    <li>• Marbling</li>
                    <li>• Different types of natural and handmade patterns.</li>
                  </ul>
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
                      Hand sculpture
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/art-hands.jpg"
                      alt="Hand sculpture art"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Left - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Singing bowl
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/art-bowl-1.jpg"
                      alt="Artistic bowl"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Crystal bowl
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/art-bowl-2.jpg"
                      alt="Crystal bowl art"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Image - Full Width */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Singing bowl session
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/art-bowl-3.jpg"
                      alt="Bowl session"
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
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-vica-brown/10">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-vica-brown font-semibold text-sm mb-1">Loved it!</p>
                      <p className="text-vica-brown/70 text-xs mb-2">Contar sobre la experiencia</p>
                      <p className="text-vica-brown/60 text-xs font-medium">Camila</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Disclaimer Footer */}
      <div className="bg-vica-brown py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-vica-mint text-center text-sm leading-relaxed">
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
