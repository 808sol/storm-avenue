'use client'

import { haptic } from '@/lib/haptic'
import { useEffect, useState } from 'react'
import { isIOS, isIPhone } from '@/lib/ios-detection'
import { Phone, FileText } from 'lucide-react'

export function MobileCTABar() {
  const [isIOSDevice, setIsIOSDevice] = useState(false)

  useEffect(() => {
    setIsIOSDevice(isIOS())
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-black text-white shadow-2xl md:hidden ${
        isIOSDevice ? 'ios-fixed-bottom' : ''
      }`}
      style={{
        // Dynamic padding for iPhone home indicator
        paddingBottom: isIOSDevice ? 'env(safe-area-inset-bottom)' : '0',
        // Backdrop blur for iOS
        backdropFilter: isIOSDevice ? 'blur(12px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isIOSDevice ? 'blur(12px) saturate(180%)' : 'none',
        backgroundColor: isIOSDevice ? 'rgba(0, 0, 0, 0.85)' : 'rgb(0, 0, 0)',
        // Hardware acceleration
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)'
      }}
    >
      <div className="flex">
        <a
          href="tel:+16017484769"
          className="flex-1 flex items-center justify-center gap-2 py-4 px-4 hover:bg-gray-800 transition-all duration-200 active:bg-gray-700 active:scale-[0.98] active:opacity-90"
          aria-label="Call Storm Avenue Roofing"
          onClick={(e) => {
            haptic.medium()
            // iOS-specific call handling
            if (isIPhone()) {
              e.preventDefault()
              window.location.href = 'tel:6017484769'
            }
          }}
          style={{
            // iOS touch optimization
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation',
            minHeight: '44px'
          }}
        >
          <Phone className="h-4 w-4 text-red-500" />
          <span className="font-bold text-sm text-fdfcf3">CALL NOW</span>
        </a>
        <div className="w-px bg-gray-700" />
        <a
          href="/contact-us"
          className="flex-1 flex items-center justify-center gap-2 py-4 px-4 hover:bg-gray-800 transition-all duration-200 active:bg-gray-700 active:scale-[0.98] active:opacity-90"
          aria-label="Get free quote"
          onClick={() => haptic.light()}
          style={{
            // iOS touch optimization
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation',
            minHeight: '44px'
          }}
        >
          <FileText className="h-4 w-4 text-red-500" />
          <span className="font-bold text-sm text-fdfcf3">GET QUOTE</span>
        </a>
      </div>
    </div>
  )
}
