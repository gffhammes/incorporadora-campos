import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Stack, Typography } from '@mui/material'
import { enterprises } from '../../assets/enterprises'
import Link from 'next/link'
import Image from 'next/image'

const sxImage = {
  position: 'relative',
  width: 'calc(100% + 32px)',
  ml: '-16px',
  height: {
    xs: '30rem',
    sm: '35rem',
    md: '30rem',
    lg: '25rem',
  }
}

export const EnterprisesSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start'  })

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
                  <Box sx={{ width: '100%', height: 'fit-content', backgroundImage: 'linear-gradient(transparent 40%, #e4e2e7 40%)', p: 2 }}>
                    <Box sx={sxImage}>
                      <Image
                        src={enterprise.thumb}
                        alt={enterprise.name}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='bottom'
                      />
                    </Box>
                    <Stack sx={{ mt: 2 }} direction='row' justifyContent='space-between' alignItems='center' >                              
                      <Typography fontSize={13} fontWeight={600} sx={{ color: 'secondary.main', textDecoration: 'underline' }} >{enterprise.name.toUpperCase()}</Typography>
                      <Typography fontSize={10}>{enterprise.status.toUpperCase()}</Typography>
                    </Stack>
                    <Stack sx={{ mt: 2, fontSize: 14 }} spacing={.5} >
                      <Typography>{enterprise.district} - {enterprise.city}</Typography>
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