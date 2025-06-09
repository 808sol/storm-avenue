import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCTABar } from '@/components/MobileCTABar'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fdfcf3' }}>
      <Header />

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fdfcf3' }}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-black leading-tight mb-6 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ABOUT STORM AVENUE
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your trusted roofing and construction professionals serving the community with quality craftsmanship and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="hover-lift">
              <Image
                src="https://ext.same-assets.com/2209815366/3680677909.jpeg"
                alt="Professional Roofing Team"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Story</h2>
              <p className="text-gray-700 leading-relaxed">
                Storm Avenue Roofing and Construction has been serving homeowners and businesses with professional roofing and construction services for years.
                We pride ourselves on delivering quality workmanship, using premium materials, and providing exceptional customer service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of certified professionals is committed to protecting your most valuable investment - your property.
                From residential shingle replacement to commercial flat roof systems and general construction, we handle every project with precision and care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-light-silver rounded-lg">
              <h3 className="text-xl font-bold text-primary-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quality Materials</h3>
              <p className="text-gray-700">We use only the highest quality roofing materials from trusted manufacturers like GAF and Timberline.</p>
            </div>
            <div className="text-center p-6 bg-light-silver rounded-lg">
              <h3 className="text-xl font-bold text-primary-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Expert Team</h3>
              <p className="text-gray-700">Our certified professionals bring years of experience and expertise to every roofing project.</p>
            </div>
            <div className="text-center p-6 bg-light-silver rounded-lg">
              <h3 className="text-xl font-bold text-primary-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Customer Service</h3>
              <p className="text-gray-700">We prioritize communication and ensure you&apos;re informed throughout every step of your roofing project.</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">Contact us today for a free consultation and quote.</p>
            <a
              href="/contact-us"
              className="inline-block rounded-full bg-primary-black px-8 py-4 text-lg font-bold text-white hover:bg-gray-800 transition-colors"
            >
              GET A FREE QUOTE
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <MobileCTABar />
    </main>
  )
}
