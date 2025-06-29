'use client'

import { haptic } from '@/lib/haptic'

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white shadow-2xl md:hidden">
      <div className="flex">
        <a
          href="tel:+16017570740"
          className="flex-1 flex items-center justify-center py-3 px-4 hover:bg-gray-800 transition-all duration-200 active:bg-gray-700 active:scale-95"
          aria-label="Call Storm Avenue Roofing"
          onClick={() => haptic.medium()}
        >
          <span className="font-bold text-sm text-fdfcf3">CALL NOW</span>
        </a>
        <div className="w-px bg-gray-600" />
        <a
          href="/contact-us"
          className="flex-1 flex items-center justify-center py-3 px-4 hover:bg-gray-800 transition-all duration-200 active:bg-gray-700 active:scale-95"
          aria-label="Get free quote"
          onClick={() => haptic.medium()}
        >
          <span className="font-bold text-sm text-fdfcf3">GET QUOTE</span>
        </a>
      </div>
    </div>
  )
}
