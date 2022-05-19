import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import PizzaSanPietro from '../../../public/vectors/piazza-san-pietro.svg'
import { OutlinedWhiteButton } from '../commons/Button'

export const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', zIndex: 500, height: '100vh', }}>
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundImage: 'url("/images/campos-incorporadora-san-pietro.jpg")',
          backgroundSize: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundImage: 'linear-gradient(rgb(14, 30, 66) 5%, rgba(14, 30, 66, 0.1) 70%)',
        }}
      />
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container sx={{ display: 'flex' }}>  
          <Stack sx={{ mx: 'auto' }} alignItems='center' >                    
            <PizzaSanPietro />
            <Typography>LANÇAMENTO NO AMÉRICA</Typography>
            <OutlinedWhiteButton>SAIBA MAIS</OutlinedWhiteButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
