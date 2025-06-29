import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCTABar } from '@/components/MobileCTABar'
import { EmergencyBanner } from '@/components/EmergencyBanner'
import Image from 'next/image'

export default function AboutUs() {
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
              ABOUT STORM AVENUE
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Your trusted roofing and construction professionals serving the community with quality craftsmanship and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Off-white background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fdfcf3' }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="hover-lift">
              <Image
                src="https://ext.same-assets.com/2209815366/3680677909.jpeg"
                alt="Professional Roofing Team"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300"
                unoptimized
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Excellence in Every Detail
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For over two decades, Storm Avenue Roofing and Construction has been the trusted choice for homeowners and businesses
                throughout Mississippi. Our commitment to quality workmanship and customer satisfaction has made us the go-to roofing
                contractor in the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We specialize in residential and commercial roofing, offering comprehensive services from minor repairs to complete
                roof replacements. Our team of certified professionals uses only the highest quality materials from trusted manufacturers.
              </p>
            </div>
          </div>

          {/* Values Section with Dark Background */}
          <div className="relative rounded-3xl overflow-hidden p-12 mb-16" style={{ backgroundColor: '#1a1a1a' }}>
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20v-10h-2v10h-10v2h10v10h2v-10h10v-2h-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Quality</h3>
                  <p className="text-gray-400">
                    We never compromise on the quality of materials or workmanship
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">★</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                  <p className="text-gray-400">
                    Honest assessments and transparent pricing on every project
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">♥</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Service</h3>
                  <p className="text-gray-400">
                    Dedicated to exceeding customer expectations every time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-primary-black text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Why Choose Storm Avenue?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-black mb-2">Licensed & Insured</h3>
                  <p className="text-gray-700">Fully licensed, bonded, and insured for your complete protection and peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-black mb-2">24/7 Emergency Service</h3>
                  <p className="text-gray-700">Storm damage doesn&apos;t wait, and neither do we. Available round the clock for emergencies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-black mb-2">Premium Materials</h3>
                  <p className="text-gray-700">We only use high-quality materials from trusted manufacturers like GAF and Atlas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-black mb-2">Warranty Protection</h3>
                  <p className="text-gray-700">Comprehensive warranties on both materials and workmanship for long-term protection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-black mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Experienced Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-primary-black mb-2">Houston Case</h3>
                <p className="text-gray-600">Owner & Lead Contractor</p>
                <p className="text-sm text-gray-500 mt-2">20+ years of roofing expertise</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-primary-black mb-2">Project Manager</h3>
                <p className="text-gray-600">Quality Assurance Lead</p>
                <p className="text-sm text-gray-500 mt-2">Ensuring excellence on every project</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-primary-black mb-2">Field Supervisor</h3>
                <p className="text-gray-600">Installation Specialist</p>
                <p className="text-sm text-gray-500 mt-2">Certified master installer</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-red-100">
              Join thousands of satisfied customers who trust Storm Avenue for their roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="tel:6017570740"
                className="bg-red-800 text-white px-8 py-3 rounded-full font-bold hover:bg-red-900 transition-colors"
              >
                Call: 601-757-0740
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <MobileCTABar />
    </main>
  )
}
