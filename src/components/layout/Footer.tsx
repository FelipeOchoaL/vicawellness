'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')

  const services = [
    { name: 'Vica Express', href: '/services/vica-express' },
    { name: 'Vica Harmony', href: '/services/vica-harmony' },
    { name: 'Vica Guide', href: '/services/vica-guide' },
    { name: 'Vica Senior', href: '/services/vica-senior' },
  ]

  const webpages = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Gallery', href: '#' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
  }

  return (
    <footer id="contact" className="bg-vica-brown text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Social Media */}
          <div>
            {/* Logo Placeholder - Add your logo to /public/vica-logo.svg */}
            <div className="mb-6">
              <div className="text-white">
                <div className="text-2xl font-light tracking-wide font-rufina">Vica</div>
                <div className="text-sm font-light -mt-1 tracking-wider">Wellness</div>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="w-10 h-10 border border-white/40 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 border border-white/40 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 border border-white/40 rounded flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">SERVICES</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="relative text-white/90 hover:text-white transition-colors group inline-block"
                  >
                    {link.name}
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Webpage */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">WEBPAGE</h3>
            <ul className="space-y-3">
              {webpages.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="relative text-white/90 hover:text-white transition-colors group inline-block"
                  >
                    {link.name}
                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Up To Date */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide">STAY UP TO DATE</h3>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-transparent border border-white/40 text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-vica-mint text-vica-greenletter font-medium hover:bg-vica-mint/90 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex justify-end">
            <Link 
              href="/services/terms-conditions" 
              className="relative text-white/90 hover:text-white transition-colors group inline-block"
            >
              Terms And Conditions
              {/* Underline animation */}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
