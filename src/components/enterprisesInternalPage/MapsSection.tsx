import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const MapsSection = ({ enterpriseData }) => {

  const address = encodeURI(enterpriseData.fullAddress)

  return (
    <Box id='localization'>
      <iframe
        src={`https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
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