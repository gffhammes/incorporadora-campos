import { Stack, SxProps, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { facebookUrl, instagramUrl, linkedinUrl } from '../../constants/socialLinks';

export const FollowUsIcons = () => {
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <a href={linkedinUrl} target='_blank' rel="noreferrer" style={{ display: 'flex' }} ><LinkedInIcon sx={{ fontSize: 18 }} /></a>
      <a href={instagramUrl} target='_blank' rel="noreferrer" style={{ display: 'flex' }} ><InstagramIcon sx={{ fontSize: 18 }} /></a>
      <a href={facebookUrl} target='_blank' rel="noreferrer" style={{ display: 'flex' }} ><FacebookIcon sx={{ fontSize: 18 }} /></a>
    </Stack>  
  )
}

export const FollowUs = ({ sx }: { sx?: SxProps  }) => {
  return (
    <Stack direction='row' alignItems='center' spacing={1} sx={sx}>              
      <Typography fontSize={12}>SIGA NAS REDES SOCIAIS</Typography>
      <FollowUsIcons />
    </Stack>
  )
}

