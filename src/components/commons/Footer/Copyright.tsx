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
    <Box bgcolor='primary.main' >
      <Container sx={{ py: 2 }}>        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='center'
          alignItems='center'
          spacing={2}
          divider={<Divider orientation="vertical" flexItem sx={{ borderColor: '#fff' }}  />}
        >
          {texts.map((text, index) => (
            index === texts.length - 1
              ? <a href='https://www.instagram.com/siga.simple/' target='_blank' rel="noreferrer">
                  <Typography key={index} fontSize={12} letterSpacing={1.5} sx={{ color: '#fff' }}>{text.toUpperCase()}</Typography>
                </a>
              : <Typography key={index} fontSize={12} letterSpacing={1.5} sx={{ color: '#fff' }}>{text.toUpperCase()}</Typography>

          ))}
        </Stack>
      </Container>
    </Box>
  )
}
