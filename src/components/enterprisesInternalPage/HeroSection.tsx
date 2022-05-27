import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

export const HeroSection = ({ enterpriseData }) => {
  const [target, setTarget] = useState(null)


  function goToInfoSection(): void {    
    target?.scrollIntoView()
  }

  useEffect(() => {
    setTarget(document.getElementById('info'));
  }, [])


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
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>  
          <Stack sx={{ mx: 'auto' }} alignItems='center' justifyContent='flex-start' >
            <Box sx={{ minHeight: '15rem', height: '50vw', maxHeight: '25rem', position: 'relative', aspectRatio: '1 / 1' }} >                           
              <Image
                src={enterpriseData.logo}
                alt={enterpriseData.name}
                layout='fill'
                objectFit='contain'
              />
            </Box>
          </Stack>
        </Container>
        <Box className='float' sx={{ position: 'absolute', zIndex: 999, color: 'white', bottom: 0, right: '50%', mb: 5 }}>
          <IconButton onClick={goToInfoSection} sx={{ color: 'white', fontSize: '4rem' }}>
            <KeyboardArrowDownIcon fontSize='inherit' />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}
