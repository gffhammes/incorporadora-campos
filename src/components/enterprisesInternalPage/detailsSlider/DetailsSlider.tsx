import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const defaultButtonProps = {
  height: 'fit-content',
  color: 'white',
  zIndex: 500,
  textAlign: 'center',
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
      <IconButton sx={{ ...defaultButtonProps, ml: 5 }} onClick={scrollPrev}>        
        <ArrowBackIosIcon />
      </IconButton>
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
      <IconButton sx={{ ...defaultButtonProps, mr: 5 }} onClick={scrollNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  )
}