import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const MapsSection = ({ enterpriseData }) => {
  return (
    <Box id='localization'>      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5071488570497!2d-48.85755258442332!3d-26.27765447334649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafdc704a560d%3A0x2f13bce6e0bac261!2sR.%20Jo%C3%A3o%20Pessoa%2C%20912%20-%20Am%C3%A9rica%2C%20Joinville%20-%20SC%2C%2089218-280!5e0!3m2!1spt-BR!2sbr!4v1653617496744!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
      <Box>
        <Container sx={{ py: 5 }}>
          <Typography fontSize={20} letterSpacing={1} textAlign='center' sx={{ width: 'fit-content', mx: 'auto' }}>{enterpriseData.fullAddress}</Typography>
        </Container>
      </Box>
    </Box>
  )
}
