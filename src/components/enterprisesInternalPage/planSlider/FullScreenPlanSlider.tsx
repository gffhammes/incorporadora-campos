import React, { useCallback, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Stack } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { defaultSvgProps } from '../../../constants/defaultSvgProps';
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import InnerImageZoom from 'react-inner-image-zoom';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const sxEmbla = {
  overflowX: 'hidden',
  overflowY: 'visible',
  height: '100%'
}

const sxEmblaContainer = {
  display: 'flex',
  height: '100%'
}

 const sxEmblaSlide = {
  position: 'relative',
  flex: '0 0 100%',
  marginRight: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  '& > .iiz': { m: 'auto' },
  '& > .iiz > div': { height: '100%' },
}

const defaultButtonSx = {
  zIndex: 500,
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: '20rem',
  cursor: 'pointer',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const buttonProps = {
  ...defaultSvgProps,
  sx: {
    filter: 'drop-shadow(0px 0px 5px rgba(26, 72, 188, 0.76))',
    color: 'secondary.main',
  }
}

const Slider = ({ images, startIndex, handleSelectedSlideChange }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  
  emblaApi?.on('select', () => {
    handleSelectedSlideChange(emblaApi.selectedScrollSnap())
  })

  return (
    <Stack direction='row' alignItems='center' sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ ...defaultButtonSx, marginLeft: '10vw', left: 0 }} onClick={scrollPrev}>        
        <ArrowBackIosIcon {...buttonProps} />
      </Box>
      <Box sx={{ width: '100%', height: '100%'}}>
        <Box sx={sxEmbla}>
          <Box sx={{ height: '100%' }} ref={emblaRef}>
            <Box sx={sxEmblaContainer}>
              {images.map((image, index) => (
                <Box bgcolor='#fff' sx={sxEmblaSlide} key={index} >
                  <InnerImageZoom
                    src={image.image}
                    zoomSrc={image.image}
                    zoomType='click'
                    hideHint={true}
                    zoomScale={2}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...defaultButtonSx, marginRight: '10vw', right: 0 }} onClick={scrollNext}>        
        <ArrowForwardIosIcon {...buttonProps} />
      </Box>
    </Stack>
  )
}

export default function FullScreenPlanSlider({ open, handleClose, images, startIndex }) {
  const [selectedSlide, setSelectedSlide] = useState<number>(startIndex);

  const handleSelectedSlideChange = (newIndex: number) => {
    setSelectedSlide(newIndex);
  }

  useEffect(() => setSelectedSlide(startIndex), [startIndex]);

  return (
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ flex: 1 }} variant="h6" component="div">
              {images[selectedSlide].label}
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton> 
          </Toolbar>
        </AppBar>
        <Box sx={{ height: '100%', overflowX: 'hidden' }}>
          <Slider images={images} startIndex={startIndex} handleSelectedSlideChange={handleSelectedSlideChange} />
        </Box>
      </Dialog>
  )
}
