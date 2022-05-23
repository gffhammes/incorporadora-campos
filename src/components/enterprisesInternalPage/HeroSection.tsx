import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

export const HeroSection = ({ enterpriseData }) => {
  return (
    <Box sx={{ position: 'relative', zIndex: 500, height: '100%', }}>
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundImage: `url(${enterpriseData.banner})`,
          backgroundSize: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundImage: 'linear-gradient(rgb(14, 30, 66) 5%, rgba(14, 30, 66, 0.1) 70%)',
        }}
      />
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 500, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <Container sx={{ display: 'flex', height: '50%', mb: 10 }}>  
          <Stack sx={{ mx: 'auto' }} alignItems='center' justifyContent='flex-start' >
            <Typography>{enterpriseData.name}</Typography>
            {/* <Box sx={{ minHeight: '5rem', height: '35vw', maxHeight: '10rem', width: '100%' }} >                           
              <PizzaSanPietro width='100%' height='100%' />
            </Box> */}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
