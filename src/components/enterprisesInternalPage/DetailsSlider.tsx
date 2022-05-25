import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'

const imageStyle = {
  height: '20rem',
  width: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
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
    <div className="embla overflow_show">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <Box className="embla__slide_full" key={index} sx={{ boxShadow: selectedSlide === index ? 10 : 0, transition: 'filter 800ms ease', width: '100%', aspectRatio: '2 / 1', filter: selectedSlide === index ? '' : 'opacity(.5)' }}>
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
      {/* <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button> */}
    </div>
  )
}