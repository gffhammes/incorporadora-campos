import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { ContainedPrimaryButton } from '../commons/Button'
import { SectionTitle } from '../commons/SectionTitle'

const buildings = [
  {
    image: '',
    name: '',
    status: '',
    district: '',
    area: '',
    bedrooms: ''
  },
  {
    image: '',
    name: '',
    status: '',
    district: '',
    area: '',
    bedrooms: ''
  },
  {
    image: '',
    name: '',
    status: '',
    district: '',
    area: '',
    bedrooms: ''
  },
  {
    image: '',
    name: '',
    status: '',
    district: '',
    area: '',
    bedrooms: ''
  },
]

export const EnterprisesSection = () => {
  return (
    <Box bgcolor='#f2f2f2' >
      <Container sx={{ py: 10 }}>        
        <SectionTitle>NOSSOS EMPREENDIMENTOS</SectionTitle>
        <Grid container spacing={2}>
          {buildings.map((building, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Box bgcolor='primary.main' sx={{ width: '100%', height: '20rem' }}></Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <ContainedPrimaryButton>VEJA TODOS</ContainedPrimaryButton>
        </Box>
      </Container>
    </Box>
  )
}
