import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { defaultLinkHoverProps } from '../../constants/defaultLinkHover'
import { scrollToTarget } from '../../helpers/scrollToTarget'

const scrollLinks = [
  {
    label: 'O Empreendimento',
    targetId: 'the-enterprise',
  },
  {
    label: 'Diferenciais',
    targetId: 'differentials',
  },
  {
    label: 'Opções de Planta',
    targetId: 'plan-options',
  },
  {
    label: 'Localização',
    targetId: 'localization',
  },
]

export const ScrollMenu = () => {
  return (
    <Box bgcolor='secondary.main' id='internal-scroll-menu'>
      <Container sx={{ py: { xs: 3, lg: 2 }, color: 'white' }}>
        <Grid container spacing={3}>
          {scrollLinks.map((link, index) => (
            <Grid item key={index} xs={12} lg={3}>
              <Box onClick={() => {scrollToTarget(link.targetId)}} sx={{ width: 'fit-content', mx: 'auto' }}>
                <Typography letterSpacing={1} fontWeight={300} textAlign='center' sx={{ ...defaultLinkHoverProps, width: 'fit-content', cursor: 'pointer' }} >{link.label.toUpperCase()}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
