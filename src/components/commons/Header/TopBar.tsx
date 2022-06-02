import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import React, { FC } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FollowUs } from '../FollowUs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { facebookUrl, instagramUrl, linkedinUrl, whatsappUrl } from '../../../constants/socialLinks';

export const TopBar = () => {
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box bgcolor='#0d235e' sx={{ color: 'white', py: 1 }}>
      <Container>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} >
          {sizeSm
            ? <FollowUs /> 
            : <Stack direction='row' spacing={1} alignItems='center'>
                <a href={linkedinUrl} target='_blank' rel="noreferrer" ><LinkedInIcon /></a>
                <a href={instagramUrl} target='_blank' rel="noreferrer" ><InstagramIcon /></a>
                <a href={facebookUrl} target='_blank' rel="noreferrer" ><FacebookIcon /></a>
              </Stack>           
          }
          <a href={whatsappUrl} target='_blank' rel="noreferrer" >
            <Stack direction='row' alignItems='center' spacing={2}> 
              <WhatsAppIcon />
              <Typography>47 9 99138-2244</Typography>
            </Stack>
          </a>
        </Stack>
      </Container>  
    </Box>
  )
}