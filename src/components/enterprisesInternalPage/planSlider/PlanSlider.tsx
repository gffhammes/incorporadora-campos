import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const imageStyle = {
  height: '20rem',
  width: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

const images = [
  '/images/piazza-san-pietro-planta-1.jpg',
  '/images/piazza-san-pietro-planta-1.jpg',
  '/images/piazza-san-pietro-planta-1.jpg',
  '/images/piazza-san-pietro-planta-1.jpg',
  '/images/piazza-san-pietro-planta-1.jpg',
]

export const PlanSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

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


  return (
    <Stack direction='row' alignItems='center' sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <IconButton sx={{ height: 'fit-content', color: '#1A47BC' }} onClick={scrollPrev}>        
        <ArrowBackIosIcon />
      </IconButton>
      <div style={{ width: '100%' }}>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {images.map((image, index) => (
                <Box                        
                  key={index}
                  sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    flex: '0 0 100%',
                    marginRight: '16px',
                  }}
                >                  
                  <Box sx={{ position: 'relative', width: '100%', height: '25vw', minHeight: { xs: '10rem', md: '16rem' }, maxHeight: '18rem' }}>
                    <Image
                      src={image}
                      alt='image'
                      layout='fill'
                      objectFit='contain'
                    />
                  </Box>
                  <Typography textAlign='center' sx={{ mt: 3 }} fontSize={18} fontWeight={500}>APTO TIPO 1</Typography>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
      <IconButton sx={{ height: 'fit-content', color: '#1A47BC' }} onClick={scrollNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  )
}