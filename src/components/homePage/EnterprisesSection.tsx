import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { ContainedPrimaryButton } from '../commons/Button'
import { SectionTitle } from '../commons/SectionTitle'

const imageStyle = {
  height: '20rem',
  width: '100%',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

const buildings = [
  {
    image: '/images/SAN-PIETRO.png',
    name: 'Piazza San Pietro',
    status: 'Em obras',
    district: 'América',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/piazza-del-mare.png',
    name: 'Piazza Del Mare',
    status: 'Lançamento',
    district: 'Itacolomi',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/piazza-san-marco.png',
    name: 'Piazza San Marco',
    status: '100% vendido',
    district: 'Costa e Silva',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
  {
    image: '/images/piazza-san-carlo.png',
    name: 'Piazza San Carlo',
    status: '100% vendido',
    district: 'Costa e Silva',
    area: 'Área privativa entre 148 e 171 m²',
    bedrooms: '3 e 4 dormitórios | 3 suítes'
  },
]

export const EnterprisesSection = () => {
  return (
    <Box bgcolor='#f2f2f2' >
      <Container sx={{ py: 10 }}>        
        <SectionTitle>NOSSOS EMPREENDIMENTOS</SectionTitle>
        <Grid container spacing={2}>
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
        </Grid>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <ContainedPrimaryButton>VEJA TODOS</ContainedPrimaryButton>
        </Box>
      </Container>
    </Box>
  )
}
