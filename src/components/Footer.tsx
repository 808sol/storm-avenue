import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">

            {/* Storm Avenue Branding */}
            <div className="flex items-center space-x-2">
              <Image
                src="/storm-avenue-hero-logo.PNG"
                alt="Storm Avenue Roofing - Brandon, Madison, Ridgeland, Flowood, Clinton MS"
                width={40}
                height={40}
                className="h-10 w-auto"
                unoptimized
              />
              <div>
                <h3 className="font-bold text-white text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  STORM AVENUE
                </h3>
                <p className="text-xs text-gray-400">
                  ROOFING & CONSTRUCTION
                </p>
              </div>
            </div>

            {/* Essential Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:6017484769"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(601) 748-4769</span>
              </a>
              <a
                href="mailto:info@stormavenueroofing.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@stormavenueroofing.com</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-3 pt-3 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              © {currentYear} Storm Avenue Roofing and Construction. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
