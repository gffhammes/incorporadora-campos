
import DescriptionSection from '../src/components/aboutPage/DescriptionSection'
import DifferentialsSection from '../src/components/aboutPage/DifferentialsSection'
import FutureProjectsSection from '../src/components/aboutPage/FutureProjectsSection'
import HeroSection from '../src/components/aboutPage/HeroSection'
import OurHistorySection from '../src/components/aboutPage/OurHistorySection'
import PartnersSection from '../src/components/aboutPage/PartnersSection'
import PurposeSection from '../src/components/aboutPage/PurposeSection'
import { Footer } from '../src/components/commons/Footer/Footer'

export default function About() {
  return (
    <main style={{ height: '100%' }}>
      <HeroSection />
      <DescriptionSection />
      <PartnersSection />
      <OurHistorySection />
      <FutureProjectsSection />
      <PurposeSection />
      <DifferentialsSection />
      <Footer />
    </main>
  )
}
