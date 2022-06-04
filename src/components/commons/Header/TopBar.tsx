import { Box, Container, Stack, Typography, useTheme } from '@mui/material'
import React, { FC } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FollowUs, FollowUsIcons } from '../FollowUs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { facebookUrl, instagramUrl, linkedinUrl } from '../../../constants/socialLinks';
import { useWhatsappLink } from '../../../hooks/useWhatsappLink';

export const TopBar = () => {
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up('sm'));
  const whatsappLink = useWhatsappLink();

  return (
    <Box bgcolor='#0d235e' sx={{ color: 'white', py: .75 }}>
      <Container>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} >
          {sizeSm
            ? <FollowUs /> 
            : <FollowUsIcons />
          }
          <a href={whatsappLink} target='_blank' rel="noreferrer" >
            <Stack direction='row' alignItems='center' spacing={1}> 
              <WhatsAppIcon sx={{ fontSize: 18 }} />
              <Typography fontSize={12}>47 9 99138-2244</Typography>
            </Stack>
          </a>
        </Stack>
      </Container>  
    </Box>
  )
}