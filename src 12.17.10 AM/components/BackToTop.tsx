'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const toggleVisibility = () => {
      if (typeof window !== 'undefined' && window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', toggleVisibility)
      }
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.smoothScroll) {
      window.smoothScroll(0, {
        duration: 600,
        easing: 'easeOutQuart'
      })
    } else if (typeof window !== 'undefined') {
      // Fallback to native smooth scroll
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted || !isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-8 md:bottom-8 md:right-8 z-[9999999] flex h-12 w-12 items-center justify-center rounded-full bg-primary-black text-white shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  )
}
