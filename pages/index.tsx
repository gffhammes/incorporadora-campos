import { EnterprisesSection } from '../src/components/homePage/EnterprisesSection'
import { HeroSection } from '../src/components/homePage/HeroSection'
import { HistorySection } from '../src/components/homePage/HistorySection'
import { BlogSection } from '../src/components/homePage/BlogSection'
import { Footer } from '../src/components/commons/Footer/Footer'

export default function Home() {
  return (
    <main style={{ height: '100%' }}>
      <HeroSection />
      <HistorySection />
      <EnterprisesSection />
      {/* <BlogSection /> */}
      <Footer />
    </main>
  )
}
