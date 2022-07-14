import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Stack } from '@mui/material'
import { defaultSvgProps } from '../../../constants/defaultSvgProps'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slide from './Slide';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Stack
      direction='row'
      alignItems='center'
      sx={{
        height: '100%',
        // minWidth: '20rem',
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
                  <Slide image={slide.image} label={slide.label} />
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
  )
}