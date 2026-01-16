import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Vica Support | VicaWellness',
  description: 'Creative art therapy sessions that nurture the soul and encourage self-expression.',
}

export default function VicaGuidePage() {
  return (
    <>
      <div className="relative">
        {/* Header positioned absolutely over the Hero */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>
      </div>
      
      <main className="pt-24 bg-vica-beige2 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Images and Testimonials */}
            <div className="space-y-8">
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Top Left - Large Vertical Image */}
                <div className="row-span-2 relative h-full min-h-[400px] rounded-lg overflow-hidden border-2 border-vica-brown/20 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-xs p-4 text-center">
                    Art therapy session
                  </div>
                  {/* Uncomment when you add actual images
                  <Image
                    src="/guide-art-1.jpg"
                    alt="Art therapy session"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
                
                {/* Top Right - Horizontal Image */}
                <div className="relative h-48 rounded-lg overflow-hidden border-2 border-vica-brown/20 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-xs p-4 text-center">
                    Creative expression
                  </div>
                  {/* Uncomment when you add actual images
                  <Image
                    src="/guide-creative.jpg"
                    alt="Creative expression"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
                
                {/* Bottom Left - Vertical Image */}
                <div className="relative h-48 rounded-lg overflow-hidden border-2 border-vica-brown/20 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-xs p-4 text-center">
                    Art materials
                  </div>
                  {/* Uncomment when you add actual images
                  <Image
                    src="/guide-materials.jpg"
                    alt="Art materials"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
                
                {/* Bottom Right - Vertical Image */}
                <div className="relative h-48 rounded-lg overflow-hidden border-2 border-vica-brown/20 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-xs p-4 text-center">
                    Self-discovery
                  </div>
                  {/* Uncomment when you add actual images
                  <Image
                    src="/guide-discovery.jpg"
                    alt="Self-discovery"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-vica-brown2/10">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-vica-brown font-medium text-lg mb-1">Inspiring & healing!</p>
                    <p className="text-vica-brown/70 text-lg mb-2">Contar sobre la experiencia</p>
                    <p className="text-vica-brown/60 text-lg">Maria</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2 font-rufina">
                  <span className="text-vica-green2_claro">VICA</span>{' '}
                  <span className="text-vica-brown2">SUPPORT</span>
                </h1>
                <p className="text-xl md:text-2xl text-vica-brown2 italic mt-2">
                  Express yourself, heal your soul
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-vica-brown2 leading-relaxed text-lg">
                  Vica Support offers creative art therapy sessions that nurture your soul and encourage 
                  self-expression. Through various artistic mediums, we guide you on a journey of 
                  self-discovery, emotional healing, and personal growth. Art becomes your language 
                  for expressing what words cannot capture.
                </p>
              </div>

              {/* Benefits Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-vica-brown2 font-rufina">BENEFITS</h2>
                <ul className="space-y-2 text-vica-brown2 text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Encourages self-expression & creativity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Facilitates emotional release & healing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Promotes self-discovery & awareness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reduces anxiety & stress through creative flow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Builds confidence & self-esteem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Provides non-verbal communication & processing</span>
                  </li>
                </ul>
              </div>

              {/* Sessions Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-vica-brown2 font-rufina">SESSIONS</h2>
                <p className="text-vica-brown2 leading-relaxed text-lg">
                  Our art therapy sessions are designed to help you explore your inner world through 
                  creative expression. Whether you&apos;re an experienced artist or have never picked 
                  up a brush, Vica Support provides a safe, supportive space for healing and growth. 
                  We work with individuals and groups, using various artistic mediums to facilitate 
                  your wellness journey.
                </p>
                <div className="flex flex-wrap gap-4 text-vica-brown2 font-medium text-lg">
                  <span>CREATIVITY</span>
                  <span>•</span>
                  <span>EXPRESSION</span>
                  <span>•</span>
                  <span>HEALING</span>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="pt-4">
                <Link
                  href="#book"
                  className="bg-vica-green2_claro text-white px-8 py-4 rounded-lg text-lg font-medium tracking-wide hover:bg-vica-green2/90 transition-colors inline-block w-full text-center"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
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

