import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { EnterpriseCard } from './EnterpriseCard'


export const EnterprisesSection = ({ enterprises }) => {
  return (
    <Box>
      <Container sx={{ py: 10, maxWidth: '1100px' }} maxWidth={false}>
        <Grid container spacing={10}>
          {enterprises.map((enterprise, index) => (
            <Grid item key={index} xs={12}>
              <EnterpriseCard enterprise={enterprise} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
