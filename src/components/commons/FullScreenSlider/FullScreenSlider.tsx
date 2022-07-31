import { Box, IconButton, Modal, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { ReactNode, useMemo } from 'react'
import { Slider } from './Slider';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  open: boolean;
  selectedSlide: number;
  slides: {
    imageSrc: string;
    title?: string;
  }[];
  handleClose: () => void;
}

const FullScreenSlider = ({ open, handleClose, slides, selectedSlide }: IProps) => {
  const theme = useTheme();
  const sizeLg = useMediaQuery(theme.breakpoints.up('lg'));

  const sxSliderWrapper = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: 'transparent',
    border: 'none',
    outline: 'none',
    p: sizeLg ? 10 : 2
  };
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={sxSliderWrapper}>
        <IconButton onClick={handleClose} sx={{ position: 'absolute', zIndex: 1500, right: sizeLg ? '2rem' : '1rem', top: '2rem', color: 'white' }}>
          <CloseIcon />
        </IconButton>
        <Slider slides={slides} startIndex={selectedSlide} />
      </Box>
    </Modal>
  )
}

export default FullScreenSlider