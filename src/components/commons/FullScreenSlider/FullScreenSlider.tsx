import { Box, Modal, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

interface IProps {
  open: boolean;
  slides: ReactNode[];
  selectedSlide: number;
  handleClose: () => void;
}

const sxSliderWrapper = {
  position: 'fixed',
  height: '100vh',
  width: '100%',
  top: 0,
  right: 0,
  zIndex: 1500,
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const FullScreenSlider = ({ open, handleClose }: IProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={sxSliderWrapper}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  )
}

export default FullScreenSlider