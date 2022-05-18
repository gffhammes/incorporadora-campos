import { Container, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { EnterprisesSection } from '../src/components/homePage/EnterprisesSection'
import { HeroSection } from '../src/components/homePage/HeroSection'
import { HistorySection } from '../src/components/homePage/HistorySection'

export default function Home() {
  return (
    <>
      <Head>        
        <title>Campos Incorporadora</title>
      </Head>
      <main style={{ height: 'fit-content' }}>
        <HeroSection />
        <HistorySection />
        <EnterprisesSection />
      </main>
    </>
  )
}
