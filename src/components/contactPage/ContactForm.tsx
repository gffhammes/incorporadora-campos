import { Alert, Box, Container, Grid, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ContainedSecondaryButton, LoadingButton } from '../commons/Button'
import { Input } from '../commons/Input'

const boxShadow = '0px 10px 13px -6px rgb(26 71 188 / 20%), 0px 20px 31px 3px rgb(26 71 188 / 14%), 0px 8px 38px 7px rgb(26 71 188/ 12%);'

const sxFormWrapper = {
  position: 'relative',
  width: '100%',
  backgroundColor: 'white',
  transform: 'translateY(-20vh)',
  zIndex: '500',
  boxShadow,
  py: '4rem'
}

export const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  
  const handleSnackbarClose = () => {
    setOpenSnackbar(false)
  }

  const handleChange = (e) => {
    setContactData(currentData => ({
      ...currentData,
      [e.target.id]: e.target.value
    }))
  }


  const handleSubmit = (e) => { 
    e.preventDefault()
    setLoading(true)
    let data = {
      email: contactData.email,
      subject: contactData.subject,
      message: `
        <div>${contactData.message}</div>
        <br/>
        <br/>
        <br/>
        <ul>
          <li>Nome: ${contactData.name}</li>
          <li>Email: ${contactData.email}</li>
          <li>Telefone: ${contactData.phone}</li>
        </ul>
      `,
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
        // router.push('/obrigado')
        setContactData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        })
      }
      setOpenSnackbar(true)
      setLoading(false)
    }).catch(() => setLoading(false))
  }

  return (
    <Box>
      <Container maxWidth='md'>
        <Box sx={sxFormWrapper}>
          <Box component='form' noValidate onSubmit={e => handleSubmit(e)} sx={{ px: 2, mx: 'auto', maxWidth: 'sm' }}>
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={12}>
                <Input id='name' value={contactData.name} handleChange={handleChange} placeholder='Nome Completo' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input id='phone' value={contactData.phone} handleChange={handleChange} placeholder='Telefone' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input id='email' value={contactData.email} handleChange={handleChange} placeholder='E-mail' required={true} color='grey' />
              </Grid>
              <Grid item xs={12}>
                <Input id='subject' value={contactData.subject} handleChange={handleChange} placeholder='Assunto' required={true} color='grey' />
              </Grid>
              <Grid item xs={12}>
                <Input sx={{ height: '10rem' }} multiline id='message' value={contactData.message} handleChange={handleChange} placeholder='Mensagem' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex' }}>
                <LoadingButton loading={loading} type='submit' color='secondary' sx={{ mx: 'auto' }} >ENVIAR</LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert severity="success" variant="filled" onClose={handleSnackbarClose}>Mensagem enviada com sucesso!</Alert>
      </Snackbar>
    </Box>
  )
}
