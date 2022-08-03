import React from 'react'
import { Footer } from '../src/components/commons/Footer/Footer'
import { BlueSection } from '../src/components/contactPage/BlueSection'
import { ContactForm } from '../src/components/contactPage/ContactForm'
import { HeroSection } from '../src/components/contactPage/HeroSection'
import { MapsSection } from '../src/components/contactPage/MapsSection'
import { SupplierForm } from '../src/components/contactPage/SupplierForm'

function contact() {
  return (
    <main style={{ height: '100%' }}>
      <HeroSection />
      <ContactForm />
      <BlueSection />
      <SupplierForm />
      <MapsSection />
      <Footer />
    </main>
  )
}

export default contact