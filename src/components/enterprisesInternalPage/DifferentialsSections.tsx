import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { differentials } from '../../constants/differentials'
import { SectionTitle } from '../commons/SectionTitle'

export const DifferentialsSections = ({ enterpriseData }) => {
  const { API_URL } = process.env;

  return (
    <Box bgcolor='#f2f2f2' id='differentials'>
      <Container sx={{ py: 7 }}>
        <SectionTitle>DIFERENCIAIS</SectionTitle>
        <Grid container rowSpacing={{ xs: 8, md: 5 }} columnSpacing={4} columns={10} alignItems='flex-start' justifyContent='center'>
          {enterpriseData.diferenciais.data.map((differential, index) => (
            <Grid item xs={5} sm={4} md={3} lg={2} key={index}>
              <Stack alignItems='center' spacing={3}>                
                <Box sx={{ position: 'relative', width: '100%', maxWidth: '7rem', aspectRatio: '1 / 1' }}>
                  <Image
                    src={differential.attributes.Imagem.data.attributes.url}
                    alt={differential.attributes.Titulo}
                    layout='fill'
                  />
                </Box>
                <Typography letterSpacing={1} textAlign='center' fontSize={{ xs: 15, md: 18 }} >{differential.attributes.Titulo?.toUpperCase()}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
