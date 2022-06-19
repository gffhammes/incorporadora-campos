import { Alert, Box, Container, Grid, Snackbar, Stack, Typography } from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { sendMail } from '../../../services/sendMail'
import { ContainedSecondaryButton, LoadingButton } from '../../commons/Button'
import { Input } from '../../commons/Input'
import FormTemplate from './FormTemplate'

type Props = {}

const RealStateAgentForm = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  
  const handleSnackbarClose = () => {
    setOpenSnackbar(false)
  }

  const validate = (values) => {
    const errors: {
      name?: string,
      phone?: string,
      email?: string,
      city?: string,
      message?: string,
    } = {};
  
    if (!values.name) errors.name = 'Obrigatório';
    if (!values.city) errors.city = 'Obrigatório';
    if (!values.phone) errors.phone = 'Obrigatório';
    if (!values.message) errors.message = 'Obrigatório';
    
    if (!values.email) {
      errors.email = 'Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email inválido';
    }
    
    return errors;
  };

  const handleSubmit = async (values) => { 
    setLoading(true)
    let data = {
      email: values.email,
      subject: 'Novo contato para "Falar com corretor"',
      message: `
        <div>${values.message}</div>
        <br/>
        <br/>
        <br/>
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Email: ${values.email}</li>
          <li>Telefone: ${values.phone}</li>
          <li>Cidade/Estado: ${values.city}</li>
        </ul>
      `,
    }
    await sendMail(data).then((res) => {
      if (res.status === 200) {
        setOpenSnackbar(true)
      }
      setLoading(false)
    }).catch(() => setLoading(false))
  }

  return (
    <FormTemplate title='FALE COM UM CORRETOR'>
      <Formik
        initialValues={{
          name: '',
          city: '',
          phone: '',
          email: '',
          message: '',
        }}
        validate={validate}
        validateOnBlur={false}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
      >
        {(props) => (
          <Box component='form' noValidate onSubmit={props.handleSubmit} sx={{ px: 2, mx: 'auto', maxWidth: 'sm' }}>
            <Grid container spacing={2} alignItems='flex-start'>
              <Grid item xs={12}>
                <Input name='name' placeholder='Nome Completo' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input name='city' placeholder='Cidade/Estado' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input name='phone' placeholder='Telefone' required={true} color='grey' />
              </Grid>
              <Grid item xs={12}>
                <Input name='email' placeholder='Email' required={true} color='grey' />
              </Grid>
              <Grid item xs={12}>
                <Input sx={{ height: '10rem' }} multiline={true} id='message' name='message' placeholder='Mensagem' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex' }}>
                <LoadingButton loading={loading} type='submit' color='secondary' sx={{ mx: 'auto' }} >ENVIAR</LoadingButton>
              </Grid>
            </Grid>
          </Box>
        )}
      </Formik>
    </FormTemplate>
  )
}

export default RealStateAgentForm