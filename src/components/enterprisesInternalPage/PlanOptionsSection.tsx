import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'
import { PlanSlider } from './PlanSlider'

export const PlanOptionsSection = ({ enterpriseData }) => {
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <Box
          display="grid"
          gridTemplateAreas={`
            'a c'
            'b c'
          `}
          gridTemplateColumns='max-content auto'
          rowGap={5}
          columnGap={10}
          alignItems='center'
        >
          <Box gridArea='a' alignSelf='flex-end' >
            <SectionTitle textAlign='left' marginBottom={false}>OPÇÕES DE PLANTA</SectionTitle>
          </Box>
          <Box gridArea='b' alignSelf='flex-start' >
            <Typography>
              Torre única | 8 andares | 17 aptos. | 3 por andar<br/>
              7 Aptos. tipo 1 com 126m2 privativos | 3 suítes<br/>
              10 Aptos. tipo 2 e 3 com 108m2 privativos | 2 suítes e 1 dormitório<br/>
              1 cobertura plana com 168m2<br/>
              1 cobertura plana com 173m2<br/>
              Sacada com churrasqueira a carvão<br/>
              Duas vagas de garagem<br/>
              Opção para a terceira vaga de garagem<br/>
              Ambientes integrados nos apartamentos<br/>
              Infraestrutura para sistema de segurança<br/>
              Infraestrutura para refrigeração em todos os cômodos<br/>
              Porcelanato na cozinha, sala e áreas molhadas
            </Typography>
          </Box>
          <Box gridArea='c' >
            <Box bgcolor='white' sx={{ height: '100%', width: '100%', boxShadow: 20, p: 4 }}>
              <PlanSlider />
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}
