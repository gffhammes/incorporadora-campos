import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Stack, Typography } from '@mui/material'

const imageStyle = {
  height: '20rem',
  width: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

const buildings = [
  {
    image: '/images/SAN-PIETRO.png',
    name: 'Piazza San Pietro',
    status: 'Em obras',
    district: 'América',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/piazza-del-mare.png',
    name: 'Piazza Del Mare',
    status: 'Lançamento',
    district: 'Itacolomi',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/piazza-san-marco.png',
    name: 'Piazza San Marco',
    status: '100% vendido',
    district: 'Costa e Silva',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/piazza-san-carlo.png',
    name: 'Piazza San Carlo',
    status: '100% vendido',
    district: 'Costa e Silva',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/SAN-PIETRO.png',
    name: 'Piazza San Pietro',
    status: 'Em obras',
    district: 'América',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/piazza-del-mare.png',
    name: 'Piazza Del Mare',
    status: 'Lançamento',
    district: 'Itacolomi',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/piazza-san-marco.png',
    name: 'Piazza San Marco',
    status: '100% vendido',
    district: 'Costa e Silva',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/piazza-san-carlo.png',
    name: 'Piazza San Carlo',
    status: '100% vendido',
    district: 'Costa e Silva',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
]

export const EnterprisesSlider = () => {
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
    <div className="embla">
      <div className="embla__viewport"  ref={emblaRef}>
        <div className="embla__container">
          {buildings.map((building, index) => (
            <Box className="embla__slide" key={index}>
              <Box sx={{ width: '100%', height: 'fit-content', backgroundImage: 'linear-gradient(transparent 20%, #e4e2e7 20%)', p: 2 }}>
                <Box sx={{ ...imageStyle, backgroundImage: `url(${building.image})` }} />
                <Stack sx={{ mt: 2 }} direction='row' justifyContent='space-between' alignItems='center' >                              
                  <Typography fontSize={13} fontWeight={600} sx={{ color: 'secondary.main', textDecoration: 'underline' }} >{building.name.toUpperCase()}</Typography>
                  <Typography fontSize={10}>{building.status.toUpperCase()}</Typography>
                </Stack>
                <Stack sx={{ mt: 2, fontSize: 14 }} spacing={.5} >
                  <Typography>{building.district}</Typography>
                  <Typography>{building.area}</Typography>
                  <Typography>{building.bedrooms}</Typography>
                </Stack>
              </Box>
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