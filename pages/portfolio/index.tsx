import { HeroSection } from "../../src/components/enterprisesPage/HeroSection";
import { EnterprisesSection } from "../../src/components/enterprisesPage/EnterprisesSection";
import { Footer } from "../../src/components/commons/Footer/Footer";
import { useState } from "react";
import { scrollToTarget } from "../../src/helpers/scrollToTarget";
import fetch from 'isomorphic-unfetch'

export default function Home({ enterprises }) {
  const [filteredEnterprises, setFilteredEnterprises] = useState(enterprises)
  
  const handleFilter = (values: {
    city: string,
    district: string,
    buildingStatus: string,
  }) => {
    const filtered = enterprises.filter(enterprise => {
      return (
        (values.city !== '' ? enterprise.attributes.Endereco.Cidade === values.city : true)
        && (values.district !== '' ? enterprise.attributes.Endereco.Bairro === values.district : true)
        && (values.buildingStatus !== '' ? enterprise.attributes.Status === values.buildingStatus : true)
      )
    })
    setFilteredEnterprises(filtered)
    scrollToTarget('enterprises')
  }
  
  return (
    <main style={{ height: '100%' }}>
      <HeroSection enterprises={enterprises} handleFilter={handleFilter} />
      <EnterprisesSection enterprises={filteredEnterprises} />
      <Footer />
    </main>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/api/empreendimentos?sort=Ordem&populate=*`);
  const data = await res.json();

  return {
    props: {
      enterprises: data.data,
    }
  }
}