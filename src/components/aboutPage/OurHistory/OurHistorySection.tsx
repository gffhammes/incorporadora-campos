import { Box, Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../../commons/SectionTitle'
import OurHistorySlider from './OurHistorySlider'

type Props = {}

const OurHistorySection = (props: Props) => {
  return (
    <Box bgcolor='#E4E2E7'>
      <Container sx={{ py: 10 }}>
        <SectionTitle>NOSSA HISTÓRIA</SectionTitle>
        <OurHistorySlider />
      </Container>
    </Box>
  )
}

export default OurHistorySection