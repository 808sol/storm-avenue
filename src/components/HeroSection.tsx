'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { haptic } from '@/lib/haptic'

// Type definition for Network Information API
interface NetworkInformation {
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g'
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation
  mozConnection?: NetworkInformation
  webkitConnection?: NetworkInformation
}

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [videoError, setVideoError] = useState(false)
  const [showManualPlay, setShowManualPlay] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isSlowConnection, setIsSlowConnection] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const heroSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)

    // Check connection speed
    const nav = navigator as NavigatorWithConnection
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection
    if (connection && connection.effectiveType) {
      // Skip video on slow connections
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        setIsSlowConnection(true)
      }
    }

    // Use Intersection Observer to load video when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !shouldLoadVideo && !isSlowConnection) {
          setShouldLoadVideo(true)
        }
      },
      { threshold: 0.1 }
    )

    // Start observing after a short delay
    const observerTimer = setTimeout(() => {
      if (heroSectionRef.current) {
        observer.observe(heroSectionRef.current)
      }
    }, 100)

    // Track scroll for video fade effect only
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
      clearTimeout(observerTimer)
      observer.disconnect()
    }
  }, [isSlowConnection, shouldLoadVideo])

  // Simple video autoplay attempt
  useEffect(() => {
    if (!shouldLoadVideo) return

    const video = videoRef.current
    if (!video) return

    const playVideo = async () => {
      try {
        await video.play()
        setVideoLoaded(true)
      } catch {
        setShowManualPlay(true)
      }
    }

    // Try to play when video is ready
    video.addEventListener('loadeddata', playVideo)

    // Also try on canplaythrough for better compatibility
    video.addEventListener('canplaythrough', playVideo, { once: true })

    return () => {
      video.removeEventListener('loadeddata', playVideo)
    }
  }, [shouldLoadVideo])

  // Manual play handler
  const handleManualPlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      await video.play()
      setVideoLoaded(true)
      setShowManualPlay(false)
    } catch {
      setVideoError(true)
    }
  }

  // Calculate video fade based on scroll
  const videoOpacity = Math.max(0, 1 - scrollY / 600)

  return (
    <>
      <section
        ref={heroSectionRef}
        className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          minHeight: '-webkit-fill-available',
          backgroundColor: '#000' // Black background instead of poster
        }}
      >
        {/* Video Container with Ken Burns effect */}
        <div
          className={`absolute inset-0 w-full h-full ${videoLoaded && !videoError ? 'ken-burns-effect' : ''}`}
          style={{
            opacity: videoOpacity,
            transformOrigin: 'center center'
          }}
        >
          {/* Poster Image Background - Always visible until video loads */}
          <div
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
            style={{
              backgroundImage: `url('/hero-poster.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Video element - Only render when shouldLoadVideo is true and not slow connection */}
          {shouldLoadVideo && !isSlowConnection && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline=""
              preload="metadata" // Changed from "auto" to "metadata"
              poster="/hero-poster.jpg"
              onError={() => setVideoError(true)}
            >
              {/* Multiple sources for different screen sizes */}
              {isMobile ? (
                <source src="/videos/hero-combination-mobile.mp4" type="video/mp4" />
              ) : (
                <source src="/videos/hero-combination.mp4" type="video/mp4" />
              )}
              {/* Fallback to original if optimized versions don't exist */}
              <source src="/videos/hero-combination.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        {/* Manual Play Button (for testing) */}
        {showManualPlay && !videoError && (
          <button
            onClick={handleManualPlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Play Video
            </span>
          </button>
        )}

        {/* Video Loading Animation - Sleek minimal loader */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            {/* Triple ring loader */}
            <div className="relative">
              <div className="w-12 h-12 border-2 border-white/20 rounded-full animate-ping absolute"></div>
              <div className="w-12 h-12 border-2 border-white/30 rounded-full animate-ping absolute" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-12 h-12 border-2 border-t-white/60 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        )}

        {/* Premium Overlay System */}
        {/* Base layer */}
        <div
          className="absolute inset-0 transition-all duration-3000"
          style={{
            background: `linear-gradient(to bottom,
              rgba(0,0,0,0.24) 0%,
              rgba(0,0,0,0.18) 50%,
              rgba(0,0,0,0.3) 100%)`
          }}
        />

        {/* Directional overlay for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/30" />

        {/* Center spotlight for logo prominence */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)'
        }} />

        {/* Premium texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }} />

        {/* Vignette effect for better text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center,
              transparent 0%,
              transparent 20%,
              rgba(0,0,0,0.1) 40%,
              rgba(0,0,0,0.3) 70%,
              rgba(0,0,0,0.5) 90%,
              rgba(0,0,0,0.7) 100%)`
          }}
        />

        {/* Mobile-specific stronger vignette for smaller screens */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background: `radial-gradient(circle at center,
              transparent 0%,
              transparent 15%,
              rgba(0,0,0,0.1) 30%,
              rgba(0,0,0,0.2) 50%,
              rgba(0,0,0,0.4) 80%,
              rgba(0,0,0,0.6) 100%)`
          }}
        />

        {/* Logo Container - separate positioning for mobile/desktop */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1500 delay-500
            ${isMobile ? 'top-[20%] -translate-y-1/2' : 'top-[28%] -translate-y-1/2'}
            ${isLoaded && logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{
            transitionDelay: '500ms'
          }}
        >
          <div className="relative">
            {/* Refined glow - more subtle and professional */}
            <div className="absolute inset-0 blur-3xl opacity-30 bg-white/40 rounded-full scale-150" />

            {/* Logo with enhanced presence */}
            <Image
              src="/storm-avenue-hero-logo.PNG"
              alt="Storm Avenue Roofing"
              width={isMobile ? 140 : 280}
              height={isMobile ? 140 : 280}
              className="relative z-10 opacity-90"
              priority
              unoptimized
              onLoad={() => setLogoLoaded(true)}
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3)) drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
        </div>

        {/* Desktop Content - static position */}
        <div
          className={`absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block text-center z-10 transition-all duration-1200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-3xl mx-auto">
            {/* Main tagline - cleaner, more impactful */}
            <div className={`mb-8 transition-all duration-1200 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-white/95 text-4xl font-extralight tracking-[0.25em] uppercase lg:text-[26px]" style={{
                fontFamily: 'Montserrat, sans-serif',
                textShadow: '0 2px 30px rgba(0,0,0,0.3)',
                letterSpacing: '0.25em'
              }}>
                {['Excellence', 'in', 'Every', 'Detail'].map((word, index) => (
                  <span
                    key={word}
                    className={`inline-block mr-[0.25em] transition-all duration-700 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: isLoaded ? `${500 + index * 150}ms` : '0ms',
                      animation: isLoaded ? `shimmerText 3s ease-in-out ${1.5 + index * 0.2}s infinite` : 'none'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h2>

              {/* Elegant divider */}
              <div className="mt-6 mx-auto flex items-center justify-center gap-3">
                <div className="w-12 h-[0.5px] bg-gradient-to-r from-transparent to-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <div className="w-12 h-[0.5px] bg-gradient-to-l from-transparent to-white/40" />
              </div>
            </div>

            {/* Sub-tagline - refined */}
            <div className={`transition-all duration-1200 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-white/70 text-lg tracking-[0.15em] font-light xl:font-medium">LICENSED • INSURED • TRUSTED
              </p>
            </div>
          </div>
        </div>

        {/* Luxury CTA Buttons - static position */}
        <div
          className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block transition-all duration-1200 delay-900 z-20 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-10">
            {/* Primary CTA - Luxury glass effect */}
            <a
              href="/contact-us"
              className="group relative overflow-hidden transition-all duration-700 transform hover:scale-[1.03] hover:-translate-y-0.5"
            >
              {/* Multi-layer button structure */}
              <div className="relative px-14 py-5">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl bg-white/10" />

                {/* Button background */}
                <div className="absolute inset-0 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/20 lg:mx-[17px] lg:my-[0px] lg:p-[0px]" />

                {/* Gradient shine effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     style={{
                       background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                       transform: 'translateX(-100%)',
                       animation: 'shimmer 0.7s ease-out forwards'
                     }} />

                {/* Button text */}
                <span className="relative z-10 text-white/90 font-light text-[15px] tracking-[0.2em] flex items-center gap-3 uppercase" style={{
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Get Free Quote
                  <svg className="w-4 h-4 transition-all duration-500 group-hover:translate-x-1.5 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Secondary CTA - Elegant outline */}
            <a
              href="tel:6017484769"
              className="group relative overflow-hidden transition-all duration-700 transform hover:scale-[1.03] hover:-translate-y-0.5"
            >
              <div className="relative px-14 py-5">
                {/* Border gradient */}
                <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-white/30 to-white/10">
                  <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm" />
                </div>

                {/* Hover fill */}
                <div className="absolute inset-0 rounded-full bg-white/[0.05] opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* Button text */}
                <span className="relative z-10 text-white/80 group-hover:text-white/90 font-light text-[15px] tracking-[0.2em] flex items-center gap-3 uppercase transition-colors duration-500 lg:text-center xl:font-medium" style={{
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  601-748-4769
                </span>
              </div>
            </a>
          </div>

          {/* Subtle hint text */}
          <p className="text-center mt-6 text-xs tracking-[0.15em] font-light uppercase lg:font-semibold text-[#dad6ce]">
            Free Estimates • 24/7 Emergency Service
          </p>
        </div>

        {/* Mobile Content - optimized positioning */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-10 md:hidden flex flex-col items-center justify-end px-6 pb-20 transition-all duration-1200 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ minHeight: '60vh', paddingTop: '35vh' }}
        >
          <div className="text-center w-full max-w-sm rounded-[0px] mx-[51px] my-[40px] px-[61px] py-[46px]">
            {/* Mobile tagline - positioned below logo with proper spacing */}
            <div className={`mb-6 transition-all duration-1200 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-white text-xl font-light tracking-[0.12em] uppercase" style={{
                fontFamily: 'Montserrat, sans-serif',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                {['Excellence', 'in', 'Every', 'Detail'].map((word, index) => (
                  <span
                    key={word}
                    className={`inline-block mr-[0.12em] transition-all duration-700 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: isLoaded ? `${700 + index * 150}ms` : '0ms',
                      animation: isLoaded ? `shimmerText 3s ease-in-out ${1.5 + index * 0.2}s infinite` : 'none'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </h2>
              <div className="mt-3 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>

            {/* Mobile sub-tagline */}
            <div className={`mb-8 transition-all duration-1200 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-white/70 text-xs tracking-wider uppercase font-normal">
                LICENSED • INSURED • TRUSTED
              </p>
            </div>

            {/* Mobile CTAs - Stacked with improved styling */}
            <div className={`space-y-3 transition-all duration-1200 delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <a
                href="/contact-us"
                className="block relative"
                onClick={() => haptic.light()}
              >
                <div className="relative px-6 py-3.5 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/20" />
                  <span className="relative z-10 text-white/90 font-light text-[13px] tracking-[0.12em] flex items-center justify-center gap-2 uppercase">
                    <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Get Free Quote
                  </span>
                </div>
              </a>

              <a
                href="tel:6017484769"
                className="block relative"
                onClick={() => haptic.light()}
              >
                <div className="relative px-6 py-3.5 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-transparent border border-white/30" />
                  <span className="relative z-10 text-white/80 font-light text-[13px] tracking-[0.12em] flex items-center justify-center gap-2 uppercase">
                    <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    601-748-4769
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile hint text */}
            <p className="text-center text-white/30 tracking-[0.12em] uppercase font-semibold text-[10px] my-[18px]">
              Free Estimates • 24/7 Emergency
            </p>
          </div>
        </div>

        {/* Scroll indicator - subtle and elegant */}
        {videoLoaded && (
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && window.smoothScroll) {
                window.smoothScroll(window.innerHeight, {
                  duration: 1000,
                  easing: 'easeOutQuart'
                })
              }
            }}
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1200 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } cursor-pointer hover:scale-110 focus:outline-none`}
            aria-label="Scroll down"
          >
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white/40 hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        )}
      </section>

      {/* Shimmer animation keyframes */}
      <style jsx global>{`
        @keyframes shimmer {
          to {
            transform: translateX(100%);
          }
        }

        @keyframes kenBurns {
          0% {
            transform: scale(1) translateX(0) translateY(0);
          }
          25% {
            transform: scale(1.08) translateX(-2%) translateY(-1%);
          }
          50% {
            transform: scale(1.1) translateX(2%) translateY(1%);
          }
          75% {
            transform: scale(1.08) translateX(-1%) translateY(2%);
          }
          100% {
            transform: scale(1) translateX(0) translateY(0);
          }
        }

        .ken-burns-effect {
          animation: kenBurns 30s ease-in-out infinite;
          transform-origin: center center;
        }

        @keyframes shimmerText {
          0%, 100% {
            opacity: 0.95;
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            filter: brightness(1.2);
          }
        }

        @keyframes floatText {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </>
  )
}
