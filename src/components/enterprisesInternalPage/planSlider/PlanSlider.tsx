import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FullScreenDialog from '../detailsSlider/DetailsSliderDialog';

const sxButton = (position: 'left' | 'right') => {

  const positionStyle
    = position === 'left'
      ? {
          left: 0,
          transform: { xs: 'translateX(-75%)', md: 'translateX(-50%)' },

        }
      : {
          right: 0,
          transform: { xs: 'translateX(75%)', md: 'translateX(50%)' },
        }

  return {
    height: 'fit-content',
    color: '#1A47BC',
    position: 'absolute',
    zIndex: 200,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    ...positionStyle
  }
}

const sxImage = {
  position: 'relative',
  width: { xs: '100%', md: '90%' },
  mx: 'auto',
  height: '50vw',
  minHeight: { xs: '15rem', md: '16rem' },
  maxHeight: '30rem'
}

export const PlanSlider = ({ plans }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
      <Box sx={sxButton('left')} onClick={scrollPrev}>        
        <ArrowBackIosIcon />
      </Box>
      <div style={{ height: '100%', width: '100%' }}>
        <div className="embla" style={{ height: '100%', width: '100%' }}>
          <div className="embla__viewport" ref={emblaRef} style={{ height: '100%', width: '100%' }}>
            <div className="embla__container" style={{ height: '100%', width: '100%' }}>
              {plans.map((plan, index) => (
                <Box                        
                  key={index}
                  sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    flex: '0 0 100%',
                    marginRight: '16px',
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={handleClickOpen}
                >                  
                  <Box sx={sxImage}>
                    <Image
                      src={plan.image}
                      alt='image'
                      layout='fill'
                      objectFit='contain'
                    />
                  </Box>
                  <Typography textAlign='center' sx={{ mt: 3 }} fontSize={18} fontWeight={500}>{plan.label}</Typography>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Box sx={sxButton('right')} onClick={scrollNext}>
        <ArrowForwardIosIcon />
      </Box>
      <FullScreenDialog
        open={open}
        handleClose={handleClose}
        images={plans.map(plan => plan.image)}
      />
    </Box>
  )
} 