import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PizzaSanPietro from '../../../public/vectors/piazza-san-pietro.svg'
import { OutlinedWhiteButton } from '../commons/Button'

export const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', zIndex: 500, height: '100%', }}>
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
          backgroundImage: 'linear-gradient(rgb(14, 30, 66) 5%, rgba(14, 30, 66, 0.25) 70%)',
        }}
      />
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 500, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <Container sx={{ display: 'flex', height: '50%', mb: 10 }}>  
          <Stack sx={{ mx: 'auto' }} alignItems='center' justifyContent='flex-start' >
            <Box sx={{ minHeight: '5rem', height: '35vw', maxHeight: '10rem', width: '100%' }} >                           
              <PizzaSanPietro  width='100%' height='100%' />
            </Box>
            <Typography fontSize={21} letterSpacing={4} textAlign='center' sx={{ color: 'white', mt: 'auto', mb: 2 }} >LANÇAMENTO NO AMÉRICA</Typography>
            <Link href='/empreendimentos/piazza-san-pietro' passHref >
              <a>
                <OutlinedWhiteButton>SAIBA MAIS</OutlinedWhiteButton>
              </a>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
