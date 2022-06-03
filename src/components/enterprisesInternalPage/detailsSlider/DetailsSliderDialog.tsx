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
  transitionProperty: 'filter, box-shadow',
  transitionDuration: '1s',
  transitionTimingFunction: 'ease',
  width: '100%',
  aspectRatio: '2 / 1',
}

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

export const Slider = ({ images }) => {
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
    <Stack direction='row' alignItems='center' sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ ...defaultButtonProps, marginLeft: '10vw', left: 0 }} onClick={scrollPrev}>        
        <ArrowBackIosIcon {...defaultSvgProps} sx={{ color: 'white' }} />
      </Box>
      <Box sx={{ width: '100%', height: '100%'}}>
        <Box sx={sxEmbla}>
          <Box sx={{ height: '100%' }} ref={emblaRef}>
            <Box sx={sxEmblaContainer}>
              {images.map((image, index) => (
                <Box bgcolor='#000' sx={sxEmblaSlide} key={index} >
                  <Image
                    src={image}
                    alt='Image'
                    layout='fill'
                    objectFit='contain'
                    priority
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...defaultButtonProps, marginRight: '10vw', right: 0 }} onClick={scrollNext}>        
        <ArrowForwardIosIcon {...defaultSvgProps} sx={{ color: 'white' }} />
      </Box>
    </Stack>
  )
}

export default function FullScreenDialog({ open, handleClose, images }) {
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
              Galeria
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
        <Box sx={{ height: '100%' }}>
          <Slider images={images} />
        </Box>
      </Dialog>
  )
}
