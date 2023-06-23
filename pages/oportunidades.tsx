import React from 'react'
import { Footer } from '../src/components/commons/Footer/Footer'
import { MainForms } from '../src/components/salesCenterPage/MainForms/MainForms'
import { HeroSection } from '../src/components/salesCenterPage/HeroSection'
import { ContactForm } from '../src/components/salesCenterPage/ContactForm'

function SalesCenter() {
  return (
    <main style={{ height: '100%' }}>
      <HeroSection />
      <MainForms />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default SalesCenter