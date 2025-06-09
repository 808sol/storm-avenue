'use client'

import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark as client-side rendered to avoid hydration issues
    setIsClient(true)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial checks
    handleResize()

    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)

    // Preload hero image for better performance
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.src = '/hero-background.jpg'

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{ minHeight: '-webkit-fill-available' }}>
        {/* Background Image with responsive loading */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: 'url(/hero-background.jpg)',
            scale: '1.1',
            backgroundSize: 'cover',
            backgroundPosition: isClient && isMobile ? 'center 30%' : 'center center'
          }}
        />

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
        )}

        {/* Enhanced gradient overlays for mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Mobile-specific gradient for better text readability */}
        {isClient && isMobile && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        )}

        {/* Desktop Content - Top hero text */}
        <div className={`relative z-10 h-full hidden md:flex items-start justify-center px-4 pt-24 md:pt-32 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center max-w-2xl mx-auto">
            {/* Company name/brand - centered */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-fdfcf3 text-3xl md:text-4xl font-bold tracking-wider mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                STORM AVENUE ROOFING
              </h2>
              <div className="w-24 h-0.5 bg-fdfcf3 mx-auto" />
            </div>

            {/* Professional tagline */}
            <div className={`mb-8 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-white/90 text-xl md:text-2xl font-medium tracking-wide">
                Professional • Reliable • Trusted
              </p>
            </div>

            {/* Desktop tagline */}
            <div className={`transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-white/80 text-lg md:text-xl tracking-wide">
                Licensed • Insured • Local Experts
              </p>
            </div>
          </div>
        </div>

        {/* Desktop CTA Buttons - Bottom center, moved up */}
        <div className={`absolute bottom-1/3 left-1/2 transform -translate-x-1/2 hidden md:block transition-all duration-1000 delay-900 z-20 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center space-x-6">
            {/* Get Free Quote Button */}
            <a
              href="/contact-us"
              className="relative group px-8 py-4 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/30 cursor-pointer z-30 pointer-events-auto backdrop-blur-md"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10">GET FREE QUOTE</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Call Now Button - matching style */}
            <a
              href="tel:6017570740"
              className="relative group px-8 py-4 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/30 cursor-pointer z-30 pointer-events-auto backdrop-blur-md"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10">CALL NOW</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>



        {/* Mobile Content - Top-middle hero text overlay */}
        <div className={`relative z-10 h-full flex md:hidden items-start justify-center px-4 pt-24 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center max-w-sm mx-auto">
            {/* Company name/brand - moved up and centered */}
            <div className={`mb-6 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-fdfcf3 text-lg font-bold tracking-wider mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                STORM AVENUE ROOFING
              </h2>
              <div className="w-16 h-0.5 bg-fdfcf3 mx-auto" />
            </div>

            {/* Professional tagline - moved up */}
            <div className={`mb-6 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-white/90 text-lg font-medium tracking-wide">
                Professional • Reliable • Trusted
              </p>
            </div>

            {/* Mobile tagline - moved up */}
            <div className={`transition-all duration-1000 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-white/80 text-sm tracking-wide">
                Licensed • Insured • Local Experts
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
