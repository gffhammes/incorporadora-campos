import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const enterprises = [
  {
    image: '/images/piazza-san-carlo-empreendimentos.jpg',
    name: 'Piazza San Carlo',
    slug: 'piazza-san-carlo',
    district: 'América',
    city: 'Joinville',
    buildingsQty: 1,
    floorsQty: 8,
    apartmentsTotal: 17,
    apartmentsPerFloor: 3,
    status: 'Entregue',
    description: `Sacada com churrasqueira a carvão
Duas vagas de garagem
Ambientes integrados nos apartamentos
Infraestrutura para sistema de segurança
Infraestrutura para refrigeração em todos os cômodos
    `,
  },
  {
    image: '/images/piazza-del-mare-empreendimentos.jpg',
    name: 'Piazza Del Mare',
    slug: 'piazza-del-mare',
    district: 'Itacolumi',
    city: 'Balneário Piçarras',
    buildingsQty: 1,
    floorsQty: 8,
    apartmentsTotal: 17,
    apartmentsPerFloor: 3,
    status: 'Lançamento',
    description: `Viva a experiência do mais alto nível de qualidade de vida.
O seu sonho de morar próximo ao mar é possível.
E o PIAZZA DEL MARE foi feito para realizá-lo.
    `,
  },
  {
    image: '/images/piazza-san-pietro-empreendimentos.jpg',
    name: 'Piazza San Pietro',
    slug: 'piazza-san-pietro',
    district: 'América',
    city: 'Joinville',
    buildingsQty: 1,
    floorsQty: 8,
    apartmentsTotal: 17,
    apartmentsPerFloor: 3,
    status: 'Em obras',
    description: `Sacada com churrasqueira a carvão
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
        <Grid container spacing={10}>
          {enterprises.map((enterprise, index) => (
            <Grid item key={index} xs={12}>
              <Box sx={{ height: 'fit-content', width: '100%', boxShadow: 20 }}>
                <Stack direction='row' sx={{ height: '100%' }}>                  
                  <Box sx={{ position: 'relative', height: '100%', width: '22rem' }}>
                    <Image
                      src={enterprise.image}
                      alt={enterprise.name}
                      objectFit='cover'
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                  </Box>
                  <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                    <Typography fontSize={19} fontWeight={500} letterSpacing={2} sx={{ color: '#1a47bc', textDecoration: 'underline' }}>{enterprise.name.toUpperCase()}</Typography>
                    <Typography fontSize={16} fontWeight={500}>{enterprise.district} | {enterprise.city}</Typography>
                    <Typography fontSize={14}>
                      {enterprise.buildingsQty} torre | {enterprise.floorsQty} andares | {enterprise.apartmentsTotal} aptos. | {enterprise.apartmentsPerFloor} por andar
                    </Typography>
                    <Typography fontSize={14} fontWeight={400} sx={{ mt: '1rem', whiteSpace: 'pre-wrap' }} >{enterprise.description}</Typography>
                    <Link href={`/empreendimentos/${enterprise.slug}`} passHref>
                      <a style={{ marginTop: 'auto' }}>
                        <Typography fontSize={15} fontWeight={700}  sx={{ color: '#1a47bc' }} >SAIBA MAIS</Typography>
                      </a>
                    </Link>
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
