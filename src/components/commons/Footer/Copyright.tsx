import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const texts = [
  'Campos Incorporadora © 2022',
  'CNPJ 18.204.575/0001-91',
  'Todos Direitos Reservados',
  'Desenvolvido por S!mple Studio',
]

export const Copyright = () => {
  return (
    <Box bgcolor='primary.main' sx={{ borderTop: '1px solid #656565' }} >
      <Container sx={{ py: 2 }}>        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='center'
          alignItems='center'
          spacing={2}
          divider={<Divider orientation="vertical" flexItem sx={{ borderColor: '#969696' }}  />}
        >
          {texts.map((text, index) => (
            index === texts.length - 1
              ? <a key={index} href='https://www.instagram.com/siga.simple/' target='_blank' rel="noreferrer">
                  <Typography  fontSize={12} letterSpacing={1.5} sx={{ color: '#969696' }}>{text.toUpperCase()}</Typography>
                </a>
              : <Typography key={index} fontSize={12} letterSpacing={1.5} sx={{ color: '#969696' }}>{text.toUpperCase()}</Typography>

          ))}
        </Stack>
      </Container>
    </Box>
  )
}