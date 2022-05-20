import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LogoCampos from '../../../public/vectors/incorporadora-campos-logo.svg';
import { FollowUs } from './FollowUs';
import useMediaQuery from '@mui/material/useMediaQuery';

const TopBar = () => {
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box bgcolor='primary.main' sx={{ color: 'white', py: 1 }}>
      <Container>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} >
          {sizeSm
            ? <FollowUs /> 
            : <Stack direction='row' spacing={1}>
                <LinkedInIcon />
                <InstagramIcon />
                <FacebookIcon />
              </Stack>            
          }
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
            <Box component={Link} href='/' passHref>
              <a style={{ height: '100%', width: '8rem' }} >
                <LogoCampos width='100%' height='100%' />
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </nav>
  )
}

export const Header = () => {
  return (
    <Box component='header' sx={{ position: 'absolute', width: '100%', zIndex: 999 }}>
      <TopBar />
      <Menu />
    </Box>
  )
}
