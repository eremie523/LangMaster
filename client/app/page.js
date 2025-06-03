import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhySection />
      <CtaSection />
      <Footer />
      {/* I think this should be all sections, modifications can be done */}
    </main>
  )
}
