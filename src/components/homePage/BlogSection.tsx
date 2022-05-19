import { Box, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ContainedPrimaryButton } from '../commons/Button'
import { SectionTitle } from '../commons/SectionTitle'

const articles = [
  {
    image: '',
    title: 'Coronavírus e condomínio: o que deve ser feito durante a pandemia?',
    href: '/',
  },
  {
    image: '',
    title: 'Consultor destaca que momento atual é propício para adquirir',
    href: '/',
  },
  {
    image: '',
    title: 'Home office permanente, escritório do futuro e a volta ao trabalho pós-quarentena',
    href: '/',
  },
  {
    image: '',
    title: 'Preços médios de venda e locação de imóveis comerciais ficam estáveis em abril',
    href: '/',
  },
]

export const BlogSection = () => {
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <SectionTitle><strong>FIQUE POR DENTRO</strong></SectionTitle>
        <Box>
          <Grid container spacing={2}>
            {articles.map((article, index) => (              
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Box>
                  <Box bgcolor='primary.main' sx={{ width: '100%', aspectRatio: '1 / 1' }} />
                  <Typography fontWeight={500}>{article.title.toUpperCase()}</Typography>
                  <Link href={article.href} passHref >
                    <a>
                      <Typography fontWeight={600} letterSpacing={1} sx={{ textDecoration: 'underline', width: 'fit-content' }} >LEIA MAIS</Typography>
                    </a>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', mt: 10 }}>          
          <ContainedPrimaryButton>ACESSE O BLOG</ContainedPrimaryButton>
        </Box>
      </Container>
    </Box>
  )
}
