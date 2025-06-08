'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT US', href: '/contact-us' },
  ]

  return (
    <header className="shadow-sm relative z-50">
      <div className="absolute inset-0" style={{ backgroundColor: '#fdfcf3', opacity: 0.5 }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Brand Text - Mobile optimized */}
          <div className="flex items-center space-x-1 sm:space-x-2 py-3">
            <Image
              src="/sa-logo.png"
              alt="Storm Avenue"
              width={120}
              height={120}
              className="h-8 w-auto sm:h-10 md:h-11 lg:h-12"
            />
            <div className="flex flex-col justify-center text-left sm:text-center">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary-black leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                STORM AVENUE
              </h1>
              <p className="text-xs md:text-xs lg:text-xs text-gray-600 font-medium tracking-wide hidden sm:block">
                ROOFING & CONSTRUCTION
              </p>
            </div>
          </div>

          {/* Desktop Navigation and Phone */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base md:text-lg font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-black transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <a
              href="tel:6017570740"
              className="text-lg font-bold text-primary-black hover:text-gray-600 transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="relative z-10">601-757-0740</span>
              <div className="absolute inset-0 bg-light-silver rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 scale-110" />
            </a>
          </div>

          {/* Mobile menu button - Larger touch target */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4" style={{ backgroundColor: '#fdfcf3' }}>
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:6017570740"
                className="block text-lg font-bold text-primary-black hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                601-757-0740
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
