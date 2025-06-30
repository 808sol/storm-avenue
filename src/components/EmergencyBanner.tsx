'use client'

import { Phone, X, AlertTriangle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { isIOS, isIPhone } from '@/lib/ios-detection'
import { haptic } from '@/lib/haptic'

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isIOSDevice, setIsIOSDevice] = useState(false)

  useEffect(() => {
    setIsIOSDevice(isIOS())
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`w-full bg-red-600 text-white ${isIOSDevice ? 'ios-safe-area-top' : ''}`}
      style={{
        // iOS status bar handling
        ...(isIOSDevice && {
          paddingTop: 'max(0.75rem, env(safe-area-inset-top))',
          position: 'relative',
          zIndex: 50
        })
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Emergency Content */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
            <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300 animate-pulse flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <span className="font-bold text-sm sm:text-base">
                24/7 STORM DAMAGE EMERGENCY
              </span>
              <span className="hidden sm:inline text-sm">
                • Immediate roof repair & tarping services available
              </span>
            </div>
          </div>

          {/* Call Button and Close */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="tel:6017484769"
              onClick={(e) => {
                haptic.medium()
                // iOS-specific call handling
                if (isIPhone()) {
                  e.preventDefault()
                  window.location.href = 'tel:6017484769'
                }
              }}
              className="flex items-center space-x-1.5 bg-white text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors active:scale-95"
              style={{
                // iOS touch optimization
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation'
              }}
            >
              <Phone className="h-4 w-4" />
              <span>CALL NOW</span>
            </a>

            <button
              onClick={() => {
                haptic.light()
                setIsVisible(false)
              }}
              className="text-white hover:text-gray-200 p-1 active:scale-90"
              aria-label="Close emergency banner"
              style={{
                // iOS touch target
                minWidth: '44px',
                minHeight: '44px',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
