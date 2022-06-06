import { Alert, Box, Button, Container, formLabelClasses, Snackbar, Stack, SvgIcon, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ContainedWhiteButton, LoadingButton } from '../Button'
import { Input } from '../Input'
import { useRouter } from 'next/router'

export const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const router = useRouter();
  
  const handleSnackbarClose = () => {
    setOpenSnackbar(false)
  }

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  
  const handleSubmit = (e) => { 
    e.preventDefault()
    setLoading(true)
    let data = {
      email,
      message: `Um novo contato se inscreveu para a news letter: ${email}`,
      subject: 'Novo Contato News Letter'
    }
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        setEmail('')
      }
      setOpenSnackbar(true)
      setLoading(false)
    }).catch(() => setLoading(false))
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
          <Stack component='form' noValidate onSubmit={handleSubmit} direction={{ xs: 'column', sm: 'row' }} alignItems='stretch' spacing={2} sx={{ width: '100%' }}>
            <Input value={email} handleChange={handleEmailChange} type='email' placeholder='Seu e-mail...'  />
            <Box>
              <LoadingButton type='submit' loading={loading} sx={{ height: '100%', width: { xs: '100%', md: '12rem' } }} color='primary'>CADASTRAR</LoadingButton>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert severity="success" variant="filled" onClose={handleSnackbarClose}>Email cadastrado com sucesso!</Alert>
      </Snackbar>
    </Box>
  )
}