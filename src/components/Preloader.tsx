'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Simulate loading progress with predictable increments
    let progressStep = 0
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        progressStep += 1
        return Math.min(prev + (10 + progressStep * 2), 100)
      })
    }, 100)

    // Cleanup on unmount
    return () => clearInterval(timer)
  }, [])

  if (!isMounted || !isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: '#fdfcf3' }}>
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <Image
            src="/sa-logo.png"
            alt="Storm Avenue"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-primary-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          STORM AVENUE
        </h2>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-black transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Percentage */}
        <p className="mt-4 text-sm text-gray-600">
          Loading... {Math.round(progress)}%
        </p>
      </div>
    </div>
  )
}
