import { Footer } from '../src/components/commons/Footer'
import { HeroSection } from '../src/components/enterprisesPage/HeroSection'
import { EnterprisesSection } from '../src/components/enterprisesPage/EnterprisesSection'

export default function Home() {
  return (
    <main style={{ height: '100%' }}>
      <HeroSection />
      <EnterprisesSection />
      <Footer />
    </main>
  )
}
