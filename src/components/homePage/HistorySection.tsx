import { Box, Button, Container, Stack, styled, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ContainedWhiteButton } from '../commons/Button'
import { SectionTitle } from '../commons/SectionTitle'

const imageStyle = {
  position: 'relative',
  width: { xs: '40%', sm: '100%' },
  height: { xs: '6rem', sm: '10rem' }
}

export const HistorySection = () => {
  return (
    <Box bgcolor='primary.main' >
      <Container maxWidth='sm' sx={{ py: 10 }}>
        <Stack spacing={{ xs: 8, md: 4 }}>          
          <Box sx={{ color: 'white', textAlign: 'center' }} >
            <SectionTitle theme='light'>UMA HISTÓRIA DE SUCESSO</SectionTitle>
            <Typography fontSize={21} sx={{ mt: 5 }}>
            Estar na vanguarda dos empreendimentos imobiliários e criar conexões com nossos sócios, clientes e comunidade nos impulsiona todos os dias.
            </Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8} alignItems='center'>
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
          <Box sx={{ display: 'flex' }}>
            <Link href='contato' passHref>
              <Box component='a' sx={{ width: 'fit-content', mx: 'auto' }}>                
                <ContainedWhiteButton>SAIBA MAIS</ContainedWhiteButton>
              </Box>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
