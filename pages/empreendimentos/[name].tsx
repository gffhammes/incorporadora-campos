import React from 'react'
import { useRouter } from 'next/router'
import { Footer } from '../../src/components/commons/Footer'
import { Box } from '@mui/material'
import { getEnterpriseBySlug } from '../../src/helpers/getEnterpriseBySlug'
import { HeroSection } from '../../src/components/enterprisesInternalPage/HeroSection'
import { SummarySection } from '../../src/components/enterprisesInternalPage/SummarySection'
import { DetailsSection } from '../../src/components/enterprisesInternalPage/DetailsSection'
import { DifferentialsSections } from '../../src/components/enterprisesInternalPage/DifferentialsSections'
import { PlanOptionsSection } from '../../src/components/enterprisesInternalPage/PlanOptionsSection'
import { ConstructionStatusSection } from '../../src/components/enterprisesInternalPage/ConstructionStatusSection'
import { ContactSection } from '../../src/components/enterprisesInternalPage/ContactSection'
import { MapsSection } from '../../src/components/enterprisesInternalPage/MapsSection'
import { SimulatorsSection } from '../../src/components/enterprisesInternalPage/SimulatorsSection'

const Enterprise = () => {
  const router = useRouter()
  const { name } = router.query

  const currentEnterprise = getEnterpriseBySlug(name);
  if (!currentEnterprise) return null

  return (
    <main style={{ height: '100%' }}>
      <HeroSection enterpriseData={currentEnterprise} />
      <SummarySection enterpriseData={currentEnterprise} />
      <DetailsSection enterpriseData={currentEnterprise} />
      <DifferentialsSections enterpriseData={currentEnterprise} />
      <PlanOptionsSection enterpriseData={currentEnterprise} />
      <ContactSection enterpriseData={currentEnterprise} />
      <ConstructionStatusSection enterpriseData={currentEnterprise} />
      <MapsSection enterpriseData={currentEnterprise} />
      <SimulatorsSection />
      <Footer />
    </main>
  )
}

export default Enterprise