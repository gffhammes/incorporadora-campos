import { Box, Button, Container, Stack, SvgIcon, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { footerLinks } from '../../../constants/footerAssets'
import { pages } from '../../../constants/pages'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { FollowUs } from '../FollowUs'
import LogoHorizontal from '../../../../public/vectors/logo-horizontal.svg'
import { ContainedPrimaryButton, ContainedWhiteButton } from '../Button'
import { Input } from '../Input'
import { defaultLinkHoverProps } from '../../../constants/defaultLinkHover'

export const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  return (
    <Box bgcolor='secondary.main'>
      <Container sx={{ color: '#fff', py: 3 }}>        
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='center' spacing={6} >
          <Stack direction='row' alignItems='center' spacing={2}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33.621" height="33.621" viewBox="0 0 33.621 33.621">
              <g id="Group_371" data-name="Group 371" transform="translate(-144.5 -4085.879)">
                <g id="Icon_feather-send" data-name="Icon feather-send" transform="translate(143 4085)">
                  <path id="Path_1355" data-name="Path 1355" d="M33,3,16.5,19.5" fill="none" stroke="#e4e2e7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                  <path id="Path_1356" data-name="Path 1356" d="M33,3,22.5,33l-6-13.5L3,13.5Z" fill="none" stroke="#e4e2e7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                </g>
              </g>
            </svg>

            <Typography fontWeight={500} sx={{ whiteSpace: { xs: 'normal', md: 'nowrap'} }}>CADASTRE SEU E-MAIL E FIQUE POR DENTRO DAS NOVIDADES</Typography>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems='stretch' spacing={2} sx={{ width: '100%' }}>
            <Input value={email} handleChange={handleEmailChange} type='email' placeholder='Seu e-mail...'  />
            <Box>
              <ContainedWhiteButton sx={{ height: '100%' }}>CADASTRAR</ContainedWhiteButton>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}