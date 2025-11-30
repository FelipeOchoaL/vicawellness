import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MainPageHeader from '@/components/layout/MainPageHeader'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Vica Harmony | VicaWellness',
  description: 'Let sound guide you back to calm. Sound healing sessions using crystal bowls and ancestral instruments.',
}

export default function VicaHarmonyPage() {
  return (
    <>
      <div className="relative">
        {/* Header positioned absolutely over the Hero */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <MainPageHeader />
        </div>
      </div>
      
      <main className="pt-24 bg-vica-beige min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Images and Testimonials */}
            <div className="space-y-8">
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Top Left - Large Vertical Image */}
                <div className="row-span-2 relative h-full min-h-[400px] rounded-lg overflow-hidden border-2 border-vica-brown/20 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-xs p-4 text-center">
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
                
                {/* Top Right - Horizontal Image */}
                <div className="relative h-48 rounded-lg overflow-hidden border-2 border-vica-brown/20 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-xs p-4 text-center">
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
                
                {/* Bottom Left - Vertical Image */}
                <div className="relative h-48 rounded-lg overflow-hidden border-2 border-vica-brown/20 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-xs p-4 text-center">
                    Hands with mallet and bowl
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
                
                {/* Bottom Right - Vertical Image */}
                <div className="relative h-48 rounded-lg overflow-hidden border-2 border-vica-brown/20 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-xs p-4 text-center">
                    Open book with pillow
                  </div>
                  {/* Uncomment when you add actual images
                  <Image
                    src="/harmony-book.jpg"
                    alt="Wellness reading"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-vica-brown/10">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-vica-brown font-medium text-sm mb-1">Loved it!</p>
                    <p className="text-vica-brown/70 text-xs mb-2">Contar sobre la experiencia</p>
                    <p className="text-vica-brown/60 text-xs">Camila</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2 font-rufina">
                  <span className="text-vica-green">VICA</span>{' '}
                  <span className="text-vica-brown">HARMONY</span>
                </h1>
                <p className="text-xl md:text-2xl text-vica-brown italic mt-2">
                  Let sound guide you back to calm
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-vica-brown leading-relaxed">
                  Sound healing is a wellness practice that uses sound and vibration from crystal bowls 
                  and ancestral instruments to harmonize your body, mind, and emotions. Through carefully 
                  orchestrated frequencies, we help balance your chakras, reduce stress, uplift your mood, 
                  and promote deep relaxation.
                </p>
              </div>

              {/* Benefits Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-vica-brown font-rufina">BENEFITS</h2>
                <ul className="space-y-2 text-vica-brown">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reduces stress & anxiety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhances sleep quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Relieves pain & inflammation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improves focus, creativity & calm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Boosts mood & emotional resilience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Helps balance and unblock the body&apos;s energy (chakras)</span>
                  </li>
                </ul>
              </div>

              {/* Sessions Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-vica-brown font-rufina">SESSIONS</h2>
                <p className="text-vica-brown leading-relaxed">
                  Our guided sound journeys are designed for relaxation, balance, and reconnection. 
                  Whether you&apos;re seeking individual healing or a shared experience, Vica Wellness 
                  accompanies women, couples, and groups on their path to wellness.
                </p>
                <div className="flex flex-wrap gap-4 text-vica-brown font-medium">
                  <span>HARMONY</span>
                  <span>•</span>
                  <span>EXPRESSION</span>
                  <span>•</span>
                  <span>GUIDANCE</span>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="pt-4">
                <Link
                  href="#book"
                  className="bg-vica-greenletter text-white px-8 py-4 rounded-lg text-lg font-medium tracking-wide hover:bg-vica-greenletter/90 transition-colors inline-block w-full text-center"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
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

