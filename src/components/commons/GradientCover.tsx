import { Box } from '@mui/material'
import React from 'react'

export const PrimaryGradientCover = () => {
  return (    
    <Box
      sx={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundImage: 'linear-gradient(rgba(14, 30, 66, 1) , rgba(14, 30, 66, 0.5) 20%, rgba(14, 30, 66, 0.1) 100%)',
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