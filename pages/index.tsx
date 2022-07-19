import { EnterprisesSection } from '../src/components/homePage/EnterprisesSection'
import { HistorySection } from '../src/components/homePage/HistorySection'
import { BlogSection } from '../src/components/homePage/BlogSection'
import { Footer } from '../src/components/commons/Footer/Footer'
import { HeroSlider } from '../src/components/homePage/heroSlider/HeroSlider'
import * as qs from 'qs'

export default function Home({ enterprises, banners }) {
  return (
    <main style={{ height: '100%' }}>
      <HeroSlider banners={banners} />
      <HistorySection />
      <EnterprisesSection enterprises={enterprises}/>
      {/* <BlogSection /> */}
      <Footer />
    </main>
  )
}


export async function getServerSideProps() {
  const { API_URL } = process.env;

  const enterprisesResponse = await fetch(`${API_URL}/api/empreendimentos?sort=id&populate=*`);
  const enterprisesData = await enterprisesResponse.json();

  
  const bannersQuery = qs.stringify({
    populate: [
      'empreendimento',
      'empreendimento.Banner',
      'empreendimento.Logo',
    ]
  }, {
    encodeValuesOnly: true, // prettify URL
  });
  
  const bannersResponse = await fetch(`${API_URL}/api/banners?${bannersQuery}`);
  const bannersData = await bannersResponse.json();

  return {
    props: {
      enterprises: enterprisesData.data,
      banners: bannersData.data,
    }
  }
}