import { Box, Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'
import { StatusCharts } from './StatusCharts'

export const ConstructionStatusSection = ({ enterpriseData }) => {
  return (
    <Box bgcolor='#e7e7e7'>
      <Container sx={{ py: 7 }}>
        <StatusCharts data={enterpriseData.StatusDetalhado} />
      </Container>
    </Box>
  )
}
