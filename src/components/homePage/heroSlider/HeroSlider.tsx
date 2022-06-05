import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Stack } from '@mui/material'
import { defaultSvgProps } from '../../../constants/defaultSvgProps'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Slide } from './Slide'

const slides = [
  {
    bgImage: '/images/piazza-san-pietro/BANNER_SAN_PIETRO.jpg',
    logo: '/images/PIAZZA-SAN-PIETRO.png',
    enterpriseName: 'Piazza San Pietro',
    text: 'LANÇAMENTO NO AMÉRICA',
    href: '/empreendimentos/piazza-san-pietro',
  },
  {
    bgImage: '/images/piazza-del-mare/BANNER_DEL_MARE.jpg',
    logo: '/images/DEL_MARE.png',
    enterpriseName: 'Piazza Del Mare',
    text: 'PRÉ LANÇAMENTO EM PIÇARRAS',
    href: '/empreendimentos/piazza-del-mare',
  },
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
                  <Slide
                    bgImage={slide.bgImage}
                    logo={slide.logo}
                    enterpriseName={slide.enterpriseName}
                    text={slide.text}
                    href={slide.href}
                  />
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
          <Box onClick={() => changeSelectedSlide(index)} bgcolor='white' key={index} sx={{ transition: '.2s ease all', height: '.5rem', width: '.5rem', borderRadius: '1rem', cursor: 'pointer', filter: dot.active ?  'opacity(.8)' : 'opacity(.25)' }} />
        ))}
      </Box>
    </Stack>
  )
}