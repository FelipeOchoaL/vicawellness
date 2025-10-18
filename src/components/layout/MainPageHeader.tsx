'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const MainPageHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <header className="relative">
      {/* Two-section layout */}
      <div className="flex">
        {/* Left Section - 75% opacity */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-vica/75"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-start items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-white">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M20 5L15 15H25L20 5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M8 35H32"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="text-xl font-light tracking-wide">Vica</div>
                  <div className="text-xs font-light -mt-1 tracking-wider">Wellness</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - 30% opacity */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-vica/30"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center h-16">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8 mr-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center">
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/20">
                  Book now
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white/90 hover:text-white focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full width overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-20">
          <div className="mx-4 px-4 pt-4 pb-6 space-y-2 bg-vica/90 backdrop-blur-sm rounded-lg shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white block px-3 py-2 text-base font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/20">
                Book now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default MainPageHeader
