import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const iframeSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.465250255175!2d-48.8522585!3d-26.279013499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deaf8d4ba9e573%3A0x9ef46aa0e30365b6!2sCampos%20Incorporadora!5e0!3m2!1spt-BR!2sbr!4v1654042004903!5m2!1spt-BR!2sbr'

export const MapsSection = () => {
  return (
    <Box>
      <Container sx={{ py: 3}}>
        <Typography fontSize={20} fontWeight={500} letterSpacing={2} textAlign='center'>Rua Pará, 276 - América - Joinville/SC - 89204-420</Typography>
      </Container>
      <iframe
        src={iframeSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  )
}
