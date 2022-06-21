import { Box, Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../../commons/SectionTitle'
import OurHistorySlider from './OurHistorySlider'

type Props = {}

const OurHistorySection = (props: Props) => {
  return (
    <Box bgcolor='#E4E2E7' sx={{ py: 10 }}>
      <Container>
        <SectionTitle>NOSSA HISTÓRIA</SectionTitle>
      </Container>
        <OurHistorySlider />
    </Box>
  )
}

export default OurHistorySection