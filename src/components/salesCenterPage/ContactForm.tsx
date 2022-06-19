import { Alert, Box, Button, Container, formLabelClasses, Snackbar, Stack, SvgIcon, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ContainedWhiteButton, LoadingButton } from '../commons/Button'
import { Input } from '../commons/Input'
import { Formik } from 'formik'
import { sendMail } from '../../services/sendMail'

export const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const validate = (values) => {
    const errors: {
      name?: string;
      phone?: string;
    } = {};
  
    if (!values.name) errors.name = 'Obrigatório';
    if (!values.phone) errors.phone = 'Obrigatório';

    return errors;
  };
  
  const handleSnackbarClose = () => {
    setOpenSnackbar(false)
  }

  const handleSubmit = async (values) => { 
    setLoading(true)
    let data = {
      email: values.email,
      message: `
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Telefone: ${values.phone}</li>
        </ul>
      `,
      subject: 'Novo contato para "Ligamos pra você"'
    }
    await sendMail(data).then((res) => {
      if (res.status === 200) {
        setOpenSnackbar(true)
      }
      setLoading(false)
    }).catch(() => setLoading(false))
  }

  return (
    <Box sx={{ background: 'linear-gradient(#fff 50%, #E4E2E7 50%)' }}>      
      <Container>
        <Box  bgcolor='primary.main'>        
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='center' spacing={6} sx={{ color: '#fff', py: 5, px: 5 }} >
            <Typography fontWeight={500} fontSize={20} letterSpacing={2} sx={{ whiteSpace: { xs: 'normal', md: 'nowrap'} }}>LIGAMOS PRA VOCÊ</Typography>

            <Formik
              initialValues={{ name: '', phone: '' }}
              validate={validate}
              validateOnBlur={false}
              onSubmit={async (values, { resetForm }) => {
                await handleSubmit(values);
                resetForm();
              }}
            >
              {(props) => (                  
                <Stack component='form' noValidate onSubmit={props.handleSubmit} direction={{ xs: 'column', sm: 'row' }} alignItems='stretch' spacing={2} sx={{ width: '100%' }}>
                  <Input name='name' placeholder='Nome completo'  />
                  <Input name='phone'  placeholder='Telefone'  />
                  <LoadingButton type='submit' loading={loading} sx={{ height: '100%', width: { xs: '100%', md: '12rem' } }} color='secondary'>CADASTRAR</LoadingButton>
                </Stack>
              )}
            </Formik>
          </Stack>
        </Box>
      </Container>
    </Box>        
  )

  //  <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
  //         <Alert severity="success" variant="filled" onClose={handleSnackbarClose}>Email cadastrado com sucesso!</Alert>
  //       </Snackbar> 
}