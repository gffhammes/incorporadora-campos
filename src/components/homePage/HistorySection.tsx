import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const HistorySection = () => {
  return (
    <Box bgcolor='primary.main' >
      <Container>
        <Box sx={{ color: 'white', textAlign: 'center', py: 10 }} >          
          <Typography variant='h2' fontSize={28} fontWeight={500} letterSpacing={6} sx={{ mb: 4, pb: 4, borderBottom: '1px solid #fff', width: 'fit-content', mx: 'auto' }} >UMA HISTÓRIA DE SUCESSO</Typography>
          <Typography fontSize={21} sx={{ maxWidth: '43ch', mx: 'auto', mt: 4 }}>
            Estar na vanguarda com os empreendimentos imobiliários, criar conexões com seus sócios, clientes e comunidade nos impulsiona, nos move. Venha fazer parte da nossa história, somos muito além do que se constrói... somos a sua próxima jogada.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
