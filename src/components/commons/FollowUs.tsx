import { Stack, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { facebookUrl, instagramUrl, linkedinUrl } from '../../constants/socialLinks';

export const FollowUs = () => {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>              
      <Typography>SIGA NAS REDES SOCIAIS</Typography>
      <Stack direction='row' spacing={1} alignItems='center'>
        <a href={linkedinUrl} target='_blank' rel="noreferrer" ><LinkedInIcon /></a>
        <a href={instagramUrl} target='_blank' rel="noreferrer" ><InstagramIcon /></a>
        <a href={facebookUrl} target='_blank' rel="noreferrer" ><FacebookIcon /></a>
      </Stack>
    </Stack>
  )
}
