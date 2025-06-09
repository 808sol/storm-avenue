'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCTABar } from '@/components/MobileCTABar'
import Image from 'next/image'
import { useState } from 'react'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'

interface GalleryItem {
  id: string
  beforeImage: string
  afterImage: string
  title: string
  description: string
  category: 'residential' | 'commercial' | 'emergency'
  materials: string[]
  timeline: string
  location: string
  testimonial?: string
  customerName?: string
  badges?: string[]
  warranty?: string
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      beforeImage: 'https://ugc.same-assets.com/bkLA_YaI3wr8rs6HhrsQ3z8n-UccqD_q.jpeg',
      afterImage: 'https://ugc.same-assets.com/yYScYd8s7c91ROUfxbWI_XdPEC0fAOGG.jpeg',
      title: 'Hail Damage Restoration - Glen Ellyn',
      description: 'Complete roof replacement after severe hail damage with GAF Timberline HDZ shingles',
      category: 'emergency',
      materials: ['GAF Timberline HDZ Shingles', 'Emergency Repairs', 'Insurance Claim Assistance', 'New Gutters'],
      timeline: '3 days',
      location: 'Glen Ellyn, IL',
      testimonial: 'Storm Avenue worked directly with our insurance company and restored our roof perfectly after the hail storm.',
      customerName: 'Sarah M.',
      badges: ['Emergency Repairs', 'Insurance Claim Assistance'],
      warranty: 'Lifetime Warranty'
    },
    {
      id: '2',
      beforeImage: 'https://ugc.same-assets.com/GyX7Zpps-GNGEdINW_L_F1yeZn8El7UX.jpeg',
      afterImage: 'https://ugc.same-assets.com/5n-MOQufU1Rp2UyeqSPpyfy7s6AfXFc7.png',
      title: 'Storm Damage Emergency Repair',
      description: 'Fast emergency response and complete roof replacement after severe weather damage',
      category: 'emergency',
      materials: ['Architectural Shingles', 'Storm Damage Repairs', 'Emergency Tarping', 'Upgraded Flashing'],
      timeline: '2 days',
      location: 'Mississippi',
      testimonial: 'Quick response time and excellent workmanship during our emergency. Highly recommend!',
      customerName: 'Mike T.',
      badges: ['Emergency Repairs', 'Storm Damage Repairs'],
      warranty: 'Lifetime Warranty'
    },
    {
      id: '3',
      beforeImage: 'https://ugc.same-assets.com/WMT44D9ax-7914lrlSXc4cyKsKb3T2U5.webp',
      afterImage: 'https://ugc.same-assets.com/0EOPZbX5lrgIyIAEzuALbFo2IuSo99zo.jpeg',
      title: 'Owens Corning Architectural Installation',
      description: 'Premium architectural shingle installation with enhanced curb appeal and storm protection',
      category: 'residential',
      materials: ['Owens Corning Architectural', 'Ridge Cap Shingles', 'Drip Edge', 'Storm Protection'],
      timeline: '2 days',
      location: 'Homer Glen, IL',
      badges: ['GAF Master Elite', 'Storm Protection'],
      warranty: '50 Year Warranty'
    },
    {
      id: '4',
      beforeImage: 'https://ugc.same-assets.com/fKojObzQIgp-HwNuHMBpdhySYobGz7nS.jpeg',
      afterImage: 'https://ugc.same-assets.com/f-NZ0xeW6FMzXrvcmrtkWuz6ENMbXuvB.jpeg',
      title: 'Residential Roof Replacement',
      description: 'Complete residential roof replacement transforming an aging roof with modern materials',
      category: 'residential',
      materials: ['Premium Shingles', 'Upgraded Flashing', 'Ice & Water Shield', 'Ventilation Upgrade'],
      timeline: '2 days',
      location: 'Newtown Square, PA',
      badges: ['Energy Efficient', 'Atlas Protects Certification'],
      warranty: 'Lifetime Warranty'
    },
    {
      id: '5',
      beforeImage: 'https://ugc.same-assets.com/OGZK5OFWA42bDN3otIYHcF_JCAJc6RsS.jpeg',
      afterImage: 'https://ugc.same-assets.com/jUtH9kE4jXHWB4jmoyalBQOmg7x1DGJf.jpeg',
      title: 'Commercial Roofing Project',
      description: 'Large-scale commercial roofing installation with enhanced weather protection',
      category: 'commercial',
      materials: ['Commercial Grade Materials', 'HVAC Integration', 'Waterproof Membrane', 'Energy Efficient'],
      timeline: '5 days',
      location: 'Texas',
      badges: ['Commercial Grade', 'Energy Star Certified'],
      warranty: '20 Year Warranty'
    },
    {
      id: '6',
      beforeImage: 'https://ugc.same-assets.com/L5UlVG4BkoBDBF5e5cP56vPQyY091kxO.jpeg',
      afterImage: 'https://ugc.same-assets.com/Z1fxeaLg82cmgkPrYuQo5Cm06G9n-4mA.jpeg',
      title: 'GAF Timberline Replacement',
      description: 'High-quality GAF Timberline shingle installation with lifetime warranty protection',
      category: 'residential',
      materials: ['GAF Timberline Shingles', 'Advanced Protection', 'Lifetime Warranty', 'Professional Installation'],
      timeline: '2 days',
      location: 'Westmont, IL',
      badges: ['GAF Master Elite', 'Lifetime Warranty'],
      warranty: 'Lifetime Warranty'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: galleryItems.length },
    { id: 'residential', label: 'Residential', count: galleryItems.filter(item => item.category === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: galleryItems.filter(item => item.category === 'commercial').length },
    { id: 'emergency', label: 'Emergency Repairs', count: galleryItems.filter(item => item.category === 'emergency').length }
  ]

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fdfcf3' }}>
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fdfcf3' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-black leading-tight mb-6 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              PROJECT GALLERY
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of successful roofing projects across Mississippi and surrounding areas.
              See the quality craftsmanship and attention to detail that sets Storm Avenue apart.
            </p>
          </div>

          {/* Featured Before/After Showcase */}
          <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                See the Transformation
              </h2>
              <p className="text-lg text-gray-600">
                Drag the slider to see the dramatic before and after results of our roofing projects
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage="https://ugc.same-assets.com/bkLA_YaI3wr8rs6HhrsQ3z8n-UccqD_q.jpeg"
                afterImage="https://ugc.same-assets.com/yYScYd8s7c91ROUfxbWI_XdPEC0fAOGG.jpeg"
                title="Featured Project - Hail Damage Restoration"
                className="h-96"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-primary-black mb-2">
                  Complete Hail Damage Restoration
                </h3>
                <p className="text-gray-600 mb-4">
                  This Mississippi home suffered severe hail damage during a storm. Our team provided emergency repairs
                  and a complete roof replacement, working directly with the insurance company for a seamless process.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed in 3 days
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Glen Ellyn, IL
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Insurance claim approved
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-primary-black text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-black'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Regular Image (After Image) */}
                <div className="relative h-64 w-full">
                  <Image
                    src={item.afterImage}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block bg-primary-black px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-300">{item.timeline}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-400">{item.location}</p>
                  </div>
                </div>

                {/* Click to View Details */}
                <button
                  onClick={() => setSelectedImage(item)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                >
                  <svg className="w-4 h-4 text-primary-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Modal for detailed view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-80 md:h-96">
                <Image
                  src={selectedImage.afterImage}
                  alt={selectedImage.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary-black text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-500">{selectedImage.timeline}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{selectedImage.location}</span>
                  {selectedImage.warranty && (
                    <>
                      <span className="text-gray-500">•</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedImage.warranty}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-primary-black mb-3">{selectedImage.title}</h2>
                <p className="text-gray-600 mb-6">{selectedImage.description}</p>

                {/* Project Badges */}
                {selectedImage.badges && selectedImage.badges.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-primary-black mb-3">Certifications & Features:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedImage.badges.map((badge) => (
                        <span
                          key={badge}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-primary-black mb-3">Materials Used:</h3>
                    <ul className="space-y-2">
                      {selectedImage.materials.map((material) => (
                        <li key={material} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-primary-black rounded-full" />
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedImage.testimonial && (
                    <div>
                      <h3 className="font-semibold text-primary-black mb-3">Customer Feedback:</h3>
                      <blockquote className="italic text-gray-600 border-l-4 border-primary-black pl-4">
                        &quot;{selectedImage.testimonial}&quot;
                        {selectedImage.customerName && (
                          <footer className="mt-2 text-sm font-semibold text-primary-black">
                            — {selectedImage.customerName}
                          </footer>
                        )}
                      </blockquote>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-600 mb-4">Interested in a similar project for your property?</p>
                  <a
                    href="/contact-us"
                    className="inline-block rounded-full bg-primary-black px-6 py-3 text-white font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Get Your Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />
      <MobileCTABar />
    </main>
  )
}
