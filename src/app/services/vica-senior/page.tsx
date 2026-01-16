'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function VicaSeniorPage() {
  return (
    <>
      <div className="relative">
        {/* Header positioned absolutely over the Hero */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>
      </div>
      
      <main className="pt-24">
        {/* SECTION 1: VICA SENIOR - Mint Background, Content Left, Images Right */}
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
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 font-rufina leading-tight">
                    <span className="text-vica-brown2">VICA</span>
                    <br />
                    <span className="text-vica-green2_claro">SENIOR</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-vica-brown/80 italic mt-4">
                    "A space to navigate change, grief, and the search for meaning"
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-vica-brown2 leading-relaxed text-lg mb-4">
                    Vica Guide accompanies you through meaningful moments in your life — times of loss, transition, and the search for purpose.
                  </p>
                  <p className="text-vica-brown2 leading-relaxed text-lg">
                    Through self-awareness tools such as coaching, the Enneagram, transpersonal grief work, and art therapy, you&apos;ll find a path toward clarity, inner strength, and calm.
                  </p>
                </div>

                {/* Book Now Button */}
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-vica-greenletter text-vica-beige_claro px-8 py-4 rounded-full text-base font-medium tracking-wide hover:bg-vica-greenletter/90 transition-colors shadow-lg"
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
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-sm p-4 text-center">
                      Hand sculpture
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/senior-sculpture.jpg"
                      alt="Hand sculpture"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Left - Image */}
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Wellness tools
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/senior-tools.jpg"
                      alt="Wellness tools"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Right - Image */}
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Candles & light
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/senior-candles.jpg"
                      alt="Candles and light"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Image - Full Width */}
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Wellness session
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/senior-session.jpg"
                      alt="Wellness session"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES Section with Overlapping Circles */}
        <div className="relative">
          {/* Brown Header Bar - Much Larger to go through middle of circles */}
          <div className="bg-vica-brown2 py-20 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-vica-beige_claro font-rufina tracking-wide">
              OUR SERVICES
            </h2>
          </div>

          {/* SECTION 2: Three Circular Service Cards - Beige Background */}
          <section className="bg-vica-beige pt-24 pb-16 lg:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                
                {/* Service Card 1: Creative Activities */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center -mt-44"
                >
                  {/* Circular Image with Brown Border */}
                  <div className="relative w-44 h-44 mb-6 rounded-full overflow-hidden shadow-lg bg-vica-beige_claro border-8 border-vica-brown">
                    <div className="absolute inset-0 flex items-center justify-center text-vica-brown text-xs p-4">
                      Art materials
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/service-art.jpg"
                      alt="Creative art activities"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-vica-brown2 text-lg leading-relaxed">
                      Creative activities using a variety of art materials.
                    </p>
                    <ul className="text-vica-brown2 text-lg space-y-1">
                      <li>• Encourage self-expression</li>
                      <li>• Stimulate imagination</li>
                      <li>• Inspire hope</li>
                      <li>• A safe space for people</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Service Card 2: Musical Activities */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center -mt-44"
                >
                  {/* Circular Image with Brown Border */}
                  <div className="relative w-44 h-44 mb-6 rounded-full overflow-hidden shadow-lg bg-vica-beige_claro border-8 border-vica-brown">
                    <div className="absolute inset-0 flex items-center justify-center text-vica-brown text-xs p-4">
                      Musical instruments
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/service-music.jpg"
                      alt="Musical activities"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-vica-brown2 text-lg leading-relaxed">
                      Musical activities with simple instruments and music from past decades.
                    </p>
                    <ul className="text-vica-brown2 text-lg space-y-1">
                      <li>• Stimulate memory</li>
                      <li>• Encourage body movement</li>
                      <li>• <em>Recommended for people with Alzheimer&apos;s or any type of dementia</em></li>
                    </ul>
                  </div>
                </motion.div>

                {/* Service Card 3: Care Sessions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center -mt-44"
                >
                  {/* Circular Image with Brown Border */}
                  <div className="relative w-44 h-44 mb-6 rounded-full overflow-hidden shadow-lg bg-vica-beige_claro border-8 border-vica-brown">
                    <div className="absolute inset-0 flex items-center justify-center text-vica-brown text-xs p-4">
                      Essential oils
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/service-care.jpg"
                      alt="Care sessions"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-vica-brown2 text-lg leading-relaxed">
                      Sesiones de cariño a través de sonidos relajantes y aceites esenciales.
                    </p>
                    <ul className="text-vica-brown2 text-lg space-y-1">
                      <li>• Contribuyen a la relajación y disminución de la ansiedad</li>
                      <li>• Mejoran el estado de ánimo</li>
                      <li>• <em>Recomendamos para reajuste de patrones de sueño</em></li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        {/* SECTION 3: Sessions & Benefits - Beige Background, Content Left, Images Right */}
        <section className="bg-vica-beige2 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column - Sessions & Benefits */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Sessions Section */}
                <div>
                  <h3 className="text-3xl font-bold text-vica-brown2 font-rufina mb-4">SESSIONS</h3>
                  <p className="text-vica-brown2 leading-relaxed text-lg mb-4">
                    Each session is a one-on-one experience, offered in person in Toronto or Spanish.
                  </p>
                  <p className="text-vica-brown2 leading-relaxed text-lg">
                    Every session lasts about 60 minutes and is designed to gently guide you through your personal process.
                  </p>
                </div>

                {/* Benefits Section */}
                <div>
                  <h3 className="text-3xl font-bold text-vica-brown2 font-rufina mb-4">BENEFITS</h3>
                  <p className="text-vica-brown2 leading-relaxed text-lg mb-4">
                    What can you experience through this guidance?
                  </p>
                  <ul className="space-y-2 text-vica-brown text-lg">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Emotional support and compassionate care through grief</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Symbolic expression through art to heal and your process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Reduce feelings of loneliness and isolation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Clarity of self and personal purpose</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>A safe space to reconnect with yourself</span>
                    </li>
                  </ul>
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
                  {/* Top Left - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Candles & healing
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/session-candles.jpg"
                      alt="Healing candles"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Top Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Light & shadow
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/session-light.jpg"
                      alt="Light and shadow"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Left - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Singing bowl
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/session-bowl.jpg"
                      alt="Singing bowl"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Hand sculpture art
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/session-sculpture.jpg"
                      alt="Sculpture art"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Testimonials */}
        <section className="bg-vica-beige2 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
            >
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md border border-vica-brown2/10"
                >
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-vica-brown font-semibold text-lg mb-1 text-center">Loved it!</p>
                  <p className="text-vica-brown/70 text-lg mb-2 text-center">Contar sobre la experiencia</p>
                  <p className="text-vica-brown/60 text-xs font-medium text-center">Camila</p>
                </motion.div>
              ))}
            </motion.div>
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
