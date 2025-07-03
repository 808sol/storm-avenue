'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Phone } from 'lucide-react'
import { haptic } from '@/lib/haptic'
import { useSwipeGesture } from '@/lib/useSwipeGesture'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigationItems: { name: string; href: string }[]
  isIOSDevice: boolean
}

export function MobileMenu({ isOpen, onClose, navigationItems, isIOSDevice }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const portalRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Create portal container if it doesn't exist
    if (!portalRef.current) {
      portalRef.current = document.createElement('div')
      portalRef.current.id = 'mobile-menu-portal'
      document.body.appendChild(portalRef.current)
    }

    return () => {
      // Cleanup portal container
      if (portalRef.current && document.body.contains(portalRef.current)) {
        document.body.removeChild(portalRef.current)
      }
    }
  }, [])

  // Add swipe gesture for mobile menu
  useSwipeGesture(menuRef, {
    onSwipeRight: () => {
      if (isOpen) {
        haptic.light()
        onClose()
      }
    }
  })

  const handleNavClick = () => {
    haptic.light()
    onClose()
  }

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  if (!portalRef.current) return null

  return createPortal(
    <>
      {/* Backdrop with fade-in animation */}
      <div
        className={`${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 2147483646,
          animation: isOpen ? 'fadeIn 0.3s ease-out' : '',
          opacity: isOpen ? 1 : 0,
        }}
      />

      {/* Menu Panel with slide and fade animation */}
      <div
        ref={menuRef}
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-100%',
          bottom: 0,
          width: '256px',
          height: '100vh',
          backgroundColor: '#fdfcf3',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.25)',
          transition: 'right 0.3s ease-out, opacity 0.3s ease-out',
          zIndex: 2147483647,
          display: 'block',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          opacity: isOpen ? 1 : 0,
        }}
      >
        {/* Menu content */}
        <div className="flex flex-col h-full">
          {/* Fixed Menu Header */}
          <div
            className="flex-shrink-0 bg-[#fdfcf3] flex items-center justify-between p-4 border-b border-gray-200"
            style={{ paddingTop: isIOSDevice ? 'calc(1rem + env(safe-area-inset-top))' : '1rem' }}
          >
            <h2 className="font-bold text-lg text-gray-900">Menu</h2>
            <button
              type="button"
              className="text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Scrollable Menu Content */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-medium transition-all duration-300 py-3 px-4 rounded-lg relative ${
                    isActiveLink(item.href)
                      ? 'bg-primary-black/5 text-primary-black'
                      : 'text-gray-700 hover:text-primary-black hover:bg-gray-50'
                  }`}
                  onClick={handleNavClick}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    {isActiveLink(item.href) && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-black rounded-r-full" />
                    )}
                  </span>
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200 mt-4">
                <a
                  href="tel:6017484769"
                  className="flex items-center space-x-2 text-lg font-bold text-primary-black hover:text-gray-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-100"
                  onClick={handleNavClick}
                >
                  <Phone className="h-5 w-5" />
                  <span>(601) 748-4769</span>
                </a>
              </div>
            </nav>
          </div>

          {/* Footer with safe area */}
          <div
            className="flex-shrink-0 p-4 text-center text-xs text-gray-400"
            style={{
              paddingBottom: isIOSDevice ? `calc(1rem + env(safe-area-inset-bottom))` : '1rem'
            }}
          >
            Swipe right to close
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>,
    portalRef.current
  )
}
