import { Box, Fab, SxProps, Theme } from '@mui/material'
import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  open: boolean;
  handleToggle: () => void;
}

const sxButton: SxProps<Theme> = {
  position: 'fixed',
  zIndex: 1000,
  right: '1rem',
  bottom: '1rem',
}

const ContactButton = ({ open, handleToggle }: IProps) => {
  return (
    <Fab color="secondary" sx={sxButton} onClick={() => handleToggle()}>
      {open ? <CloseIcon /> : <MessageIcon />}
    </Fab>
  )
}

export default ContactButton