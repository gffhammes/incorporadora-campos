import { Box, Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'

export const ConstructionStatusSection = ({ enterpriseData }) => {
  return (
    <Box bgcolor='#f2f2f2'>
      <Container sx={{ py: 10 }}>
        <SectionTitle>STATUS DA OBRA</SectionTitle>
      </Container>
    </Box>
  )
}
