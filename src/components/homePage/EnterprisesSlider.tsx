import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Stack, Typography } from '@mui/material'
import { enterprises } from '../../assets/enterprises'
import Link from 'next/link'

const imageStyle = {
  height: '20rem',
  width: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

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
          {enterprises.map((enterprise, index) => (
            <Box className="embla__slide" key={index}>
              <Link href={`/empreendimentos/${enterprise.slug}`} passHref>
                <a>
                  <Box sx={{ width: '100%', height: 'fit-content', backgroundImage: 'linear-gradient(transparent 20%, #e4e2e7 20%)', p: 2 }}>
                    <Box sx={{ ...imageStyle, backgroundImage: `url(${enterprise.thumb})` }} />
                    <Stack sx={{ mt: 2 }} direction='row' justifyContent='space-between' alignItems='center' >                              
                      <Typography fontSize={13} fontWeight={600} sx={{ color: 'secondary.main', textDecoration: 'underline' }} >{enterprise.name.toUpperCase()}</Typography>
                      <Typography fontSize={10}>{enterprise.status.toUpperCase()}</Typography>
                    </Stack>
                    <Stack sx={{ mt: 2, fontSize: 14 }} spacing={.5} >
                      <Typography>{enterprise.district}</Typography>
                      <Typography>{enterprise.area}</Typography>
                      <Typography>{enterprise.bedrooms}</Typography>
                    </Stack>
                  </Box>
                </a>
              </Link>
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