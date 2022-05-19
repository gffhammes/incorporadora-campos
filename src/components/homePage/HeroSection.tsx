import { Box, Typography } from '@mui/material'
import React from 'react'

export const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', zIndex: 500, height: '100vh', }}>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 500,
          height: '100%',
          width: '100%',
          backgroundImage: 'url("/images/campos-incorporadora-san-pietro.jpg")',
          backgroundSize: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          zIndex: 510,
          height: '100%',
          width: '100%',
          backgroundImage: 'linear-gradient(#0E1E42, rgba(14, 30, 66, 0) 50%)',
        }}
      />
    </Box>
  )
}
