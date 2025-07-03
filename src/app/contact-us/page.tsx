import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCTABar } from '@/components/MobileCTABar'
import { EmergencyBanner } from '@/components/EmergencyBanner'
import { ContactForm } from '@/components/ContactForm'
import { SocialSection } from '@/components/SocialSection'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export { metadata } from './metadata'

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer 24/7 emergency roofing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Storm Avenue Roofing provides 24/7 emergency roofing services throughout Mississippi. We respond immediately to storm damage, leaks, and other roofing emergencies. Call (601) 748-4769 anytime."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve in Mississippi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Jackson, Brandon, Madison, Ridgeland, Flowood, Clinton, Gluckstadt, Pearl, Florence, Brookhaven, Byram, Terry, Hattiesburg, Laurel, Vicksburg, McComb, and surrounding areas in Central Mississippi."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Storm Avenue Roofing & Construction is fully licensed, bonded, and insured. We are GAF Master Elite certified and Atlas Pro certified, representing the top contractors in the industry."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with insurance claims?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We specialize in insurance restoration and work directly with insurance companies. Our HAAG certified inspectors provide detailed documentation to support your claim and ensure you receive fair coverage for storm damage repairs."
      }
    }
  ]
}

export default function ContactUs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
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
          <option value="storm-damage">Storm Damage Repair</option>
          <option value="emergency-service">Emergency Service</option>
          <option value="other">Other</option>
        </select>
        <input type="text" name="zipcode" />
        <textarea name="message"></textarea>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-quote" />
      </form>

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
            {/* Hero Content */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                GET IN TOUCH
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Ready to protect your home? Contact us for a free quote or emergency service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Off-white background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Request a Free Quote</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20v-10h-2v10h-10v2h10v10h2v-10h10v-2h-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>

                  <div className="space-y-4">
                    <a
                      href="tel:6017484769"
                      className="flex items-center space-x-4 hover:translate-x-2 transition-transform"
                    >
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">(601) 748-4769</p>
                        <p className="text-sm text-gray-300">24/7 Emergency Service</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@stormavenueroofing.com"
                      className="flex items-center space-x-4 hover:translate-x-2 transition-transform"
                    >
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Email Us</p>
                        <p className="text-sm text-gray-300">info@stormavenueroofing.com</p>
                      </div>
                    </a>

                    <div className="flex items-center space-x-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Service Areas</p>
                        <p className="text-sm text-gray-300">Central MS • Southwest MS • Pine Belt</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Business Hours</p>
                        <p className="text-sm text-gray-300">Mon-Fri: 7AM-6PM</p>
                        <p className="text-sm text-gray-300">Emergency Service: 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="bg-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
                <p className="mb-6 text-red-100">
                  Storm damage? Leaking roof? We&apos;re here 24/7 for emergency repairs.
                </p>
                <a
                  href="tel:6017484769"
                  className="inline-flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now: (601) 748-4769</span>
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Service Areas</h3>
                <div className="space-y-3">
                  {[
                    'Central Mississippi',
                    'Southwest Mississippi',
                    'Pine Belt',
                  ].map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-base text-gray-300">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialSection />
      <Footer />
      <BackToTop />
      <MobileCTABar />
    </main>
    </>
  )
}
