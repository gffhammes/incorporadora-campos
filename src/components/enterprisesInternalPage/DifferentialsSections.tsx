import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'

export const DifferentialsSections = ({ enterpriseData }) => {
  return (
    <Box bgcolor='#f2f2f2'>
      <Container sx={{ py: 10 }}>
        <SectionTitle>DIFERENCIAIS</SectionTitle>
        <Grid container spacing={2} columns={10}>
          {enterpriseData.differentials.map((differential, index) => (
            <Grid item xs={2} key={index}>
              <Typography>{differential}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
