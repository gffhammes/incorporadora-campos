import { Box, Stack, Typography, useTheme } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const buttonStyle = {
  position: 'fixed',
  zIndex: 999,
  height: 'fit-content',
  width: 'fit-content',
  backgroundColor: '#51c33a',
  right: 0,
  boxShadow: 10,
  color: '#fff',
  borderRadius: '1rem 0 0 1rem',
}

export const WhatsAppFloatButton = () => {
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ ...buttonStyle, top: sizeSm ? '60%' : '80%' }}>
      <a href='https://api.whatsapp.com/send/?phone=5547991382244&text&app_absent=0' target='_blank' rel="noreferrer" >        
        <Stack alignItems='center' spacing={1} sx={{ p: 2 }} >        
          <WhatsAppIcon sx={{ fontSize: 40 }} />
          <Typography fontWeight={500} letterSpacing={1} fontSize={12} >WHATSAPP</Typography>
        </Stack>
      </a>
    </Box>
  )
}
