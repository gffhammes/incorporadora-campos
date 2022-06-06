import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import LeftArrow from '../../../../public/vectors/arrows/left-arrow.svg'
import RightArrow from '../../../../public/vectors/arrows/right-arrow.svg'
import { defaultSvgProps } from '../../../constants/defaultSvgProps'
import FullScreenDialog from './DetailsSliderDialog'

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

const boxShadow = '0px 10px 13px -6px rgb(26 71 188 / 20%), 0px 20px 31px 3px rgb(26 71 188 / 14%), 0px 8px 38px 7px rgb(26 71 188/ 12%);'


const Slide = ({ image, selectedSlide, index }) => {
  const [loading, setLoading] = useState(true)

  const isSelected = useMemo(() => selectedSlide === index, [index, selectedSlide, loading])

  const handleLoaded = () => {
    setLoading(false);
  }

  return (
    <Box
      className="embla__slide_full"
      sx={{
        boxShadow: isSelected ? boxShadow : 0,
        transitionProperty: 'filter, box-shadow',
        transitionDuration: '1s',
        transitionTimingFunction: 'ease',
        width: '100%',
        aspectRatio: '2 / 1',
        filter: isSelected ? 'opacity(1)' : 'opacity(.25)',
        cursor: 'pointer'
      }}
    >
      {loading && <Box bgcolor='#e2e2e2' sx={{ width: '100%', height: '100%', display: 'flex',alignItems: 'center', justifyContent: 'center' }}>loading...</Box>}
      <Image
        src={image}
        alt='image'
        layout='fill'
        objectFit='cover'
        onLoadingComplete={handleLoaded}
      />
    </Box>
  )
}

export const DetailsSlider = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedSlide, setSelectedSlide] = useState(0)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <>
      <Stack direction='row' alignItems='center' sx={{ height: '100%', width: '100%' }}>
        <Box sx={{ ...defaultButtonProps, marginLeft: '10vw', left: 0 }} onClick={scrollPrev}>        
          <LeftArrow {...defaultSvgProps} />
        </Box>
        <Box sx={{ width: '100%' }} onClick={handleClickOpen}>
          <div className="embla overflow_show">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {images.map((image, index) => (
                  <Slide image={image} key={index} selectedSlide={selectedSlide} index={index} />
                ))}
              </div>
            </div>
          </div>
        </Box>
        <Box sx={{ ...defaultButtonProps, marginRight: '10vw', right: 0 }} onClick={scrollNext}>        
          <RightArrow {...defaultSvgProps} />
        </Box>
      </Stack>
      <FullScreenDialog
        open={open}
        handleClose={handleClose}
        images={images}
      />
    </>
  )
}