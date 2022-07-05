import { Box, Container, Grid, Paper, Stack, SxProps, Theme, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { PrimaryGradientCover } from '../../commons/PrimaryGradientCover';
import { SectionTitle } from '../../commons/SectionTitle';
import { FloatingDownArrowScroll } from '../../commons/FloatingDownArrowScroll';
import { Input } from '../../commons/Input';
import { LoadingButton } from '../../commons/Button';
import { Formik } from 'formik';
import ContactForm from './ContactForm';


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
  height: '10rem',
  width: '16vw',
  minWidth: '10rem',
  maxWidth: '13rem',
}

export const HeroSection = ({ enterpriseData }) => {

  const sxBanner: SxProps<Theme> = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${enterpriseData.banner})`,
    backgroundSize: 'cover',
  }
  
  return (
    <Box sx={{ position: 'relative', zIndex: 500, height: '100%', }}>
      <Box sx={sxBanner}/>
      <PrimaryGradientCover />
      <Box sx={sxContent}>
        <Container sx={{ display: 'flex', height: '100%', pb: 10, pt: 20 }}>  
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={10} sx={{ height: '100%', width: '100%' }} alignItems='center' justifyContent='center'>
            <Box>              
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
            </Box>
          </Stack>
        </Container>
        <FloatingDownArrowScroll targetId={enterpriseData.hideSections.includes('menu') ? 'summary' : 'internal-scroll-menu'} />
      </Box>
    </Box>
  )
}
