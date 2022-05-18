import { Box, Button, Container, Stack, SvgIcon, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { footerLinks } from '../../constants/footerAssets'
import { pages } from '../../constants/pages'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { FollowUs } from './FollowUs'
import LogoHorizontal from '../../../public/vectors/logo-horizontal.svg'

const defaultSpacing = 1;

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <Box bgcolor='secondary.main'>
      <Container sx={{ color: '#fff' }}>        
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack direction='row'>
            <svg xmlns="http://www.w3.org/2000/svg" width="33.621" height="33.621" viewBox="0 0 33.621 33.621">
              <g id="Group_371" data-name="Group 371" transform="translate(-144.5 -4085.879)">
                <g id="Icon_feather-send" data-name="Icon feather-send" transform="translate(143 4085)">
                  <path id="Path_1355" data-name="Path 1355" d="M33,3,16.5,19.5" fill="none" stroke="#e4e2e7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                  <path id="Path_1356" data-name="Path 1356" d="M33,3,22.5,33l-6-13.5L3,13.5Z" fill="none" stroke="#e4e2e7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                </g>
              </g>
            </svg>

            <Typography>CADASTRE SEU E-MAIL E FIQUE POR DENTRO DAS NOVIDADES</Typography>
          </Stack>
          <Stack direction='row'>
            <TextField value={email} onChange={handleEmailChange} type='email' placeholder='Seu e-mail...'  />
            <Button variant='contained'>Cadastrar</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export const Footer = () => {

  return (
    <Box component='footer'>
      <Subscribe />
      <Box bgcolor='primary.main' sx={{ color: '#fff', py: 10 }}>
        <Container>
          <Stack direction='row' spacing={4} justifyContent='space-between'>
            <Box>
              <LogoHorizontal />
            </Box>
            <Stack spacing={defaultSpacing} >
              {pages.map((page, index) => (
                <Link key={index} href={page.route} passHref>
                  <a>
                    <Typography>{page.name.toUpperCase()}</Typography>
                  </a>
                </Link>
              ))}
            </Stack>
            <Stack spacing={defaultSpacing} >
              {footerLinks.map((link, index) => (
                <Link key={index} href={link.href} passHref>
                  <a>
                    <Typography>{link.label.toUpperCase()}</Typography>
                  </a>
                </Link>
              ))}
            </Stack>
            <Stack spacing={defaultSpacing} >
              <Typography fontWeight='bold'>47 9 99138-2244</Typography>
              <Typography>vendas@camposincorporadora.com.br</Typography>
              <Typography>Rua Pará, 276 - América<br/>Joinville/SC - 89204-420</Typography>
              <FollowUs />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
