import { Box, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { footerLinks } from '../../constants/footerAssets'
import { pages } from '../../constants/pages'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export const Footer = () => {
  return (
    <Box component='footer'>
      <Box bgcolor='secondary.main'>
        <Stack direction='row'>
          <Stack direction='row'>
            <SendOutlinedIcon />
            <Typography>CADASTRE SEU E-MAIL E FIQUE POR DENTRO DAS NOVIDADES</Typography>
          </Stack>
        </Stack>
      </Box>
      <Box bgcolor='primary.main'>
        <Container>
          <Stack direction='row' spacing={4} justifyContent='space-between'>
            <Stack>
              {pages.map((page, index) => (
                <Link key={index} href={page.route} passHref>
                  <a>
                    <Typography>{page.name.toUpperCase()}</Typography>
                  </a>
                </Link>
              ))}
            </Stack>
            <Stack>
              {footerLinks.map((link, index) => (
                <Link key={index} href={link.href} passHref>
                  <a>
                    <Typography>{link.label.toUpperCase()}</Typography>
                  </a>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
