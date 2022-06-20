import { Box, Container, Grid } from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { LoadingButton } from '../commons/Button'
import { Input } from '../commons/Input'
import { SectionTitle } from '../commons/SectionTitle'

type Props = {}

export const SupplierForm = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  
  const validate = (values) => {
    const errors: {
      name?: string;
      companyName?: string;
      companyAddress?: string;
      phone?: string;
      email?: string;
      product?: string;
    } = {};
  
    if (!values.name) errors.name = 'Obrigatório';
    if (!values.companyName) errors.companyName = 'Obrigatório';
    if (!values.companyAddress) errors.companyAddress = 'Obrigatório';
    if (!values.phone) errors.phone = 'Obrigatório';
    if (!values.email) errors.email = 'Obrigatório';
    if (!values.product) errors.product = 'Obrigatório';
    
    if (!values.email) {
      errors.email = 'Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email inválido';
    }
    
    return errors;
  };

  const handleSubmit = async (values) => { 
    console.log(values)
    // setLoading(true)
    // let data = {
    //   email: values.email,
    //   subject: 'Novo contato para "Falar com corretor"',
    //   message: `
    //     <div>${values.message}</div>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <ul>
    //       <li>Nome: ${values.name}</li>
    //       <li>Email: ${values.email}</li>
    //       <li>Telefone: ${values.phone}</li>
    //       <li>Cidade/Estado: ${values.city}</li>
    //     </ul>
    //   `,
    // }
    // await sendMail(data).then((res) => {
    //   if (res.status === 200) {
    //     setOpenSnackbar(true)
    //   }
    //   setLoading(false)
    // }).catch(() => setLoading(false))
  }

  return (
    <Box bgcolor='#E4E2E7'>
      <Container sx={{ py: 10 }}>
        <SectionTitle>SEJA UM FORNECEDOR</SectionTitle>
        <Formik
        initialValues={{
          name: '',
          companyName: '',
          companyAddress: '',
          phone: '',
          email: '',
          product: '',
        }}
        validate={validate}
        validateOnBlur={false}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
      >
        {(props) => (
          <Box component='form' noValidate onSubmit={props.handleSubmit} sx={{ px: 2, mx: 'auto', maxWidth: 'md' }}>
            <Grid container spacing={2} alignItems='flex-start'>
              <Grid item xs={12} md={6}>
                <Input name='name' placeholder='Nome Completo' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input name='companyName' placeholder='Nome da Empresa' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input name='companyAddress' placeholder='Endereço da Empresa' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} md={3}>
                <Input name='phone' placeholder='Telefone' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} md={3}>
                <Input name='email' placeholder='Email' required={true} color='grey' />
              </Grid>
              <Grid item xs={12}>
                <Input sx={{ height: '10rem' }} multiline={true} name='product' placeholder='Com que produto você trabalha?' required={true} color='grey' />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex' }}>
                <LoadingButton loading={loading} type='submit' color='primary' sx={{ mx: 'auto' }} >ENVIAR</LoadingButton>
              </Grid>
            </Grid>
          </Box>
        )}
      </Formik>
      </Container>
    </Box>
  )
}