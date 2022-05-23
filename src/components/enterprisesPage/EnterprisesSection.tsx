import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { enterprises } from '../../assets/enterprises'
import { getEnterpriseDetailsString } from '../../helpers/getEnterpriseDetailsString'

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
                      {getEnterpriseDetailsString(enterprise.slug)}
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
