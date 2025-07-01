'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const scrollProgress = (scrolled / documentHeight) * 100

      setProgress(Math.min(scrollProgress, 100))
      setIsVisible(scrolled > 100) // Show after scrolling 100px
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Progress bar container */}
      <div
        className={`fixed top-0 left-0 right-0 h-1 bg-transparent z-[100] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ pointerEvents: 'none' }}
      >
        {/* Progress bar background */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Progress bar fill */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-150 ease-out"
          style={{
            width: `${progress}%`,
            boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
          }}
        >
          {/* Glow effect at the end */}
          <div className="absolute right-0 top-0 w-2 h-full bg-white/50 blur-sm" />
        </div>
      </div>

      {/* Percentage indicator - optional, shows on hover */}
      <div
        className={`fixed top-2 right-4 px-2 py-1 bg-black/80 text-white text-xs rounded-full z-[101] transition-all duration-300 ${
          isVisible ? 'opacity-0 hover:opacity-100' : 'opacity-0'
        }`}
      >
        {Math.round(progress)}%
      </div>
    </>
  )
}
