import React, { useCallback, useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { defaultSvgProps } from '../../../constants/defaultSvgProps';
import useEmblaCarousel from 'embla-carousel-react'
import { Slide } from './Slide'

interface ISliderProps {
  slides: {
    imageSrc: string;
    title?: string;
  }[];
  startIndex: number;
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

const defaultButtonSx = {
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const buttonProps = {
  ...defaultSvgProps,
  sx: {
    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, .9))',
    color: 'white',
  }
}

export const Slider = ({ slides, startIndex }: ISliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Stack direction='row' alignItems='center' sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ ...defaultButtonSx, marginLeft: '10vw', left: 0 }} onClick={scrollPrev}>        
        <ArrowBackIosIcon {...buttonProps} />
      </Box>
      <Box sx={{ width: '100%', height: '100%'}}>
        <Box sx={sxEmbla}>
          <Box sx={{ height: '100%' }} ref={emblaRef}>
            <Box sx={sxEmblaContainer}>
              {slides.map((slide, index) => (
                <Slide
                  key={index}
                  imageSrc={slide.imageSrc}
                  title={slide.title}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...defaultButtonSx, marginRight: '10vw', right: 0 }} onClick={scrollNext}>        
        <ArrowForwardIosIcon {...buttonProps} />
      </Box>
    </Stack>
  )
}