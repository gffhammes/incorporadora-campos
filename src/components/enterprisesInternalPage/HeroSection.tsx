import { Box, Container, Stack, SxProps, Theme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { PrimaryGradientCover } from '../commons/GradientCover';
import { SectionTitle } from '../commons/SectionTitle';
import { FloatingDownArrowScroll } from '../commons/FloatingDownArrowScroll';


const sxContent: SxProps<Theme> = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 500,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
}

const sxLogo: SxProps<Theme> = {
  position: 'relative',
  height: '100%',
  width: '16vw',
  minWidth: '10rem',
  maxWidth: '13rem',
}

export const HeroSection = ({ enterpriseData }) => {
  return (
    <Box sx={{ position: 'relative', zIndex: 500, height: '100%', }}>
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundImage: `url(${enterpriseData.banner})`,
          backgroundSize: 'cover',
        }}
      />
      <PrimaryGradientCover />
      <Box sx={sxContent}>
        <Container sx={{ display: 'flex', height: '100%', pb: 10, pt: 20 }}>  
          <Stack sx={{ mx: 'auto' }} alignItems='center' justifyContent='center' >
          {enterpriseData.logo
              ? <Box sx={sxLogo} >                           
                  <Image
                    src={enterpriseData.logo}
                    alt={enterpriseData.name}
                    layout='fill'
                    objectFit='contain'
                  />
                </Box>
              : <SectionTitle theme='light'>{enterpriseData.name.toUpperCase()}</SectionTitle>
            }
          </Stack>
        </Container>
        <FloatingDownArrowScroll targetId='internal-scroll-menu' />
      </Box>
    </Box>
  )
}
