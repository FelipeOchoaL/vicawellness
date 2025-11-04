'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'

const MainPageHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        // Use scrollIntoView for better compatibility
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      } else {
        console.warn(`Element with id "${targetId}" not found`)
      }
    }
  }

  return (
    <header className="relative">
      {/* Two-section layout */}
      <div className="flex">
        {/* Left Section - Brown with opacity */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-vica-mint"></div>
          <div className="absolute inset-0 bg-vica-brown/75"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-start items-center h-24">
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

        {/* Right Section - Background Image with brown overlay */}
        <div className="w-1/2 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/wellness-bg.jpg')"
            }}
          ></div>
          <div className="absolute inset-0 bg-vica-brown/75"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center h-24">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8 mr-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="relative px-3 py-2 text-sm font-medium tracking-wide group"
                    onMouseEnter={() => setHoveredLink(item.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative z-10 text-white/90 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                    {/* Underline animation */}
                    <motion.div
                      className="absolute bottom-1 left-3 right-3 h-[2px] bg-white"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: hoveredLink === item.name ? 1 : 0,
                        opacity: hoveredLink === item.name ? 1 : 0
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                      }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center">
                <button className="bg-vica-mint backdrop-blur-sm text-vica-greenletter px-6 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/20">
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
        <motion.div 
          className="md:hidden absolute top-24 left-0 right-0 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="mx-4 px-4 pt-4 pb-6 space-y-2 bg-vica-brown/90 backdrop-blur-sm rounded-lg shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white block px-3 py-2 text-base font-medium tracking-wide transition-colors relative group"
                onClick={(e) => {
                  handleSmoothScroll(e, item.href)
                  setIsMenuOpen(false)
                }}
              >
                {item.name}
                {/* Mobile underline */}
                <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-white/20 backdrop-blur-sm text-vica-greenletter px-6 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/20">
                Book now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default MainPageHeader
