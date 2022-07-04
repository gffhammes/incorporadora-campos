import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'
import { PlanSlider } from './planSlider/PlanSlider'

const sxPlanSlider = {
  height: '100vw',
  minHeight: '20rem',
  maxHeight: '37rem',
  width: '100%',
}

const boxShadow = '0px 10px 13px -6px rgb(26 71 188 / 20%), 0px 20px 31px 3px rgb(26 71 188 / 14%), 0px 8px 38px 7px rgb(26 71 188 / 12%)'


export const PlanOptionsSection = ({ enterpriseData }) => {
  return (
    <Box id='plan-options'>
      <Container sx={{ py: 7 }}>
        <Box
          display="grid"
          gridTemplateAreas={{
            xs: `
              'a'
              'c'
              'b'
            `,
            md: `
              'a c'
              'b c'
            `
          }}
          gridTemplateColumns={{ xs: '100%', md: 'auto auto', lg: 'max-content auto' }}
          rowGap={5}
          columnGap={10}
          alignItems='center'
          justifyContent='space-between'
        >
          <Box gridArea='a' alignSelf='flex-end' justifySelf={{ xs: 'center', md: 'flex-start' }} >
            <SectionTitle textAlign='left' marginBottom={false}>OPÇÕES DE PLANTA</SectionTitle>
          </Box>
          <Box gridArea='b' alignSelf='flex-start' justifySelf={{ xs: 'center', md: 'flex-start' }}  >
            <Box
              component='p'
              dangerouslySetInnerHTML={{ __html: enterpriseData.planText }}
              sx={{ lineHeight: 1.75 }}
            />
          </Box>
          <Box gridArea='c' justifySelf='center' sx={sxPlanSlider} >
            <Box bgcolor='white' sx={{ height: '100%', width: '100%', boxShadow, p: 4 }}>
              <PlanSlider plans={enterpriseData.plans} />
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}
