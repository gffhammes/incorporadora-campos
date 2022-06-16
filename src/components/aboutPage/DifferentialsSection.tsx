import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'

type Props = {}

const differentials = [
  {
    title: 'QUALIDADE',
    text: 'Nononono nonono nonononono nonono nononono nono nononono nonononon non ononono nono no no nonononon non ononono  nono no nononono',
  },
  {
    title: 'CONFORTO',
    text: 'Nononono nonono nonononono nonono nononono nono nononono nonononon non ononono nono no no nonononon non ononono  nono no nononono',
  },
  {
    title: 'SEGURANÇA',
    text: 'Nononono nonono nonononono nonono nononono nono nononono nonononon non ononono nono no no nonononon non ononono  nono no nononono',
  },
]

const DifferentialsSection = (props: Props) => {
  return (
    <Box bgcolor='#E4E2E7'>
      <Container sx={{ py: 10 }}>
        <SectionTitle>DIFERENCIAIS</SectionTitle>
        <Grid container spacing={2}>
          {differentials.map(({title, text}) => (
            <Grid item key={title} xs={4}>
              <Box bgcolor='secondary.main' sx={{ color: 'white', p: 8, boxShadow: '15px 31px 82px rgba(18, 50, 131, .12)' }}>
                <Typography textAlign='center' fontSize={24} fontWeight={600} letterSpacing={4} sx={{ mb: 5 }}>{title}</Typography>
                <Typography textAlign='center'>{text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default DifferentialsSection