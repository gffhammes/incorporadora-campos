import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { ContainedPrimaryButton } from '../commons/Button'
import { SectionTitle } from '../commons/SectionTitle'
import { EnterprisesSlider } from './EnterprisesSlider'



export const EnterprisesSection = () => {
  return (
    <Box bgcolor='#f2f2f2' >
      <Container sx={{ py: 10 }}>        
        <SectionTitle theme='dark'>NOSSOS EMPREENDIMENTOS</SectionTitle>
        <EnterprisesSlider />
        {/* <Grid container spacing={2} sx={{ mt: 5 }}>
          {buildings.map((building, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Box sx={{ width: '100%', height: 'fit-content', backgroundImage: 'linear-gradient(transparent 20%, #e4e2e7 20%)', p: 2 }}>
                <Box sx={{ ...imageStyle, backgroundImage: `url(${building.image})` }} />
                <Stack sx={{ mt: 2 }} direction='row' justifyContent='space-between' alignItems='center' >                              
                  <Typography fontSize={13} fontWeight={600} sx={{ color: 'secondary.main', textDecoration: 'underline' }} >{building.name.toUpperCase()}</Typography>
                  <Typography fontSize={10}>{building.status.toUpperCase()}</Typography>
                </Stack>
                <Stack sx={{ mt: 2, fontSize: 14 }} spacing={.5} >
                  <Typography>{building.district}</Typography>
                  <Typography>{building.area}</Typography>
                  <Typography>{building.bedrooms}</Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid> */}
        <Box sx={{ display: 'flex', mt: 6 }}>
          <ContainedPrimaryButton>VEJA TODOS</ContainedPrimaryButton>
        </Box>
      </Container>
    </Box>
  )
}
