import { Box, Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'

export const PlanOptions = ({ enterpriseData }) => {
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <SectionTitle>OPÇÕES DE PLANTA</SectionTitle>
      </Container>
    </Box>
  )
}
