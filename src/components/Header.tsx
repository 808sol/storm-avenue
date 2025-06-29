'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { useSwipeGesture } from '@/lib/useSwipeGesture'
import { haptic } from '@/lib/haptic'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Add swipe gesture for mobile menu
  useSwipeGesture(menuRef, {
    onSwipeRight: () => {
      if (mobileMenuOpen) {
        haptic.light()
        setMobileMenuOpen(false)
      }
    }
  })

  const navigationItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT US', href: '/contact-us' },
  ]

  const handleMenuToggle = () => {
    haptic.light()
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = () => {
    haptic.light()
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`} style={{ backgroundColor: '#fdfcf3' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo and Brand Text */}
            <Link href="/" className="flex items-center space-x-2 py-3" prefetch={true}>
              <Image
                src="/sa-logo.png"
                alt="Storm Avenue"
                width={120}
                height={120}
                className="h-10 w-auto sm:h-11 md:h-12"
                unoptimized
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-primary-black leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  STORM AVENUE
                </h1>
                <p className="text-xs text-gray-600 font-medium tracking-wide hidden sm:block">
                  ROOFING & CONSTRUCTION
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base lg:text-lg font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-black transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>

              <a
                href="tel:6017570740"
                className="flex items-center space-x-2 text-lg font-bold text-primary-black hover:text-gray-600 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>601-757-0740</span>
              </a>
            </div>

            {/* Mobile: Phone + Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href="tel:6017570740"
                className="flex items-center space-x-1 text-sm font-bold text-primary-black"
                onClick={() => haptic.light()}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xs:inline">601-757-0740</span>
              </a>
              <button
                type="button"
                className="text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={handleMenuToggle}
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      mobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                    }`}
                  >
                    <Menu className="h-6 w-6" />
                  </span>
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                    }`}
                  >
                    <X className="h-6 w-6" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu with animations */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={handleMenuToggle}
        />

        {/* Menu Panel */}
        <div
          ref={menuRef}
          className={`fixed right-0 top-0 h-full w-64 shadow-xl transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: '#fdfcf3' }}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="font-bold text-lg">Menu</h2>
            <button
              type="button"
              className="text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={handleMenuToggle}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="p-4 space-y-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-base font-medium text-gray-900 hover:text-gray-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-100 transform ${
                  mobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200 mt-4">
              <a
                href="tel:6017570740"
                className={`flex items-center space-x-2 text-lg font-bold text-primary-black hover:text-gray-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-100 transform ${
                  mobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? '200ms' : '0ms'
                }}
                onClick={handleNavClick}
              >
                <Phone className="h-5 w-5" />
                <span>601-757-0740</span>
              </a>
            </div>
          </nav>

          {/* Swipe hint */}
          <div
            className={`absolute bottom-4 left-4 right-4 text-center text-xs text-gray-400 transition-opacity duration-500 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}
          >
            Swipe right to close
          </div>
        </div>
      </div>
    </>
  )
}
