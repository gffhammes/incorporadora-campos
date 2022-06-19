import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'

export const HeroSection = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', position: 'relative' }} >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(#0E1E42, rgba(26, 80, 188, 0) 50%)',
          zIndex: 200
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/BANNER_CENTRAL_DE_VENDAS.jpg)',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          zIndex: 100
        }}
      />
      <Box sx={{ height: 'fit-content', width: '100%', my: 'auto', mt: '50vh', position: 'absolute', zIndex: 300 }}>
        <Container>
          <SectionTitle theme='light'>CENTRAL DE VENDAS</SectionTitle>          
        </Container>
      </Box>
    </Box>
  )
}
