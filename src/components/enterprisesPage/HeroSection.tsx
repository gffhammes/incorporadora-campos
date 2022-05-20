import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'

export const HeroSection = () => {
  return (
    <Box bgcolor='secondary.main' sx={{ height: '100%', display: 'flex' }} >
      <Box sx={{ height: 'fit-content', width: '100%', my: 'auto' }}>
        <Container>
          <SectionTitle theme='light'>NOSSOS EMPREENDIMENTOS</SectionTitle>          
        </Container>
      </Box>
    </Box>
  )
}
