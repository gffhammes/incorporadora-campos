import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

const sxImage = {
  position: 'relative',
  width: 'calc(100% + 32px)',
  ml: '-16px',
  aspectRatio: '1 / 1.45'
}

export const EnterprisesSlider = ({ enterprises }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start'  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  console.log(enterprises)

  return (
    <Box className="embla" sx={{ mt: { xs: 0, md: 5 } }}>
      <div className="embla__viewport"  ref={emblaRef}>
        <div className="embla__container">
          {enterprises.map((enterprise, index) => (
            <Box className="embla__slide" key={index}>
              <Link href="/empreendimentos/[slug]" as={`/empreendimentos/${enterprise.attributes.Slug}`} passHref>
                <a>
                  <Box sx={{ width: { xs: '80%', md: '100%' }, height: 'fit-content', backgroundImage: 'linear-gradient(transparent 50%, #e4e2e7 50%)', p: 2, m: 'auto' }}>
                    <Box sx={sxImage}>
                      <Image
                        src={enterprise.attributes.FotoHome.data.attributes.url}
                        alt={enterprise.attributes.Nome}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='bottom'
                      />
                    </Box>
                    <Stack sx={{ mt: 2 }} direction='row' justifyContent='space-between' alignItems='center' >                              
                      <Typography fontSize={13} fontWeight={600} sx={{ color: 'secondary.main', textDecoration: 'underline' }} >{enterprise.attributes.Nome.toUpperCase()}</Typography>
                      <Typography fontSize={10} fontWeight={600}>{enterprise.attributes.Status.toUpperCase()}</Typography>
                    </Stack>
                    <Stack sx={{ mt: 2, fontSize: 14 }} spacing={.5} >
                      <Typography>{enterprise.attributes.Endereco.Bairro} - {enterprise.attributes.Endereco.Cidade}</Typography>
                      <Typography>{enterprise.attributes.Area}</Typography>
                      <Typography>{enterprise.attributes.Quartos}</Typography>
                    </Stack>
                  </Box>
                </a>
              </Link>
            </Box>
          ))}
        </div>
      </div>
    </Box>
  )
}