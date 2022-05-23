import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { getEnterpriseDetailsString } from '../../helpers/getEnterpriseDetailsString'

export const SummarySection = ({ enterpriseData }) => {
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
              <Image
                src={enterpriseData.image}
                alt={enterpriseData.name}
                layout='fill'
                objectFit='cover'
                objectPosition='left'
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={3}>              
              <Typography fontSize={32} fontWeight={500} letterSpacing={1} sx={{ color: '#1a47bc' }}>{enterpriseData.pageTitle.toUpperCase()}</Typography>
              <Typography sx={{ whiteSpace: 'pre-wrap' }}>{enterpriseData.pageText}</Typography>
              <Box>              
                <Typography fontSize={20} fontWeight={600} letterSpacing={1} sx={{ color: '#1a47bc' }}>{getEnterpriseDetailsString(enterpriseData.slug)}</Typography>
                <Typography fontSize={20} fontWeight={600} letterSpacing={1} sx={{ color: '#1a47bc' }}>{enterpriseData.apartmentsOptions}</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
