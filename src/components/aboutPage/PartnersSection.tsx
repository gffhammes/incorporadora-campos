import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { defaultSectionPadding } from '../../constants/defaultSectionPadding'

type Props = {}

const imageStyle = {
  position: 'relative',
  width: { xs: '40%', sm: '100%' },
  height: { xs: '6rem', sm: '10rem' }
}

const PartnersSection = (props: Props) => {
  return (
    <Box bgcolor='#1B3781'>
      <Container sx={{ py: 8 }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={10} alignItems='center' justifyContent='space-between'>
          <Typography sx={{ color: 'white' }} textAlign={{ xs: 'center', lg: 'left' }} fontSize={28} letterSpacing={8} fontWeight={400}>NOSSOS PARCEIROS</Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ flex: 'max-content', width: { xs: '70%',lg: '100%'}, ml: { xs: 0, lg: '10rem!important' } }} spacing={8} alignItems='center'>
            <Box sx={imageStyle}>
              <Image
                src='/images/logo-bolshoi.png'
                layout='fill'
                alt='Bolshoi'
                objectFit='contain'
              />
            </Box>
            <Box sx={imageStyle}>
              <Image
                src='/images/assinatura-zico-pdf.png'
                layout='fill'
                alt='Zico'
                objectFit='contain'
              />
            </Box>
            <Box sx={imageStyle}>
              <Box
                component={Image}
                src='/images/logo_millebier.png'
                layout='fill'
                alt='Mille Bier'
                objectFit='contain'
                sx={{ transition: '.3s ease all', filter: 'saturate(0)', '&:hover': { filter: 'saturate(1)' } }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default PartnersSection