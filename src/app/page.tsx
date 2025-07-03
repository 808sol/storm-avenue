import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { ServiceAreaMap } from '@/components/ServiceAreaMap'
import { SocialSection } from '@/components/SocialSection'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { EmergencyBanner } from '@/components/EmergencyBanner'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Preloader } from '@/components/Preloader'
import { MobileCTABar } from '@/components/MobileCTABar'
import { BrandedDivider } from '@/components/BrandedDivider'


export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#1a1a1a' }}>
      <Preloader />
      <EmergencyBanner />
      <Header />
      <HeroSection />
      <AnimatedSection animation="slide-up" delay={200}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection animation="fade-in" delay={250}>
        <section className="relative py-8 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
          {/* Patterned Background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat'
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(26, 26, 26, 0.5) 50%, rgba(26, 26, 26, 1) 100%)'
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <BrandedDivider />
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection animation="fade-in" delay={300}>
        <ServiceAreaMap />
      </AnimatedSection>
      <AnimatedSection animation="fade-in" delay={400}>
        <SocialSection />
      </AnimatedSection>
      <Footer />
      <BackToTop />
      <MobileCTABar />
    </main>
  )
}
