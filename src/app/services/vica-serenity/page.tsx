'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function VicaSerenityPage() {
  return (
    <>
      <div className="relative">
        {/* Header positioned absolutely over the Hero */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>
      </div>
      
      <main className="pt-24">
        {/* SECTION 1: VICA SERENITY - Beige Background, Content Left, Images Right */}
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
                    <span className="text-vica-green2_claro">SERENITY</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-vica-brown/80 italic mt-4">
                    "Find stillness within, cultivate inner peace"
                  </p>
                </div>

                {/* Description */}
                <div>
                  <p className="text-vica-brown2 leading-relaxed text-lg mb-4">
                    Vica Serenity offers mindfulness and meditation practices that help you cultivate inner calm 
                    and present-moment awareness.
                  </p>
                  <p className="text-vica-brown2 leading-relaxed text-lg">
                    Through guided meditation, breathwork, and contemplative practices, we support you in 
                    discovering the peaceful center within yourself, even amidst life&apos;s challenges.
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
                      Meditation space
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-space.jpg"
                      alt="Meditation space"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Left - Image */}
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Peaceful setting
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-peaceful.jpg"
                      alt="Peaceful setting"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Middle Right - Image */}
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Mindful practice
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-practice.jpg"
                      alt="Mindful practice"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Image - Full Width */}
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Inner stillness
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-stillness.jpg"
                      alt="Inner stillness"
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

        {/* OUR PRACTICES Section with Overlapping Circles */}
        <div className="relative">
          {/* Brown Header Bar - Much Larger to go through middle of circles */}
          <div className="bg-vica-brown2 py-20 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-vica-beige_claro font-rufina tracking-wide">
              OUR PRACTICES
            </h2>
          </div>

          {/* SECTION 2: Three Circular Service Cards - Beige Background */}
          <section className="bg-vica-beige pt-24 pb-16 lg:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                
                {/* Service Card 1: Guided Meditation */}
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
                      Guided meditation
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-guided.jpg"
                      alt="Guided meditation"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-vica-brown2 text-lg leading-relaxed">
                      Experience deep relaxation through gentle guidance and visualization.
                    </p>
                    <ul className="text-vica-brown2 text-lg space-y-1">
                      <li>• Body scan meditation</li>
                      <li>• Loving-kindness practice</li>
                      <li>• Visualization journeys</li>
                      <li>• Chakra meditation</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Service Card 2: Breathwork */}
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
                      Breathwork practices
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-breath.jpg"
                      alt="Breathwork practices"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-vica-brown2 text-lg leading-relaxed">
                      Harness the power of conscious breathing to calm mind and body.
                    </p>
                    <ul className="text-vica-brown2 text-lg space-y-1">
                      <li>• Pranayama techniques</li>
                      <li>• Box breathing</li>
                      <li>• Coherent breathing</li>
                      <li>• Nervous system regulation</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Service Card 3: Mindfulness */}
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
                      Mindfulness training
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-mindfulness.jpg"
                      alt="Mindfulness training"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-vica-brown2 text-lg leading-relaxed">
                      Cultivate present-moment awareness in everyday life.
                    </p>
                    <ul className="text-vica-brown2 text-lg space-y-1">
                      <li>• Mindful awareness training</li>
                      <li>• Walking meditation</li>
                      <li>• Present-moment practices</li>
                      <li>• Contemplative inquiry</li>
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
                    Our meditation and mindfulness sessions are offered both in-person in Toronto and online, 
                    making serenity accessible wherever you are.
                  </p>
                  <p className="text-vica-brown2 leading-relaxed text-lg">
                    Individual sessions last 60 minutes, and group sessions are 75 minutes. All sessions are 
                    suitable for beginners and experienced practitioners alike.
                  </p>
                </div>

                {/* Benefits Section */}
                <div>
                  <h3 className="text-3xl font-bold text-vica-brown2 font-rufina mb-4">BENEFITS</h3>
                  <p className="text-vica-brown2 leading-relaxed text-lg mb-4">
                    What can you experience through regular practice?
                  </p>
                  <ul className="space-y-2 text-vica-brown text-lg">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Deep relaxation & stress reduction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Enhanced emotional regulation & resilience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Improved focus & mental clarity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Better sleep quality & restoration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Greater self-awareness & inner peace</span>
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
                      Quiet reflection
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-reflection.jpg"
                      alt="Quiet reflection"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Top Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Peaceful moment
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-moment.jpg"
                      alt="Peaceful moment"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Left - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Meditation session
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-session.jpg"
                      alt="Meditation session"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>
                  
                  {/* Bottom Right - Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-xs p-4 text-center">
                      Inner tranquility
                    </div>
                    {/* Uncomment when you add actual images
                    <Image
                      src="/serenity-tranquility.jpg"
                      alt="Inner tranquility"
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
                  <p className="text-vica-brown font-semibold text-lg mb-1 text-center">So peaceful!</p>
                  <p className="text-vica-brown/70 text-lg mb-2 text-center">Contar sobre la experiencia</p>
                  <p className="text-vica-brown/60 text-xs font-medium text-center">Ana</p>
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

