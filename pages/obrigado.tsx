import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Footer } from '../src/components/commons/Footer/Footer'

type Props = {}

const ThankYou = (props: Props) => {
  return (
    <>    
      <Box bgcolor='secondary.main' sx={{ height: '100%', width: '100%' }}>
        <Container sx={{ pb: 10, pt: 20, height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 4 }}>
          {/* <Typography variant='h2'>Recebemos seu contato!</Typography> */}
          <Typography variant='h4'>Seu contato foi cadastrado em nossa base de e-mails!</Typography>
        </Container>
      </Box>
      {/* <Footer /> */}
    </>
  )
}

export default ThankYou