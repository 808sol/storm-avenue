'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { haptic } from '@/lib/haptic'
import { isIOS } from '@/lib/ios-detection'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isIOSDevice, setIsIOSDevice] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)

    // Detect iOS
    setIsIOSDevice(isIOS())

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

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'} ${
          isIOSDevice ? 'ios-fixed-top' : ''
        }`}
        style={{
          backgroundColor: '#fdfcf3',
          // iOS-specific styles
          ...(isIOSDevice && {
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)'
          })
        }}
      >
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
                    className={`text-base lg:text-lg font-medium transition-all duration-300 relative group ${
                      isActiveLink(item.href)
                        ? 'text-primary-black'
                        : 'text-gray-700 hover:text-primary-black'
                    }`}
                  >
                    <span className={`relative z-10 px-3 py-1 rounded-md transition-all duration-300 ${
                      isActiveLink(item.href)
                        ? 'bg-primary-black/5'
                        : ''
                    }`}>
                      {item.name}
                    </span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary-black transition-all duration-300 ${
                        isActiveLink(item.href)
                          ? 'w-12 opacity-100'
                          : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-50'
                      }`}
                    />
                  </Link>
                ))}
              </nav>

              <a
                href="tel:6017484769"
                className="flex items-center space-x-2 text-lg font-bold text-primary-black hover:text-gray-600 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>(601) 748-4769</span>
              </a>
            </div>

            {/* Mobile: Phone + Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href="tel:6017484769"
                className="flex items-center space-x-1 text-sm font-bold text-primary-black"
                onClick={() => haptic.light()}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xs:inline">(601) 748-4769</span>
              </a>
              <button
                type="button"
                className="text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors mobile-menu-button"
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

      {/* Mobile Navigation Menu - Using Portal */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationItems={navigationItems}
        isIOSDevice={isIOSDevice}
      />
    </>
  )
}
