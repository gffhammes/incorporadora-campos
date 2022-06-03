import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { differentials } from '../../constants/differentials'
import { SectionTitle } from '../commons/SectionTitle'

export const DifferentialsSections = ({ enterpriseData }) => {
  return (
    <Box bgcolor='#f2f2f2' id='differentials'>
      <Container sx={{ py: 10 }}>
        <SectionTitle>DIFERENCIAIS</SectionTitle>
        <Grid container rowSpacing={8} columnSpacing={4} columns={10} alignItems='flex-start' justifyContent='center'>
          {enterpriseData.differentials.map((differential, index) => (
            <Grid item xs={5} sm={4} md={3} lg={2} key={index}>
              <Stack alignItems='center' spacing={3}>                
                <Box sx={{ position: 'relative', width: '100%', maxWidth: '7rem', aspectRatio: '1 / 1' }}>
                  <Image
                    src={`/images/differentials/${differential}.png`}
                    alt={differentials[differential]}
                    layout='fill'
                  />
                </Box>
                <Typography letterSpacing={1} textAlign='center' fontSize={{ xs: 15, md: 18 }} >{differentials[differential].toUpperCase()}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
