import { Box, Container, Stack, Typography } from '@mui/material'
import { SectionTitle } from '../SectionTitle'
import React from 'react'
import { OutlinedWhiteButton } from '../Button';
import Link from 'next/link';

type Props = {
  text: string;
}

const ThankYou = ({ text }: Props) => {
  return (
    <Box bgcolor='secondary.main' component='main' sx={{ height: '100%', width: '100%', display: 'flex' }}>
      <Container sx={{ mx: 'auto', mt: 'max(35vh, 15rem)' }}>
        <Stack spacing={5} sx={{ width: 'fit-content', m: 'auto' }} alignItems='center'>
          <SectionTitle  theme='light'>OBRIGADO</SectionTitle>
          <Typography textAlign='center' fontSize={20} sx={{ color: 'white' }} dangerouslySetInnerHTML={{ __html: text }} />
          <Link href='/' passHref>
            <a>              
              <OutlinedWhiteButton>VOLTAR PARA A HOME</OutlinedWhiteButton>
            </a>
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}

export default ThankYou