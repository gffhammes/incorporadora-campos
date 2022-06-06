import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ContainedSecondaryButton } from '../commons/Button'
import { Input } from '../commons/Input'
import { useRouter } from 'next/router'
import { getEnterpriseBySlug } from '../../helpers/getEnterpriseBySlug'

export const ContactSection = ({ enterpriseData }) => {
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  let { asPath } = useRouter();
  asPath = asPath.split('/').pop()
  const { name: enterpriseName } = getEnterpriseBySlug(asPath)

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
      subject: `Contato para o empreendimento ${enterpriseName}`,
      message: `
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
        })
      }
    })
  }

  return (
    <Box bgcolor='#0E1E42'>
      <Container sx={{ py: 5 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, lg: 15 }} alignItems='center'>          
          <Stack spacing={4} sx={{ color: 'white' }}>
            <Typography fontSize={22} fontWeight={500} letterSpacing={1} sx={{ whiteSpace: { xs: 'normal', lg: 'nowrap'} }}>TEM INTERESSE NO EMPREENDIMENTO?</Typography>
            <Typography fontSize={18} sx={{ whiteSpace: { xs: 'normal', lg: 'nowrap'} }}>Preencha seus dados e entraremos em contato com você!</Typography>
          </Stack>
          <div>
            <form noValidate onSubmit={ handleSubmit}>              
              <Grid container spacing={2} alignItems='stretch'>
                <Grid item xs={12}>
                  <Input id='name' value={contactData.name} handleChange={handleChange} placeholder='Nome Completo' required={true} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Input id='phone' value={contactData.phone} handleChange={handleChange} placeholder='Telefone' required={true} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Input id='email' value={contactData.email} handleChange={handleChange} placeholder='E-mail' required={true} />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Box sx={{ height: '100%' }}>                    
                    <ContainedSecondaryButton sx={{ width: '100%', height: '100%' }} type='submit' >ENVIAR</ContainedSecondaryButton>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </div>
        </Stack>
      </Container>
    </Box>
  )
}