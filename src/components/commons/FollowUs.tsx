import { Stack, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const FollowUs = () => {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>              
      <Typography>SIGA NAS REDES SOCIAIS</Typography>
      <Stack direction='row' spacing={1}>
        <LinkedInIcon />
        <InstagramIcon />
        <FacebookIcon />
      </Stack>
    </Stack>
  )
}
