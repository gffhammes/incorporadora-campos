
import DescriptionSection from '../src/components/aboutPage/DescriptionSection'
import FutureProjectsSection from '../src/components/aboutPage/FutureProjectsSection'
import HeroSection from '../src/components/aboutPage/HeroSection'
import InvestorSection from '../src/components/aboutPage/InvestorSection'
import OurHistorySection from '../src/components/aboutPage/OurHistorySection'
import PartnersSection from '../src/components/aboutPage/PartnersSection'
import PurposeSection from '../src/components/aboutPage/PurposeSection'
import { Footer } from '../src/components/commons/Footer/Footer'

export default function About() {
  return (
    <main style={{ height: '100%' }}>
      <HeroSection />
      <DescriptionSection />
      <OurHistorySection />
      <FutureProjectsSection />
      <PurposeSection />
      <PartnersSection />
      <InvestorSection />
      <Footer />
    </main>
  )
}
