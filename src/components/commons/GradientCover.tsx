import { Box } from '@mui/material'
import React from 'react'

export const PrimaryGradientCover = () => {
  return (    
    <Box
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundImage: 'linear-gradient(rgb(14, 30, 66) 5%, rgba(14, 30, 66, 0.25) 70%)',
      }}
    />
  )
}

export const AboutGradientCover = () => {
  return (    
    <Box
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundImage: 'linear-gradient(#0E1E42, rgba(1, 1, 3, .04) 50%)',
      }}
    />
  )
}