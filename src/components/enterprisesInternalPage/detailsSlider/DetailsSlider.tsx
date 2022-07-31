import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, Stack } from '@mui/material'
import LeftArrow from '../../../../public/vectors/arrows/left-arrow.svg'
import RightArrow from '../../../../public/vectors/arrows/right-arrow.svg'
import { defaultSvgProps } from '../../../constants/defaultSvgProps'
// import FullScreenSliderDialog from './FullScreenSliderDialog'
import { Slide } from './Slide'
import FullScreenSlider from '../../commons/FullScreenSlider/FullScreenSlider'

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

export const DetailsSlider = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, draggable: false })
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [openFullScreen, setOpenFullScreen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpenFullScreen(true);
  };

  const handleClose = () => {
    setOpenFullScreen(false);
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

  const fullScreenSlides = images.map((image) => ({
    imageSrc: image.attributes.url,
  }))

  return (
    <>
      <Stack direction='row' alignItems='center' sx={{ height: '100%', width: '100%' }}>
        <Box sx={{ ...defaultButtonProps, marginLeft: '10vw', left: 0 }} onClick={scrollPrev}>        
          <LeftArrow {...defaultSvgProps} />
        </Box>
        <Box sx={{ width: '100%' }} >
          <div className="embla overflow_show">
            <div className="embla__viewport" ref={emblaRef}>
              <Box className="embla__container">
                {images.map((image, index) => (
                  <Slide
                    key={index}
                    handleClickOpen={handleClickOpen}
                    image={image}
                    selectedSlide={selectedSlide}
                    index={index}
                  />
                ))}
              </Box>
            </div>
          </div>
        </Box>
        <Box sx={{ ...defaultButtonProps, marginRight: '10vw', right: 0 }} onClick={scrollNext}>        
          <RightArrow {...defaultSvgProps} />
        </Box>
      </Stack>
      <FullScreenSlider
        open={openFullScreen}
        slides={fullScreenSlides}
        handleClose={handleClose}
        selectedSlide={selectedSlide}
      />
    </>
  )
}