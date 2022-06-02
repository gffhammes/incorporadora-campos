import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Container, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { defaultSvgProps } from '../../../constants/defaultSvgProps'
import SimpleDialog from '../../commons/Dialog'
import { PrimaryGradientCover } from '../../commons/PrimaryGradientCover'
import { OutlinedWhiteButton } from '../../commons/Button'
import PizzaSanPietro from '../../../../public/vectors/piazza-san-pietro.svg'
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
  <Box key={1} sx={{ position: 'relative', zIndex: 500, height: '100%', }}>
    <Box
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundImage: 'url("/images/campos-incorporadora-san-pietro.jpg")',
        backgroundSize: 'cover',
      }}
    />
    <PrimaryGradientCover />
    <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 500, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <Container sx={{ display: 'flex', height: '50%', mb: 10 }}>  
        <Stack sx={{ mx: 'auto' }} alignItems='center' justifyContent='flex-start' >
          <Box sx={{ minHeight: '4rem', height: '25vw', maxHeight: '8rem', width: '100%' }} >                           
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
  </Box>,
  <Box key={2} sx={{ position: 'relative', zIndex: 500, height: '100%', }}>
    <Box
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundImage: 'url("/images/piazza-del-mare/incorporadora-campos-piazza-del-mare-lounge-1.jpg")',
        backgroundSize: 'cover',
      }}
    />
    <PrimaryGradientCover />
    <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 500, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <Container sx={{ display: 'flex', height: '50%', mb: 10 }}>  
        <Stack sx={{ mx: 'auto' }} alignItems='center' justifyContent='flex-start' >
          <Box sx={{ minHeight: '4rem', height: '25vw', maxHeight: '8rem', width: '100%' }} >                           
            {/* <PizzaSanPietro  width='100%' height='100%' /> */}
          </Box>
          <Typography fontSize={21} letterSpacing={4} textAlign='center' sx={{ color: 'white', mt: 'auto', mb: 2 }} >LANÇAMENTO EM PIÇARRAS</Typography>
          <Link href='/empreendimentos/piazza-del-mare' passHref >
            <a>
              <OutlinedWhiteButton>SAIBA MAIS</OutlinedWhiteButton>
            </a>
          </Link>
        </Stack>
      </Container>
    </Box>
  </Box>
]

const defaultButtonProps = {
  zIndex: 500,
  backgroundColor: 'transparent',
  border: 0,
  height: '5vw',
  width: '5vw',
  minHeight: '1.5rem',
  minWidth: '1.5rem',
  maxHeight: '3rem',
  maxWidth: '3rem',
  borderRadius: '20rem',
  cursor: 'pointer',
  position: 'absolute',
}

const sxEmbla = {
  overflowX: 'hidden',
  overflowY: 'visible',
  height: '100%'
}

const sxEmblaContainer = {
  display: 'flex',
  height: '100%'
}

 const sxEmblaSlide = {
  position: 'relative',
  flex: '0 0 100%',
  marginRight: 0,  
  transitionProperty: 'filter, box-shadow',
  transitionDuration: '1s',
  transitionTimingFunction: 'ease',
  width: '100%',
  aspectRatio: '2 / 1',
}

export const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedSlide, setSelectedSlide] = useState(0)
  const [dots, setDots] = useState([])

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }    
  }, [emblaApi])


  useEffect(() => {
    const arr = [];
    for (let i = 0; i < slides.length; i++) {
      arr.push({ active: false })
    }
    arr[0].active = true;
    setDots(arr);
  }, [])

  useEffect(() => {
    setDots((dots): any[] => dots.map((dot, index) => index === selectedSlide ? { active: true } : { active: false } ))
  }, [selectedSlide])

  const changeSelectedSlide = (newSlideIndex) => {
    emblaApi.scrollTo(newSlideIndex)
  }

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  emblaApi?.on('select', () => {
    setSelectedSlide(emblaApi.selectedScrollSnap())
  })

  return (
    <Stack direction='row' alignItems='center' sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ ...defaultButtonProps, marginLeft: '10vw', left: 0 }} onClick={scrollPrev}>        
        <ArrowBackIosIcon {...defaultSvgProps} sx={{ color: 'white' }} />
      </Box>
      <Box sx={{ width: '100%', height: '100%'}}>
        <Box sx={sxEmbla}>
          <Box sx={{ height: '100%' }} ref={emblaRef}>
            <Box sx={sxEmblaContainer}>
              {slides.map((slide, index) => (
                <Box sx={sxEmblaSlide} key={index} >
                  {slide}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...defaultButtonProps, marginRight: '10vw', right: 0 }} onClick={scrollNext}>        
        <ArrowForwardIosIcon {...defaultSvgProps} sx={{ color: 'white' }} />
      </Box>
      <Box sx={{ position: 'absolute', display: 'flex', bottom: '0', left: '50%', transform: 'translate(-50%, -2rem)', gap: '1rem' }}>
        {dots.map((dot, index) => (
          <Box onClick={() => changeSelectedSlide(index)} bgcolor='white' key={index} sx={{ height: '.5rem', width: '.5rem', borderRadius: '1rem', cursor: 'pointer', filter: dot.active ?  'opacity(.8)' : 'opacity(.25)' }} />
        ))}
      </Box>
    </Stack>
  )
}