import { Box, Button, Container, Stack, SvgIcon, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { footerLinks } from '../../../constants/footerAssets'
import { pages } from '../../../constants/pages'
import { FollowUs } from '../FollowUs'
import LogoHorizontal from '../../../../public/vectors/logo-horizontal.svg'
import { defaultLinkHoverProps } from '../../../constants/defaultLinkHover'
import { Subscribe } from './Subscribe/Subscribe'
import { Copyright } from './Copyright'

const defaultSpacing = 1.5;

export const Footer = () => {
  return (
    <Box component='footer'>
      <Subscribe />
      <Box bgcolor='primary.main' sx={{ color: '#fff', py: 7 }}>
        <Container>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent='space-between'>
            <Box sx={{ width: '25vw', minWidth: '15rem', maxWidth: '20rem', height: '100%' }} >
              <LogoHorizontal width='100%' height='100%' />
            </Box>
            <Stack spacing={defaultSpacing} >
              {pages.map((page, index) => (
                <Link key={index} href={page.route} passHref>
                  <Box component='a' sx={defaultLinkHoverProps} >
                    <Typography fontSize={12} letterSpacing={.5}>{page.name.toUpperCase()}</Typography>
                  </Box>
                </Link>
              ))}
            </Stack>
            {/* <Stack spacing={defaultSpacing} >
              {footerLinks.map((link, index) => (
                <Link key={index} href={link.href} passHref>
                  <Box component='a' sx={defaultLinkHoverProps} >
                    <Typography fontSize={12} letterSpacing={.5}>{link.label.toUpperCase()}</Typography>
                  </Box>
                </Link>
              ))}
            </Stack> */}
            <Stack spacing={1} >
              <Typography fontSize={14} fontWeight='bold'>47 9 9138-2244</Typography>
              <Typography fontSize={14}>vendas@camposincorporadora.com.br</Typography>
              <Typography fontSize={14}>Rua Pará, 276 - América<br/>Joinville/SC - 89204-420</Typography>
              <FollowUs />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Copyright />
    </Box>
  )
}
