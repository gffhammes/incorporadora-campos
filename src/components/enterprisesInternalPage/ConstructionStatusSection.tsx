import { Box, Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'
import { StatusCharts } from './StatusCharts'

export const ConstructionStatusSection = ({ enterpriseData }) => {
  return (
    <Box bgcolor='#f2f2f2'>
      <Container sx={{ py: 10 }}>
        <StatusCharts />
      </Container>
    </Box>
  )
}
