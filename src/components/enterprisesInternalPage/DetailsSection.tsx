import { Box, Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'
import { DetailsSlider } from './detailsSlider/DetailsSlider'

export const DetailsSection = ({ enterpriseData }) => {
  return (
    <Box bgcolor='#f2f2f2' sx={{ py: 10, overflowX: 'hidden' }}>
      <Container>
        <SectionTitle>CONHEÇA MAIS DETALHES</SectionTitle>
      </Container>
        <DetailsSlider />
    </Box>
  )
}
