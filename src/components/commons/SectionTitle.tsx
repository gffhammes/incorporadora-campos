import { Typography } from '@mui/material'
import React from 'react'

const titleStyle = {
  mb: 4,
  pb: 4,
  borderBottom: '1px solid #fff',
  width: 'fit-content',
  mx: 'auto'
}

export const SectionTitle = ({ children }) => {
  return (
    <Typography
      variant='h2'
      fontSize={28}
      fontWeight={500}
      letterSpacing={6}
      sx={titleStyle} 
    >
      {children}
    </Typography>     
  )
}
