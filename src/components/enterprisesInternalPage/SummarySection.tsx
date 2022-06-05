import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { getEnterpriseDetailsString } from '../../helpers/getEnterpriseDetailsString'

const sxGrid = {
  display: 'grid',
  gridTemplateAreas: {
    xs: `
      'b'
      'a'
      'c'
    `,
    md: `
      'a b'
      'a c'
    `
  },
  gridTemplateColumns: {
    xs: '1fr',
    md: '1fr 1fr',
  },
  gridTemplateRows: 'auto',
  columnGap: '5rem',
  rowGap: '2rem',
}

export const SummarySection = ({ enterpriseData }) => {
  return (
    <Box id='the-enterprise'>
      <Container sx={{ py: 10 }}>
        <Box sx={sxGrid} >
          <Box sx={{ gridArea: 'a' }}>
            <Box sx={{ position: 'relative', height: { xs: 'unset', md: '100%' }, width: '100%', aspectRatio: '1 / 1' }}>
              <Image
                src={enterpriseData.image}
                alt={enterpriseData.name}
                layout='fill'
                objectFit='cover'
                objectPosition='left'
              />
            </Box>
          </Box>
          <Box sx={{ gridArea: 'b', alignSelf: 'flex-end' }}>      
              <Typography fontSize={25} fontWeight={500} letterSpacing={1} sx={{ color: '#1a47bc' }}>{enterpriseData.pageTitle.toUpperCase()}</Typography>
          </Box>
          <Box sx={{ gridArea: 'c' }}>      
            <Typography sx={{ whiteSpace: 'pre-wrap' }}>{enterpriseData.pageText}</Typography>
            <Typography fontSize={20} fontWeight={600} letterSpacing={1} sx={{ color: '#1a47bc', mt: 4 }}>{getEnterpriseDetailsString(enterpriseData.slug)}</Typography>
            <Typography fontSize={20} fontWeight={600} letterSpacing={1} sx={{ color: '#1a47bc' }}>Plantas com opções de {enterpriseData.bedrooms}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
