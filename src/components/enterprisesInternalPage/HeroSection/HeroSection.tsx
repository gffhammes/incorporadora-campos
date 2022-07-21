import { Box, Container, Grid, Paper, Stack, SxProps, Theme, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useCallback, useMemo } from 'react'
import { PrimaryGradientCover } from '../../commons/PrimaryGradientCover';
import { SectionTitle } from '../../commons/SectionTitle';
import { FloatingDownArrowScroll } from '../../commons/FloatingDownArrowScroll';


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
    backgroundImage: `url(${enterpriseData.Banner.data.attributes.url})`,
    backgroundSize: 'cover',
  }
  
  const getLogo = useCallback(() => {
    if (enterpriseData.Logo.data) {
      return (
        <Box sx={sxLogo} >                           
          <Image
            src={enterpriseData.Logo.data.attributes.url}
            alt={enterpriseData.Nome}
            layout='fill'
            objectFit='contain'
          />
        </Box>
      )
    }
    return <SectionTitle theme='light'>{enterpriseData.Nome.toUpperCase()}</SectionTitle>
  }, [enterpriseData.Logo, enterpriseData.Nome])

  const contentMemo = useMemo(() => {
    if (enterpriseData.Status.toUpperCase() === 'PRÉ LANÇAMENTO') {
      return (
        <>
          <Typography textAlign='center' fontSize={12} letterSpacing={5} sx={{ color: 'rgba(255, 255, 255, .8)', mb: 3 }}>{enterpriseData.Status.toUpperCase()}</Typography>
          {getLogo()}
        </>
      )
    }
    
    return getLogo()
  }, [enterpriseData.Status, getLogo])
  
  return (
    <Box sx={{ position: 'relative', zIndex: 500, height: '100%', }}>
      <Box sx={sxBanner}/>
      <PrimaryGradientCover />
      <Box sx={sxContent}>
        <Container sx={{ display: 'flex', height: '100%', pb: 10, pt: 20 }}>  
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={10} sx={{ height: '100%', width: '100%' }} alignItems='center' justifyContent='center'>
            <Box>              
              {contentMemo}
            </Box>
          </Stack>
        </Container>
        <FloatingDownArrowScroll targetId={enterpriseData.Seccoes.Menu ? 'internal-scroll-menu' : 'the-enterprise'} />
      </Box>
    </Box>
  )
}
