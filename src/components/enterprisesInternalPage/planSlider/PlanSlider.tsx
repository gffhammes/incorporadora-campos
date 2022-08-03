import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Stack } from '@mui/material'
import { defaultSvgProps } from '../../../constants/defaultSvgProps'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slide from './Slide';
import FullScreenSlider from '../../commons/FullScreenSlider/FullScreenSlider';

const defaultButtonProps = {
  zIndex: 500,
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: '20rem',
  cursor: 'pointer',
  position: 'absolute',
}

const sxEmbla = {
  overflow: 'hidden',
  height: '100%'
}

const sxEmblaContainer = {
  display: 'flex',
  height: '100%'
}

 const sxEmblaSlide = {
  position: 'relative',
  flex: '0 0 100%',
  mr: 4,
}

export const PlanSlider = ({ slides }) => {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const handleOpenFullScreen = () => {
    setFullScreen(true);
  }

  const handleExitFullScreen = () => {
    setFullScreen(false);
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

  const fullScreenSlides = slides.map(slide => ({
    imageSrc: slide.Foto.data.attributes.url,
    title: slide.Titulo
  }))

  return (
    <>    
      <Stack
        direction='row'
        alignItems='center'
        sx={{
          height: '100%',
          maxWidth: '30rem',
          position: 'relative',
          m: 'auto'
        }}
      >
        <Box sx={{ ...defaultButtonProps, marginLeft: '-1rem', left: 0 }} onClick={scrollPrev}>        
          <ArrowBackIosIcon {...defaultSvgProps} sx={{ color: 'secondary.main' }} />
        </Box>
        <Box sx={{ width: '100%', height: '100%'}}>
          <Box sx={sxEmbla}>
            <Box sx={{ height: '100%' }} ref={emblaRef}>
              <Box sx={sxEmblaContainer}>
                {slides.map((slide, index) => (
                  <Box sx={sxEmblaSlide} key={index} >
                    <Slide image={slide.Foto.data.attributes.url} label={slide.Titulo} handleOpenFullScreen={handleOpenFullScreen} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...defaultButtonProps, marginRight: '-1rem', right: 0 }} onClick={scrollNext}>        
          <ArrowForwardIosIcon {...defaultSvgProps} sx={{ color: 'secondary.main' }} />
        </Box>
      </Stack>
      <FullScreenSlider
        open={fullScreen}
        handleClose={handleExitFullScreen}
        slides={fullScreenSlides}
        selectedSlide={selectedSlide}
      />
    </>
  )
}