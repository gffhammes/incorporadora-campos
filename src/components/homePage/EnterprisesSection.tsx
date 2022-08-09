import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ContainedPrimaryButton } from '../commons/Button'
import { SectionTitle } from '../commons/SectionTitle'
import { EnterprisesSlider } from './EnterprisesSlider'

export const EnterprisesSection = () => {
  const { API_URL } = process.env;
  const { data, isFetching } = useFetch<any>('/api/empreendimentos?sort=Ordem&populate=*');

  return (
    <Box bgcolor='#f2f2f2' >
      <Container sx={{ py: 7 }}>        
        <SectionTitle theme='dark' marginBottom={false} >NOSSOS EMPREENDIMENTOS</SectionTitle>
        <EnterprisesSlider enterprises={data?.data} loading={isFetching} />
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Link href='/empreendimentos' passHref>
            <a style={{ margin: 'auto auto' }}>              
              <ContainedPrimaryButton>VEJA TODOS</ContainedPrimaryButton>
            </a>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}
