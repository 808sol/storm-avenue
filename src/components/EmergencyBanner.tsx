'use client'

import { useState, useEffect } from 'react'
import { Phone, X, AlertTriangle } from 'lucide-react'

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || !isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white shadow-lg animate-slideDown">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Emergency Content - Mobile optimized */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300 animate-pulse flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 min-w-0">
              <span className="font-bold text-xs sm:text-sm md:text-base animate-fadeIn truncate">
                24/7 STORM DAMAGE EMERGENCY
              </span>
              <span className="text-xs md:text-sm opacity-90 animate-fadeIn hidden sm:block" style={{ animationDelay: '0.2s' }}>
                Immediate roof repair & tarping services available
              </span>
            </div>
          </div>

          {/* Call Button and Close */}
          <div className="flex items-center space-x-3">
            <a
              href="tel:6017570740"
              className="flex items-center space-x-2 text-red-600 px-4 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#fdfcf3' }}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">CALL NOW</span>
              <span className="sm:hidden">CALL</span>
            </a>

            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close emergency banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
