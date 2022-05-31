import { HeroSection } from "../../src/components/enterprisesPage/HeroSection";
import { EnterprisesSection } from "../../src/components/enterprisesPage/EnterprisesSection";
import { Footer } from "../../src/components/commons/Footer";
import { enterprises } from "../../src/assets/enterprises";

export default function Home() {
  return (
    <main style={{ height: '100%' }}>
      <HeroSection />
      <EnterprisesSection enterprises={enterprises} />
      <Footer />
    </main>
  )
}
