import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCTABar } from '@/components/MobileCTABar'
import { EmergencyBanner } from '@/components/EmergencyBanner'
import { SocialSection } from '@/components/SocialSection'
import Image from 'next/image'
import { MapPin, Clock, Shield } from 'lucide-react'

export { metadata } from './metadata'

export default function Gallery() {
  const featuredProject = {
    image: '/about-us.jpg',
    title: 'Luxury Residential Roof Replacement',
    description: 'Complete  roof replacement featuring GAF Camelot II shingles with enhanced wind & hail resistance. This project showcases our commitment to quality craftsmanship and attention to detail on high-end residential properties.',
    materials: [
      'GAF Camelot II in Weathered Timber',
      'GAF WeatherWatch® Ice & Water Shield',
      'GAF FeltBuster® Synthetic Roofing Felt',
      'GAF WeatherBlocker® Starter',
      'Custom Copper Valley Flashing',
      'GAF TimberTex® Hip & Ridge '
    ],
    timeline: '3 days',
    location: 'Madison, MS',
    warranty: 'Limited Lifetime Warranty',
    features: [
      'Complete tear-off and disposal of old roofing',
      'Full deck inspection and repairs',
      'Lifetime workmanship warranty'
    ]
  }

  return (
    <main className="min-h-screen">
      <EmergencyBanner />
      <Header />

      {/* Hero Section with Dark Pattern */}
      <section className="relative overflow-hidden py-16" style={{ backgroundColor: '#1a1a1a' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              FEATURED PROJECT
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Experience the quality and craftsmanship that defines Storm Avenue Roofing
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Project Image - Takes 3 columns on large screens */}
              <div className="lg:col-span-3 relative">
                <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px]">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50 lg:to-black/70"></div>
                </div>
              </div>

              {/* Project Details - Takes 2 columns on large screens */}
              <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 xl:text-[16px]">{featuredProject.title}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">{featuredProject.description}</p>

                {/* Quick Info - Compact Grid */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-400 text-sm">Location:</span>
                      <span className="text-white ml-2">{featuredProject.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-400 text-sm">Timeline:</span>
                      <span className="text-white ml-2">{featuredProject.timeline}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-gray-400 text-sm">Warranty:</span>
                      <span className="text-white ml-2 text-sm">{featuredProject.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="/contact-us"
                  className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors text-center inline-block"
                >
                  Get Your Free Quote
                </a>
              </div>
            </div>

            {/* Expandable Details Section Below */}
            <div className="border-t border-gray-800 p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Materials Used */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Materials Used</h3>
                  <ul className="space-y-2">
                    {featuredProject.materials.map((material, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Project Highlights</h3>
                  <div className="space-y-2">
                    {featuredProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg mb-4">
              This project represents our standard of excellence in residential roofing
            </p>
            <p className="text-gray-500">
              More projects coming soon as we continue to serve the Golden Triangle area
            </p>
          </div>
        </div>
      </section>

      <SocialSection />
      <Footer />
      <BackToTop />
      <MobileCTABar />
    </main>
  )
}
