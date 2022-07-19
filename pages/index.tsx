import { EnterprisesSection } from '../src/components/homePage/EnterprisesSection'
import { HeroSection } from '../src/components/homePage/HeroSection'
import { HistorySection } from '../src/components/homePage/HistorySection'
import { BlogSection } from '../src/components/homePage/BlogSection'
import { Footer } from '../src/components/commons/Footer/Footer'

export default function Home({ enterprises }) {
  return (
    <main style={{ height: '100%' }}>
      <HeroSection />
      <HistorySection />
      <EnterprisesSection enterprises={enterprises}/>
      {/* <BlogSection /> */}
      <Footer />
    </main>
  )
}


export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/api/empreendimentos?populate=*`);
  const data = await res.json();

  return {
    props: {
      enterprises: data.data,
    }
  }
}