import React from 'react'
import { useRouter } from 'next/router'
import { Footer } from '../../src/components/commons/Footer/Footer'
import { Box } from '@mui/material'
import { getEnterpriseBySlug } from '../../src/helpers/getEnterpriseBySlug'
import { ScrollMenu } from '../../src/components/enterprisesInternalPage/ScrollMenu'
import { SummarySection } from '../../src/components/enterprisesInternalPage/SummarySection'
import { DetailsSection } from '../../src/components/enterprisesInternalPage/DetailsSection'
import { DifferentialsSections } from '../../src/components/enterprisesInternalPage/DifferentialsSections'
import { PlanOptionsSection } from '../../src/components/enterprisesInternalPage/PlanOptionsSection'
import { ConstructionStatusSection } from '../../src/components/enterprisesInternalPage/ConstructionStatusSection'
import { MapsSection } from '../../src/components/enterprisesInternalPage/MapsSection'
import { SimulatorsSection } from '../../src/components/enterprisesInternalPage/SimulatorsSection'
import { getAverageEnterpriseStatus } from '../../src/helpers/getAverageEnterpriseStatus'
import { HeroSection } from '../../src/components/enterprisesInternalPage/HeroSection/HeroSection'
import { ContactSection } from '../../src/components/enterprisesInternalPage/Contact/ContactSection'
import VideoZico from '../../src/components/enterprisesInternalPage/delMare/VideoZico'
import fetch from 'isomorphic-unfetch'
import * as qs from 'qs'

const Enterprise = ({ enterprise }) => {
  const router = useRouter()
  const { slug } = router.query

  const avgEnterpriseStatus = getAverageEnterpriseStatus(enterprise.attributes.StatusDetalhado)

  return (
    <main style={{ height: '100%' }}>
      <HeroSection enterpriseData={enterprise.attributes} />   
      {/* {currentEnterprise.hideSections?.includes('menu') ? null : <ScrollMenu />}       */}
      <SummarySection enterpriseData={enterprise.attributes} />
      {enterprise.attributes.slug === 'piazza-del-mare' && <VideoZico />}

      {/* {currentEnterprise.hideSections?.includes('details') ? null : <DetailsSection enterpriseData={currentEnterprise} />} */}
      <DetailsSection enterpriseData={enterprise.attributes} />
      
      {/* {currentEnterprise.hideSections?.includes('differentials') ? null : <DifferentialsSections enterpriseData={currentEnterprise} />} */}
      <DifferentialsSections enterpriseData={enterprise.attributes} />

      {/* {currentEnterprise.hideSections?.includes('planOptions') ? null : <PlanOptionsSection enterpriseData={currentEnterprise} />}    */}
      <PlanOptionsSection enterpriseData={enterprise.attributes} />

      {/* {currentEnterprise.hideSections?.includes('contact') ? null : <ContactSection enterpriseData={currentEnterprise} />} */}

      {/* {(avgEnterpriseStatus > 0 && !currentEnterprise.hideSections?.includes('status')) && <ConstructionStatusSection enterpriseData={currentEnterprise} />} */}
      <ConstructionStatusSection enterpriseData={enterprise.attributes} />

      {/* {currentEnterprise.hideSections?.includes('maps') ? null : <MapsSection enterpriseData={currentEnterprise} />}       */}
      <MapsSection enterpriseData={enterprise.attributes} />

      <SimulatorsSection />
      <Footer />
    </main>
  )
}


export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const { slug } = context.query;

  const query = qs.stringify({
    filters: {
      Slug: {
        $eq: slug,
      },
    },
    populate: [
      'Logo',
      'Banner',
      'Thumb',
      'Galeria',
      'StatusDetalhado',
      'diferenciais',
      'diferenciais.Imagem',
      'Plantas',
      'Plantas.Foto',
    ]
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  const res = await fetch(`${API_URL}/api/empreendimentos?${query}`);
  const data = await res.json();

  return {
    props: {
      enterprise: data.data[0],
    }
  }
}

export default Enterprise