import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { ServiceAreaMap } from '@/components/ServiceAreaMap'
import { SocialSection } from '@/components/SocialSection'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { BackToTop } from '@/components/BackToTop'
import { EmergencyBanner } from '@/components/EmergencyBanner'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Preloader } from '@/components/Preloader'
import { MobileCTABar } from '@/components/MobileCTABar'


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
      <AnimatedSection animation="fade-in" delay={300}>
        <ServiceAreaMap />
      </AnimatedSection>
      <AnimatedSection animation="fade-in" delay={400}>
        <SocialSection />
      </AnimatedSection>
      <Footer />
      <CookieConsent />
      <BackToTop />
      <MobileCTABar />
    </main>
  )
}
