import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ContainedSecondaryButton } from '../commons/Button'
import { Input } from '../commons/Input'

const sxFormWrapper = {
  position: 'relative',
  width: '100%',
  backgroundColor: 'white',
  transform: 'translateY(-20vh)',
  zIndex: '500',
  boxShadow: 20,
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

  const handleChange = (e) => {
    setContactData(currentData => ({
      ...currentData,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
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
    })
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
                <ContainedSecondaryButton type='submit' sx={{ mx: 'auto' }} >ENVIAR</ContainedSecondaryButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
