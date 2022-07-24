import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'
import Filters from './Filters'

interface IProps {
  enterprises: any;
  handleFilter({city, district, buildingStatus}: {city: string, district: string, buildingStatus: string}): void;
}

export const HeroSection = ({ enterprises, handleFilter }: IProps) => {
  return (
    <Box sx={{ height: '80%', minHeight: '600px', display: 'flex', position: 'relative' }} >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(#0E1E42, #1A50BC 35%, rgba(1, 74, 220, .87) 80%)',
          zIndex: 200
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/empreendimentos-banner.png)',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: 100
        }}
      />
      <Box sx={{ height: '100%', width: '100%', my: 'auto', display: 'flex', pt: '10rem', position: 'absolute', zIndex: 300 }}>
        <Container sx={{ my: 'auto' }}>
          <Stack spacing={{ xs: 3, lg: 8}}>            
            <Box>
              <SectionTitle theme='light'>NOSSOS EMPREENDIMENTOS</SectionTitle>  
            </Box>
            <Box>              
              <Filters enterprises={enterprises} handleFilter={handleFilter} />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
