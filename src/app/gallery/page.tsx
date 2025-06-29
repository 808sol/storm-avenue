'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCTABar } from '@/components/MobileCTABar'
import { EmergencyBanner } from '@/components/EmergencyBanner'
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
      title: 'Complete Residential Roof Replacement',
      description: 'Full roof replacement with architectural shingles, including new underlayment and ventilation upgrades',
      category: 'residential',
      materials: ['GAF Timberline HD Shingles', 'Synthetic Underlayment', 'Ridge Vents', 'Ice & Water Shield'],
      timeline: '3 days',
      location: 'Jackson, MS',
      badges: ['GAF Master Elite', '50-Year Warranty'],
      warranty: '50 Year Warranty'
    },
    {
      id: '2',
      beforeImage: 'https://ugc.same-assets.com/R2jnQzGnsqJ1VZ8nxFjqzE6_A88RXw5l.jpeg',
      afterImage: 'https://ugc.same-assets.com/4gvyqbVJjECBQDQ1sjbDqaFQBP0MLDrC.jpeg',
      title: 'Storm Damage Emergency Repair',
      description: 'Emergency storm damage repair completed within 24 hours to prevent further water damage',
      category: 'emergency',
      materials: ['Emergency Tarping', 'Structural Repairs', 'Shingle Replacement', 'Flashing Repair'],
      timeline: '24 hours',
      location: 'Madison, MS',
      badges: ['24/7 Emergency', 'Insurance Approved']
    },
    {
      id: '3',
      beforeImage: 'https://ugc.same-assets.com/lSo9iHnPc0CcdkYQyRZOFOiO0Hy1eFyR.jpeg',
      afterImage: 'https://ugc.same-assets.com/R2jnQzGnsqJ1VZ8nxFjqzE6_A88RXw5l.jpeg',
      title: 'Commercial Flat Roof Installation',
      description: 'Complete commercial flat roof system with TPO membrane and enhanced drainage',
      category: 'commercial',
      materials: ['TPO Membrane', 'ISO Board Insulation', 'Drainage System', 'Commercial Flashing'],
      timeline: '5 days',
      location: 'Ridgeland, MS',
      badges: ['Commercial Certified', '20-Year Warranty']
    },
    {
      id: '4',
      beforeImage: 'https://ugc.same-assets.com/z8OOWlIUvvvpJCh5vhsBLZT6nrjFyJ6h.jpeg',
      afterImage: 'https://ugc.same-assets.com/qhOojK4mJ8eKCL0SYW6hAoiOPm-E_E8m.jpeg',
      title: 'Historic Home Restoration',
      description: 'Careful restoration of historic home maintaining architectural integrity while upgrading protection',
      category: 'residential',
      materials: ['Cedar Shakes', 'Copper Flashing', 'Custom Fabrication', 'Historic Preservation'],
      timeline: '1 week',
      location: 'Belhaven, Jackson, MS',
      badges: ['Historic Preservation', 'Custom Work']
    },
    {
      id: '5',
      beforeImage: 'https://ugc.same-assets.com/4gvyqbVJjECBQDQ1sjbDqaFQBP0MLDrC.jpeg',
      afterImage: 'https://ugc.same-assets.com/z8OOWlIUvvvpJCh5vhsBLZT6nrjFyJ6h.jpeg',
      title: 'Multi-Family Complex Re-Roof',
      description: 'Complete re-roofing of 12-unit apartment complex with minimal tenant disruption',
      category: 'commercial',
      materials: ['Architectural Shingles', 'Commercial Grade Underlayment', 'Gutter System', 'Ventilation'],
      timeline: '2 weeks',
      location: 'Pearl, MS',
      badges: ['Multi-Family Specialist', 'Minimal Disruption']
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
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                OUR WORK GALLERY
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Explore our portfolio of completed roofing projects. See the quality and craftsmanship that sets Storm Avenue apart.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Off-white background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fdfcf3' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer hover-lift"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                  <div className="aspect-w-16 aspect-h-12">
                    <BeforeAfterSlider
                      beforeImage={item.beforeImage}
                      afterImage={item.afterImage}
                      title={item.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-black mb-2 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        {item.location}
                      </span>
                      <span className="text-gray-500">
                        <i className="fas fa-clock mr-1"></i>
                        {item.timeline}
                      </span>
                    </div>
                    {item.badges && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <div className="flex min-h-screen items-center justify-center p-4">
            <div
              className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Images */}
                <div className="relative">
                  <BeforeAfterSlider
                    beforeImage={selectedImage.beforeImage}
                    afterImage={selectedImage.afterImage}
                    title={selectedImage.title}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-primary-black mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedImage.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary-black mb-2">Materials Used:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {selectedImage.materials.map((material) => (
                          <li key={material}>{material}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-primary-black">Location:</h4>
                        <p className="text-gray-600">{selectedImage.location}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-black">Timeline:</h4>
                        <p className="text-gray-600">{selectedImage.timeline}</p>
                      </div>
                    </div>

                    {selectedImage.warranty && (
                      <div>
                        <h4 className="font-semibold text-primary-black">Warranty:</h4>
                        <p className="text-gray-600">{selectedImage.warranty}</p>
                      </div>
                    )}
                  </div>

                  {selectedImage.badges && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedImage.badges.map((badge) => (
                        <span
                          key={badge}
                          className="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact-us"
                      className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors text-center"
                    >
                      Get Similar Work Done
                    </a>
                    <a
                      href="tel:6017570740"
                      className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors text-center"
                    >
                      Call: 601-757-0740
                    </a>
                  </div>
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
