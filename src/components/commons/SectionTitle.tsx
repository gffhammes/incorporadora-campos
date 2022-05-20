import { Typography } from '@mui/material'
import React from 'react'

const titleStyle = {
  pb: 4,
  width: 'fit-content',
  mx: 'auto'
}

export const SectionTitle = ({ theme, children }) => {
  const textColor = theme === 'light' ? 'white' : '#0E1E42';
  const borderColor = theme === 'light' ? 'white' : '#c6c6c6';

  return (
    <Typography
      variant='h2'
      fontSize={{ xs: 20, sm: 28}}
      fontWeight={500}
      letterSpacing={6}
      textAlign='center'
      sx={{ ...titleStyle, borderBottom: `1px solid ${borderColor}`, color: textColor }} 
    >
      {children}
    </Typography>     
  )
}
