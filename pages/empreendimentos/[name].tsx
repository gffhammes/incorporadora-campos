import React from 'react'
import { useRouter } from 'next/router'
import { Footer } from '../../src/components/commons/Footer/Footer'
import { Box } from '@mui/material'
import { getEnterpriseBySlug } from '../../src/helpers/getEnterpriseBySlug'
import { HeroSection } from '../../src/components/enterprisesInternalPage/HeroSection'
import { ScrollMenu } from '../../src/components/enterprisesInternalPage/ScrollMenu'
import { SummarySection } from '../../src/components/enterprisesInternalPage/SummarySection'
import { DetailsSection } from '../../src/components/enterprisesInternalPage/DetailsSection'
import { DifferentialsSections } from '../../src/components/enterprisesInternalPage/DifferentialsSections'
import { PlanOptionsSection } from '../../src/components/enterprisesInternalPage/PlanOptionsSection'
import { ConstructionStatusSection } from '../../src/components/enterprisesInternalPage/ConstructionStatusSection'
import { ContactSection } from '../../src/components/enterprisesInternalPage/ContactSection'
import { MapsSection } from '../../src/components/enterprisesInternalPage/MapsSection'
import { SimulatorsSection } from '../../src/components/enterprisesInternalPage/SimulatorsSection'
import { getAverageEnterpriseStatus } from '../../src/helpers/getAverageEnterpriseStatus'

const Enterprise = () => {
  const router = useRouter()
  const { name } = router.query

  const currentEnterprise = getEnterpriseBySlug(name);
  if (!currentEnterprise) return null

  const avgEnterpriseStatus = getAverageEnterpriseStatus(currentEnterprise.detailedStatus)

  return (
    <main style={{ height: '100%' }}>
      <HeroSection enterpriseData={currentEnterprise} />
      <ScrollMenu />
      <SummarySection enterpriseData={currentEnterprise} />
      {currentEnterprise.hideSections?.includes('details') ? null : <DetailsSection enterpriseData={currentEnterprise} />}
      <DifferentialsSections enterpriseData={currentEnterprise} />
      {currentEnterprise.hideSections?.includes('planOptions') ? null : <PlanOptionsSection enterpriseData={currentEnterprise} />}      
      <ContactSection enterpriseData={currentEnterprise} />
      {avgEnterpriseStatus > 0 && <ConstructionStatusSection enterpriseData={currentEnterprise} />}
      <MapsSection enterpriseData={currentEnterprise} />
      <SimulatorsSection />
      <Footer />
    </main>
  )
}

export default Enterprise