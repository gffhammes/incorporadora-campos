import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import LeftArrow from '../../../../public/vectors/arrows/left-arrow.svg'
import RightArrow from '../../../../public/vectors/arrows/right-arrow.svg'
import { defaultSvgProps } from '../../../constants/defaultSvgProps'

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

const images = [
  '/images/piazza-san-pietro-detalhes-1.jpg',
  '/images/piazza-san-pietro-detalhes-1.jpg',
  '/images/piazza-san-pietro-detalhes-1.jpg',
  '/images/piazza-san-pietro-detalhes-1.jpg',
  '/images/piazza-san-pietro-detalhes-1.jpg',
]

export const DetailsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedSlide, setSelectedSlide] = useState(0)

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

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
        <LeftArrow {...defaultSvgProps} />
      </Box>
      <div style={{ width: '100%' }}>
      <div className="embla overflow_show">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <Box
              className="embla__slide_full"
              key={index}
              sx={{
                boxShadow: selectedSlide === index ? 10 : 0,
                transitionProperty: 'filter, box-shadow',
                transitionDuration: '1s',
                transitionTimingFunction: 'ease',
                width: '100%',
                aspectRatio: '2 / 1',
                filter: selectedSlide === index ? '' : 'opacity(.5)'
              }}
            >
              <Image
                src={image}
                alt='image'
                layout='fill'
                objectFit='cover'
              />
            </Box>
          ))}
        </div>
      </div>
    </div>
      </div>
      <Box sx={{ ...defaultButtonProps, marginRight: '10vw', right: 0 }} onClick={scrollNext}>        
        <RightArrow {...defaultSvgProps} />
      </Box>
    </Stack>
  )
}