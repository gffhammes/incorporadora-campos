import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ContainedSecondaryButton } from '../commons/Button'
import { Input } from '../commons/Input'

export const ContactSection = ({ enterpriseData }) => {
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  const handleChange = (e) => {
    setContactData(currentData => ({
      ...currentData,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <Box bgcolor='#0E1E42'>
      <Container sx={{ py: 10 }}>
        <Stack direction='row'>          
          <Box sx={{ color: 'white' }}>
            <Typography>TEM INTERESSE NO EMPREENDIMENTO?</Typography>
            <Typography>Preencha seus dados e entraremos em contato com você!</Typography>
          </Box>
          <div>          
            <Grid container spacing={2} alignItems='center'>
              <Grid item xs={12}>
                <Input id='name' value={contactData.name} handleChange={handleChange} placeholder='Nome Completo' required={true} />
              </Grid>
              <Grid item xs={4}>
                <Input id='phone' value={contactData.phone} handleChange={handleChange} placeholder='Telefone' required={true} />
              </Grid>
              <Grid item xs={4}>
                <Input id='email' value={contactData.email} handleChange={handleChange} placeholder='E-mail' required={true} />
              </Grid>
              <Grid item xs={4}>
                <ContainedSecondaryButton sx={{ width: '100%', height: '100%' }}>ENVIAR</ContainedSecondaryButton>
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  )
}