import { Box, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ContainedPrimaryButton } from '../commons/Button'
import { SectionTitle } from '../commons/SectionTitle'

const articles = [
  {
    image: '/images/blog-1.jpg',
    title: 'Coronavírus e condomínio: o que deve ser feito durante a pandemia?',
    href: '/',
  },
  {
    image: '/images/blog-2.jpg',
    title: 'Consultor destaca que momento atual é propício para adquirir',
    href: '/',
  },
  {
    image: '/images/blog-3.jpg',
    title: 'Home office permanente, escritório do futuro e a volta ao trabalho pós-quarentena',
    href: '/',
  },
  {
    image: '/images/blog-4.jpg',
    title: 'Preços médios de venda e locação de imóveis comerciais ficam estáveis em abril',
    href: '/',
  },
]

export const BlogSection = () => {
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <SectionTitle theme='dark'><strong>FIQUE POR DENTRO</strong></SectionTitle>
        <Box sx={{ mt: 10 }}>
          <Grid container spacing={2}>
            {articles.map((article, index) => (              
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Box sx={{ width: '100%', aspectRatio: '1 / 1', backgroundImage: `url(${article.image})`, backgroundSize: 'cover' }} />
                  <Typography fontWeight={500} fontSize={13} >{article.title.toUpperCase()}</Typography>
                  <Box sx={{ mt: 'auto', width: 'fit-content' }}>
                    <Link href={article.href} passHref >
                      <a>
                        <Typography fontWeight={600} fontSize={13} letterSpacing={1} sx={{ textDecoration: 'underline', width: 'fit-content', color: '#1A47BC' }} >LEIA MAIS</Typography>
                      </a>
                    </Link>
                  </Box>
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
