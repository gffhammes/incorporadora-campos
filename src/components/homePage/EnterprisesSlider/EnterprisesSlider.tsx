import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Skeleton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LoadingButton } from '../../commons/Button'
import { EnterpriseCard } from './EnterpriseCard'

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 0, dragFree: true, containScroll: 'trimSnaps' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const scrollPrevButtonActive = selectedIndex > 0;
  const scrollNextButtonActive = selectedIndex < emblaApi?.scrollSnapList().length - 1;
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!enterprises || !emblaApi) return;
    emblaApi.reInit();
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
        <EnterpriseCard
          key={index}
          slug={enterprise.attributes.Slug}
          imageUrl={enterprise.attributes.FotoHome.data.attributes.url}
          name={enterprise.attributes.Nome}
          status={enterprise.attributes.Status}
          description={enterprise.attributes.Descricao1}
          location={getLocationString(enterprise)}        
        />
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
        {emblaApi?.scrollSnapList().map((dot, index) => (
          <Box onClick={() => scrollTo(index)} bgcolor='secondary.main' key={index} sx={{ transition: '.2s ease all', height: '.5rem', width: '.5rem', borderRadius: '1rem', cursor: 'pointer', filter: index === selectedIndex ?  'opacity(.8)' : 'opacity(.25)' }} />
        ))}
      </Stack>
      <Stack direction='row' sx={{ position: 'absolute', height: '5rem', width: '100%', top: '50%', transform: 'translateY(-50%)' }}>
        <Box sx={sxLeftArrowWrapper} onClick={scrollPrev}>
          <ArrowBackIosIcon sx={{ color: scrollPrevButtonActive ? 'secondary.main' : '#c6c6c6' }} />
        </Box>
        <Box sx={sxRightArrowWrapper} onClick={scrollNext}>
          <ArrowForwardIosIcon sx={{ color: scrollNextButtonActive ? 'secondary.main' : '#c6c6c6' }} />
        </Box>
      </Stack>
    </Stack>
  )
}