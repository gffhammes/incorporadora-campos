import { Box, Container } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'

type Props = {}

export const SupplierForm = (props: Props) => {
  return (
    <Box bgcolor='#E4E2E7'>
      <Container sx={{ py: 10 }}>
        <SectionTitle>SEJA UM FORNECEDOR</SectionTitle>
      </Container>
    </Box>
  )
}