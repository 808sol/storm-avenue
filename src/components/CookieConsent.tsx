'use client'

import { useState, useEffect } from 'react'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Show consent after a short delay to simulate the original behavior
    const timer = setTimeout(() => {
      const hasConsented = localStorage.getItem('cookieConsent')
      if (!hasConsented) {
        setShowConsent(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mx-4 max-w-md rounded-lg bg-primary-black p-6 text-white shadow-xl">
        <h3 className="mb-4 text-xl font-bold">THIS WEBSITE USES COOKIES.</h3>
        <p className="mb-6 text-sm leading-relaxed">
          We use cookies to analyze website traffic and optimize your website experience.
          By accepting our use of cookies, your data will be aggregated with all other user data.
        </p>
        <button
          onClick={handleAccept}
          className="w-full rounded-full py-3 px-6 text-sm font-bold text-primary-black hover:opacity-90 transition-colors"
          style={{ backgroundColor: '#fdfcf3' }}
        >
          ACCEPT
        </button>
      </div>
    </div>
  )
}
