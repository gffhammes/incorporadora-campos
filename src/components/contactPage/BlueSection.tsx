import { Box, Container, Stack, SxProps, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const sxBold: SxProps = {
  fontSize: '14',
  fontWeight: 'bold',
  width: 'fit-content'
}

export const BlueSection = () => {
  return (
    <Box bgcolor='#1B3781'>
      <Container sx={{ py: 10, color:'white' }}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='flex-start' spacing={5} sx={{ width: 'fit-content', mx: 'auto' }}>
          <Stack spacing={.5}>
            <a href='tel:47 9 99138-2244' style={{ width: 'fit-content' }}>              
              <Typography sx={sxBold} >LIGUE PARA NÓS: 47 9 99138-2244</Typography>
            </a>
            <Typography><strong>Atendimento</strong>: Segunda-feira à Sexta-feira</Typography>
            <a href='mailto:vendas@camposincorporadora.com.br'>
              <Typography><strong>E-mail</strong>: vendas@camposincorporadora.com.br</Typography> 
            </a> 
          </Stack>
          <Stack spacing={.5}>
            <Typography sx={sxBold} >TRABALHE CONOSCO!</Typography>
            <Typography>Envie um e-mail com seu currículo para:</Typography>
            <a href='mailto:contato@camposincorporadora.com.br'>                
              <Typography>contato@camposincorporadora.com.br</Typography>  
            </a>
          </Stack>
          <Box>
            <Typography sx={sxBold} >SIGA NAS REDES SOCIAIS</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
