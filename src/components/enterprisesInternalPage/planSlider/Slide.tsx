import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import { ContainedSecondaryButton } from '../../commons/Button';

type Props = {
  image: string;
  label: string;
  handleOpenFullScreen: () => void;
}

const sxImageBox = {
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  '& > .iiz > div': {height: '100%' },
  '&:hover': {
    '& > button': {
      transform: 'translate(-50%, -100%)'
    }
  }
}

const sxButton = {
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translate(-50%, 100%)',
}

const Slide = ({ image, label, handleOpenFullScreen }: Props) => {
  return (
    <Stack sx={{ width: '100%', height: '100%' }} alignItems='center' justifyContent='center'>
      <Box sx={sxImageBox}>
        <InnerImageZoom
          src={image}
          zoomSrc={image}
          zoomType='hover'
          hideHint={true}
        />
        <ContainedSecondaryButton sx={sxButton} onClick={() => handleOpenFullScreen()}>TELA CHEIA</ContainedSecondaryButton>
      </Box>
      <Typography textAlign='center' sx={{ mt: 3 }} fontSize={18} fontWeight={500}>{label}</Typography>
    </Stack>
  )
}

export default Slide