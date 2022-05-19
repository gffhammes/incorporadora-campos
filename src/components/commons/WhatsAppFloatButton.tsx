import { Box, Stack, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react'

const buttonStyle = {
  position: 'fixed',
  height: 'fit-content',
  width: 'fit-content',
  backgroundColor: '#51c33a',
  top: '60vh',
  right: 0,
  boxShadow: 10,
  color: '#fff',
  borderRadius: '1rem 0 0 1rem',
}

export const WhatsAppFloatButton = () => {
  return (
    <Box sx={buttonStyle}>
      <a href='https://api.whatsapp.com/send/?phone=5547991382244&text&app_absent=0' target='_blank' rel="noreferrer" >        
        <Stack alignItems='center' spacing={1} sx={{ p: 2 }} >        
          <WhatsAppIcon sx={{ fontSize: 40 }} />
          <Typography fontWeight={500} letterSpacing={1} fontSize={12} >WHATSAPP</Typography>
        </Stack>
      </a>
    </Box>
  )
}
