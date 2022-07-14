import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';

type Props = {
  image: string;
  label: string;
}

const Slide = ({ image, label }: Props) => {
  return (
    <Stack sx={{ width: '100%', height: '100%', '& .iiz > div': { height: '100%' } }} alignItems='center' justifyContent='center'>        
      <InnerImageZoom
        src={image}
        zoomSrc={image}
        zoomType='hover'
        hideHint={true}
        // height='100%'
        // width='100%'
      />
      <Typography textAlign='center' sx={{ mt: 3 }} fontSize={18} fontWeight={500}>{label}</Typography>
    </Stack>
  )
}

export default Slide