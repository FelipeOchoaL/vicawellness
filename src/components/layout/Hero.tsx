import React from 'react'
import { ArrowRight, Heart, Activity, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen">
      {/* Left Section - Mint Green */}
      <div className="w-1/2 relative">
        <div className="absolute inset-0 bg-vica-beige_claro"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            {/* Hero Content */}
            <h1 className="text-4xl md:text-5xl font-bold text-vica-brown2 mb-4 font-rufina">
              VICA WELLNESS
            </h1>
            <p className="text-xl font-bold text-vica-brown2 mb-6 font-rufina">
              By Luz Elvira Coach
            </p>
            <p className="text-lg text-vica-brown2 mb-8 leading-relaxed">
              At Vica Wellness, we provide comprehensive and 
              holistic well-being services that embrace 
              mental, emotional, physical, and spiritual 
              dimensions. We are here to help you live with vitality and 
              inner balance.
            </p>
            
            {/* CTA Button */}
            <Button size="lg" className="text-beige_claro px-8 bg-vica-green2 hover:bg-vica-green2_oscuro text-vica-beige_claro font-semibold">
              EXPLORE NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section - Background Image */}
      <div className="w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/wellness-bg.jpg')"
          }}
        ></div>
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </section>
  )
}

export default Hero