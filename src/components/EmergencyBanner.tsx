'use client'

import { Phone, X, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-red-600 text-white">
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
              href="tel:6017570740"
              className="flex items-center space-x-1.5 bg-white text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>CALL NOW</span>
            </a>

            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 p-1"
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
