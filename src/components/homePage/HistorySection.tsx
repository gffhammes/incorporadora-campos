import { Box, Button, Container, Stack, styled, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ContainedWhiteButton } from '../commons/Button'
import { SectionTitle } from '../commons/SectionTitle'

const imageStyle = {
  position: 'relative',
  width: '100%',
  height: '10rem'
}

export const HistorySection = () => {
  return (
    <Box bgcolor='primary.main' >
      <Container maxWidth='sm' sx={{ py: 10 }}>
        <Stack spacing={4}>          
          <Box sx={{ color: 'white', textAlign: 'center' }} >
            <SectionTitle theme='light'>UMA HISTÓRIA DE SUCESSO</SectionTitle>
            <Typography fontSize={21} sx={{ mt: 5 }}>
              Estar na vanguarda com os empreendimentos imobiliários, criar conexões com seus sócios, clientes e comunidade nos impulsiona, nos move. Venha fazer parte da nossa história, somos muito além do que se constrói... somos a sua próxima jogada.
            </Typography>
          </Box>
          <Stack direction='row' spacing={10}>
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
                src='/images/logo-zico.png'
                layout='fill'
                alt='Bolshoi'
                objectFit='contain'
              />
            </Box>
            <Box sx={imageStyle}>
              <Image
                src='/images/logo-bolshoi.png'
                layout='fill'
                alt='Bolshoi'
                objectFit='contain'
              />
            </Box>
          </Stack>
          <Box sx={{ display: 'flex' }}>            
            <ContainedWhiteButton>SAIBA MAIS</ContainedWhiteButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
