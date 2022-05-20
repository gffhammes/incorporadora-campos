import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const enterprises = [
  {
    image: '/images/piazza-san-carlo-empreendimentos.jpg',
    name: 'Piazza San Carlo',
    district: 'América',
    city: 'Joinville',
    buildingsQty: 1,
    floorsQty: 8,
    apartmentsTotal: 17,
    apartmentsPerFloor: 3,
    status: 'Entregue',
    description: `
      Sacada com churrasqueira a carvão
      Duas vagas de garagem
      Ambientes integrados nos apartamentos
      Infraestrutura para sistema de segurança
      Infraestrutura para refrigeração em todos os cômodos
    `,
  },
  {
    image: '/images/piazza-del-mare-empreendimentos.jpg',
    name: 'Piazza Del Mare',
    district: 'Itacolumi',
    city: 'Balneário Piçarras',
    buildingsQty: 1,
    floorsQty: 8,
    apartmentsTotal: 17,
    apartmentsPerFloor: 3,
    status: 'Lançamento',
    description: `
      Viva a experiência do mais alto nível de qualidade de vida.
      O seu sonho de morar próximo ao mar é possível.
      E o PIAZZA DEL MARE foi feito para realizá-lo.
    `,
  },
  {
    image: '/images/piazza-san-pietro-empreendimentos.jpg',
    name: 'Piazza San Pietro',
    district: 'América',
    city: 'Joinville',
    buildingsQty: 1,
    floorsQty: 8,
    apartmentsTotal: 17,
    apartmentsPerFloor: 3,
    status: 'Em obras',
    description: `
      Sacada com churrasqueira a carvão
      Duas vagas de garagem
      Ambientes integrados nos apartamentos
      Infraestrutura para sistema de segurança
      Infraestrutura para refrigeração em todos os cômodos
    `,
  },
]

export const EnterprisesSection = () => {
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={8}>
          {enterprises.map((enterprise, index) => (
            <Grid item key={index} xs={12}>
              <Box sx={{ height: 'fit-content', width: '100%', boxShadow: 10 }}>
                <Stack direction='row'>                  
                  <Box sx={{ position: 'relative', height: '20rem', aspectRatio: '1.25 / 1' }}>
                    <Image
                      src={enterprise.image}
                      alt={enterprise.name}
                      layout='fill'
                      objectFit='cover'
                    />
                  </Box>
                  <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                    <Typography fontSize={19} letterSpacing={2} sx={{ color: '#1a47bc', textDecoration: 'underline' }}>{enterprise.name.toUpperCase()}</Typography>
                    <Typography fontSize={16} letterSpacing={1}>{enterprise.district} | {enterprise.city}</Typography>
                    <Typography fontSize={14} fontWeight={500}>
                      {enterprise.buildingsQty} torre | {enterprise.floorsQty} andares | {enterprise.apartmentsTotal} aptos. | {enterprise.apartmentsPerFloor} por andar
                    </Typography>
                    <Typography fontSize={14} fontWeight={500} sx={{ mt: '1rem' }} >{enterprise.description}</Typography>
                    <Typography fontSize={15} fontWeight={700}  sx={{ color: '#1a47bc', mt: 'auto' }} >SAIBA MAIS</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
