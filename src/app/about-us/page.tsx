import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCTABar } from '@/components/MobileCTABar'
import { EmergencyBanner } from '@/components/EmergencyBanner'
import { SocialSection } from '@/components/SocialSection'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { BrandedDivider } from '@/components/BrandedDivider'
import Image from 'next/image'
import { Award, ShieldCheck, Heart, CheckCircle, Clock, Wrench, Shield } from 'lucide-react'

export { metadata } from './metadata'

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
              About Storm Avenue Roofing - Brandon, Madison, Ridgeland MS
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Your trusted roofing and construction professionals serving the community with quality craftsmanship and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1a1a1a' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Gradient Background Shape */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-4xl h-64 bg-gradient-to-r from-transparent via-red-600/20 to-transparent rounded-full blur-3xl transform scale-y-50"></div>
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-0 text-center">
            <div className="relative px-8 py-4">
              <div className="space-y-2">
                <AnimatedCounter
                  end={50}
                  suffix="+"
                  duration={2000}
                  className="text-4xl md:text-5xl font-bold text-white"
                />
                <div className="text-white/90 font-medium">Years of Experience</div>
              </div>
              {/* Vertical divider - right side on mobile and desktop */}
              <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gray-600/30"></div>
            </div>
            <div className="relative px-8 py-4">
              <div className="space-y-2">
                <AnimatedCounter
                  end={1}
                  suffix="M+"
                  separator=""
                  duration={2500}
                  className="text-4xl md:text-5xl font-bold text-white"
                />
                <div className="text-white/90 font-medium">Shingles Installed</div>
              </div>
              {/* Vertical divider - only on desktop */}
              <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gray-600/30"></div>
            </div>
            <div className="relative px-8 py-4">
              <div className="space-y-2">
                <AnimatedCounter
                  end={100}
                  suffix="%"
                  duration={2000}
                  className="text-4xl md:text-5xl font-bold text-white"
                />
                <div className="text-white/90 font-medium">Customer Satisfaction</div>
              </div>
              {/* Vertical divider - right side on mobile and desktop */}
              <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gray-600/30"></div>
            </div>
            <div className="relative px-8 py-4">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-red-600">24/7</div>
                <div className="text-red-600 font-medium">Emergency Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Dark background */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1a1a1a' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-16 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Excellence in Every Detail
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                At Storm Avenue, we believe in doing the job right the first time - with craftsmanship you can count on. We offer a lifetime workmanship warranty, giving homeowners the opportunity for long-term peace of mind when they choose approved products and installation standards. We use only premium materials from trusted manufacturers to ensure durability, performance, and visual appeal. Backed by a team with decades of combined experience, our work is grounded in professionalism, honesty, and a deep understanding of roofing systems. Whether it&apos;s storm damage restoration or a full roof replacement, Storm Avenue delivers high-quality results, clear communication, and a customer-first approach from start to finish.
              </p>
            </div>
          </div>

          <BrandedDivider />

          {/* Values Section with Dark Background */}
          <div className="relative rounded-3xl overflow-hidden p-12 mb-16" style={{ backgroundColor: '#1a1a1a' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Quality</h3>
                  <p className="text-gray-400">
                    We never compromise on the quality of materials or workmanship
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                  <p className="text-gray-400">
                    Honest assessments and transparent pricing on every project
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Service</h3>
                  <p className="text-gray-400">
                    Dedicated to exceeding customer expectations every time
                  </p>
                </div>
              </div>
            </div>
          </div>

          <BrandedDivider />

          {/* Certifications & Awards Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Certifications & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* GAF Master Elite */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 text-center hover-lift">
                <div className="mb-6">
                  <Image
                    src="/gaf-master-elite.png"
                    alt="GAF Master Elite"
                    width={150}
                    height={150}
                    className="mx-auto"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">GAF Master Elite</h3>
                <p className="text-gray-400 text-sm">
                  Top 2% of roofing contractors in North America with proven reliability and exceptional warranties
                </p>
              </div>

              {/* Atlas Pro */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 text-center hover-lift">
                <div className="mb-6">
                  <Image
                    src="/atlas-protects.png"
                    alt="Atlas Pro Contractor"
                    width={150}
                    height={150}
                    className="mx-auto"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Atlas Pro Contractor</h3>
                <p className="text-gray-400 text-sm">
                  Certified installer of Atlas roofing products with extended warranty options
                </p>
              </div>

              {/* HAAG Certified */}
              <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 text-center hover-lift">
                <div className="mb-6">
                  <Image
                    src="/inspection_badge.PNG"
                    alt="HAAG Certified Inspector"
                    width={150}
                    height={150}
                    className="mx-auto"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">HAAG Certified</h3>
                <p className="text-gray-400 text-sm">
                  Professional roof inspection certification for accurate damage assessment
                </p>
              </div>
            </div>

            {/* Additional Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="bg-gray-800 rounded-lg px-6 py-3 flex items-center gap-3">
                <Shield className="w-5 h-5 text-red-500" />
                <span className="text-white font-medium">Licensed & Insured</span>
              </div>
              <div className="bg-gray-800 rounded-lg px-6 py-3 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-white font-medium">BBB A+ Rating</span>
              </div>
              <div className="bg-gray-800 rounded-lg px-6 py-3 flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-500" />
                <span className="text-white font-medium">Insurance Preferred</span>
              </div>
            </div>
          </div>

          <BrandedDivider />

          {/* Why Choose Us */}
          <div className="bg-gray-900/50 rounded-2xl shadow-xl p-12 mb-16 border border-gray-800">
            <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Why Choose Storm Avenue?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Licensed & Insured</h3>
                  <p className="text-gray-400">Fully licensed, bonded, and insured for your complete protection and peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 Emergency Service</h3>
                  <p className="text-gray-400">Storm damage doesn&apos;t wait, and neither do we. Available round the clock for emergencies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Premium Materials</h3>
                  <p className="text-gray-400">We only use high-quality materials from trusted manufacturers like GAF and Atlas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Warranty Protection</h3>
                  <p className="text-gray-400">Comprehensive warranties on both materials and workmanship for long-term protection.</p>
                </div>
              </div>
            </div>
          </div>

          <BrandedDivider />

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
                href="tel:6017484769"
                className="bg-red-800 text-white px-8 py-3 rounded-full font-bold hover:bg-red-900 transition-colors"
              >
                Call: (601) 748-4769
              </a>
            </div>
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
