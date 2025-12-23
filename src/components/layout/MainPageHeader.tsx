'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'

const MainPageHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '#services', hasDropdown: true },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const servicesDropdown = [
    { name: 'VICA HARMONY', href: '/services/vica-harmony', description: 'Meditation and mindfulness practices' },
    { name: 'VICA SENIOR', href: '/services/vica-senior', description: 'Specialized wellness programs' },
    { name: 'VICA SUPPORT', href: '/services/vica-guide', description: 'Creative art therapy sessions' },
  ]

  const handleMouseEnterServices = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeaveServices = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300) // Delay 300ms before closing
    setCloseTimeout(timeout)
  }

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
          <div className="absolute inset-0 bg-vica-brown2"></div>
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
          <div className="absolute inset-0 bg-vica-brown2/75"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center h-24">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8 mr-8">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredLink(item.name)
                      if (item.hasDropdown) {
                        handleMouseEnterServices()
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredLink(null)
                      if (item.hasDropdown) {
                        handleMouseLeaveServices()
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="relative px-3 py-2 text-sm font-medium tracking-wide group block"
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

                    {/* Services Dropdown */}
                    {item.hasDropdown && isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-vica-beige rounded-2xl shadow-2xl overflow-hidden z-50 border border-vica-brown/10"
                        onMouseEnter={handleMouseEnterServices}
                        onMouseLeave={handleMouseLeaveServices}
                      >
                        <div className="py-3">
                          {servicesDropdown.map((service, index) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-6 py-4 hover:bg-vica-brown/10 transition-colors duration-200 group"
                            >
                              <div className="text-sm font-bold text-vica-brown group-hover:text-vica-greenletter transition-colors tracking-wide">
                                {service.name}
                              </div>
                              <div className="text-xs text-vica-brown/70 mt-1 leading-relaxed">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
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
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-white/90 hover:text-white block px-3 py-2 text-base font-medium tracking-wide transition-colors relative group"
                  onClick={(e) => {
                    if (!item.hasDropdown) {
                      handleSmoothScroll(e, item.href)
                      setIsMenuOpen(false)
                    } else {
                      handleSmoothScroll(e, item.href)
                      setIsMenuOpen(false)
                    }
                  }}
                >
                  {item.name}
                  {/* Mobile underline */}
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
                
                {/* Mobile Services Submenu */}
                {item.hasDropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
