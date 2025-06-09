import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCTABar } from '@/components/MobileCTABar'
import { ContactForm } from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactUs() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fdfcf3' }}>
      {/* Hidden static form for Netlify to detect */}
      <form name="contact-quote" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <select name="service">
          <option value="residential-shingle">Residential Shingle Replacement</option>
          <option value="residential-repair">Residential Roof Repair</option>
          <option value="commercial-flat">Commercial Flat Roof</option>
          <option value="roof-inspection">Roof Inspection</option>
          <option value="emergency-repair">Emergency Repair</option>
          <option value="other">Other</option>
        </select>
        <textarea name="message" />
        <input type="hidden" name="to-email" value="houstoncase@stormavenue.net" />
        <div className="hidden">
          <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
        </div>
      </form>

      <Header />

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fdfcf3' }}>
        <div className="mx-auto max-w-7xl">
          {/* Hero Section for Contact Page */}
          <div className="text-center mb-16">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-black leading-tight mb-6 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                CONTACT US
              </h1>
              <div className="w-24 h-1 bg-primary-black mx-auto mb-6" />
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Ready to get started on your roofing project? Get in touch for a free consultation and let our experienced team provide you with the quality service you deserve.
              </p>
            </div>

            {/* Quick Contact Bar */}
            <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary-black rounded-2xl p-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <a href="tel:6017570740" className="group flex flex-col items-center space-y-2 text-white hover:text-fdfcf3 transition-colors">
                    <Phone className="h-8 w-8 group-hover:scale-110 transition-transform" />
                    <span className="font-bold">CALL NOW</span>
                    <span className="text-sm opacity-90">601-757-0740</span>
                  </a>
                  <a href="mailto:houstoncase@stormavenue.net" className="group flex flex-col items-center space-y-2 text-white hover:text-fdfcf3 transition-colors">
                    <Mail className="h-8 w-8 group-hover:scale-110 transition-transform" />
                    <span className="font-bold">EMAIL US</span>
                    <span className="text-sm opacity-90">houstoncase@stormavenue.net</span>
                  </a>
                  <div className="group flex flex-col items-center space-y-2 text-white">
                    <Clock className="h-8 w-8" />
                    <span className="font-bold">24/7 EMERGENCY</span>
                    <span className="text-sm opacity-90">Always Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <h2 className="text-3xl font-bold text-primary-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Get In Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We&apos;re here to help with all your roofing needs. Contact us today for a free estimate
                  and let our experienced team provide you with the quality service you deserve.
                </p>
              </div>

              <div className="space-y-6 bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-light-silver hover:bg-gray-200 transition-all duration-300 group">
                  <div className="flex-shrink-0 bg-primary-black rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Phone</p>
                    <a href="tel:6017570740" className="text-lg font-bold text-primary-black hover:text-fdfcf3 transition-colors">
                      601-757-0740
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-light-silver hover:bg-gray-200 transition-all duration-300 group">
                  <div className="flex-shrink-0 bg-primary-black rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email</p>
                    <a href="mailto:houstoncase@stormavenue.net" className="text-lg font-bold text-primary-black hover:text-fdfcf3 transition-colors">
                      houstoncase@stormavenue.net
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-light-silver hover:bg-gray-200 transition-all duration-300 group">
                  <div className="flex-shrink-0 bg-primary-black rounded-full p-3 group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Service Area</p>
                    <p className="text-lg font-bold text-primary-black">
                      Mississippi & Surrounding Areas
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-light-silver hover:bg-gray-200 transition-all duration-300 group">
                  <div className="flex-shrink-0 bg-primary-black rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Business Hours</p>
                    <div className="text-lg font-bold text-primary-black">
                      <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
                      <p>Sat: 8:00 AM - 4:00 PM</p>
                      <p>Sun: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <ContactForm />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-2xl p-12 shadow-xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Why Choose Storm Avenue?</h2>
              <div className="w-24 h-1 bg-primary-black mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group hover-lift bg-light-silver rounded-2xl p-8 transition-all duration-300">
                <div className="w-20 h-20 bg-primary-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-white">24h</span>
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quick Response</h3>
                <p className="text-gray-700 leading-relaxed">We respond to all inquiries within 24 hours and provide emergency service when you need it most</p>
              </div>

              <div className="text-center group hover-lift bg-light-silver rounded-2xl p-8 transition-all duration-300">
                <div className="w-20 h-20 bg-primary-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-white">✓</span>
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Licensed & Insured</h3>
                <p className="text-gray-700 leading-relaxed">Fully licensed and insured for your protection with comprehensive coverage on every project</p>
              </div>

              <div className="text-center group hover-lift bg-light-silver rounded-2xl p-8 transition-all duration-300">
                <div className="w-20 h-20 bg-primary-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-white">★</span>
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quality Guarantee</h3>
                <p className="text-gray-700 leading-relaxed">All work backed by our comprehensive quality guarantee and premium materials warranty</p>
              </div>
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
