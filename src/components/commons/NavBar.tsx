import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LogoCampos from '../../../public/vectors/incorporadora-campos-logo.svg';
import { FollowUs } from './FollowUs';

const TopBar = () => {
  return (
    <Box bgcolor='primary.main' sx={{ color: 'white', py: 1 }}>
      <Container>
        <Stack direction={{ xs: 'column', md: 'row'}} justifyContent='space-between' alignItems='center'>
          <FollowUs />
          <Stack direction='row' alignItems='center' spacing={2}> 
            <WhatsAppIcon />             
            <Typography>47 9 99138-2244</Typography>
          </Stack>
        </Stack>
      </Container>  
    </Box>
  )
}

const Menu = () => {
  return(
    <nav>
      <Box>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>            
            <LogoCampos />
          </Box>
        </Container>
      </Box>
    </nav>
  )
}

export const NavBar = () => {
  return (
    <Box sx={{ position: 'absolute', width: '100%', zIndex: 999 }}>
      <TopBar />
      <Menu />
    </Box>
  )
}
