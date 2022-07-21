import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

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
      <Container sx={{ py: 7 }}>
        <Box sx={sxGrid} >
          <Box sx={{ gridArea: 'a' }}>
            <Box sx={{ position: 'relative', height: { xs: 'unset', md: '100%' }, width: '100%', aspectRatio: '1 / 1' }}>
              <Image
                src={enterpriseData.Thumb.data.attributes.url}
                alt={enterpriseData.Nome}
                layout='fill'
                objectFit='cover'
                objectPosition='left'
              />
            </Box>
          </Box>
          <Box sx={{ gridArea: 'b', alignSelf: 'flex-end' }}>      
              <Typography fontSize={25} fontWeight={500} letterSpacing={1} sx={{ color: '#1a47bc' }}>{enterpriseData.TituloPagina.toUpperCase()}</Typography>
          </Box>
          <Box sx={{ gridArea: 'c' }}>      
            <Typography sx={{ whiteSpace: 'pre-wrap' }}>{enterpriseData.TextoPagina}</Typography>
            <Typography fontSize={20} fontWeight={600} letterSpacing={1} sx={{ color: '#1a47bc', mt: 4 }}>{enterpriseData.TextoResumo}</Typography>
            <Typography fontSize={20} fontWeight={600} letterSpacing={1} sx={{ color: '#1a47bc' }}>Plantas com opções de {enterpriseData.Quartos}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
