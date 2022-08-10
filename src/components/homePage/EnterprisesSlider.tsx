import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Skeleton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LoadingButton } from '../commons/Button'

const sxImage = {
  position: 'relative',
  width: 'calc(100% + 32px)',
  ml: '-16px',
  aspectRatio: '1 / 1.45',
}

const sxArrowWrapperCommon = {
  position: 'absolute',
  height: 'fit-content',
  width: 'fit-content',
  cursor: 'pointer',
}

const sxRightArrowWrapper = {
  ...sxArrowWrapperCommon,
  right: 'calc(1rem - 3vw)',
}

const sxLeftArrowWrapper = {
  ...sxArrowWrapperCommon,
  left: 'calc(1rem - 3vw)',
}

interface IEnterprisesSliderProps {
  enterprises: any[];
  loading: boolean;
}

export const EnterprisesSlider = ({ enterprises, loading }: IEnterprisesSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 0, containScroll: 'trimSnaps' });
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  useEffect(() => {
    if (!enterprises || !emblaApi) return;
    emblaApi.reInit();
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi, enterprises])

  const getLocationString = useCallback((enterprise) => {
    if (!enterprise.attributes.Endereco.Bairro) {
      return enterprise.attributes.Endereco.Cidade;
    }

    return `${enterprise.attributes.Endereco.Bairro} - ${enterprise.attributes.Endereco.Cidade}`;
  }, [])

  const slidesMemo = useMemo(() => {
    if (loading) {
      return (
        [0, 1, 2, 3].map(item => (
          <Skeleton key={item} variant='rectangular' className="embla__slide" sx={{ height: '20rem', mt: 2 }}  />
        ))
      )
    }

    return (
      enterprises.map((enterprise, index) => (
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
                  <Typography>{getLocationString(enterprise)}</Typography>
                  <Typography>{enterprise.attributes.Area}</Typography>
                  <Typography>{enterprise.attributes.Quartos}</Typography>
                </Stack>
              </Box>
            </a>
          </Link>
        </Box>
      ))
    )
  }, [enterprises, getLocationString, loading])

  return (
    <Stack sx={{ position: 'relative' }} spacing={4}>      
      <Box className="embla" sx={{ mt: { xs: 0, md: 5 } }}>
        <div className="embla__viewport"  ref={emblaRef}>
          <div className="embla__container">
            {slidesMemo}
          </div>
        </div>

      </Box>
      <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
        {scrollSnaps.map((dot, index) => (
          <Box onClick={() => scrollTo(index)} bgcolor='secondary.main' key={index} sx={{ transition: '.2s ease all', height: '.5rem', width: '.5rem', borderRadius: '1rem', cursor: 'pointer', filter: index === selectedIndex ?  'opacity(.8)' : 'opacity(.25)' }} />
        ))}
      </Stack>
      <Stack direction='row' sx={{ position: 'absolute', height: '5rem', width: '100%', top: '50%', transform: 'translateY(-50%)' }}>
        <Box sx={sxLeftArrowWrapper} onClick={scrollPrev}>
          <ArrowBackIosIcon sx={{ color: 'secondary.main' }} />
        </Box>
        <Box sx={sxRightArrowWrapper} onClick={scrollNext}>
          <ArrowForwardIosIcon sx={{ color: 'secondary.main' }} />
        </Box>
      </Stack>
    </Stack>
  )
}