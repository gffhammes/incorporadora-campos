import { Box, Modal, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { ReactNode } from 'react'
import { Slider } from './Slider';

interface IProps {
  open: boolean;
  selectedSlide: number;
  slides: string[];
  handleClose: () => void;
}

const FullScreenSlider = ({ open, handleClose, slides, selectedSlide }: IProps) => {
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up('sm'));

  const sxSliderWrapper = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 20vw)',
    height: sizeSm ? 'calc(100% - 20vh)' : 'calc(100% - 50vh)',
    bgcolor: 'transparent',
    border: 'none',
    outline: 'none',
  };

  
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={sxSliderWrapper}>
        <Slider images={slides} startIndex={selectedSlide} />
      </Box>
    </Modal>
  )
}

export default FullScreenSlider