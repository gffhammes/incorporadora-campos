import { Alert, Box, Container, Grid, Snackbar, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LoadingButton } from '../commons/Button'
import { Input } from '../commons/Input'
import { useRouter } from 'next/router'
import { getEnterpriseBySlug } from '../../helpers/getEnterpriseBySlug'
import { Formik } from 'formik'
import { sendMail } from '../../services/sendMail'
import { useScroll } from '../../hooks/useScroll'

interface IContactData {
  name: string;
  phone: string;
  email: string;
}

export const ContactSection = ({ enterpriseData }) => {
  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const scroll = useScroll();
  
  const showContact = scroll > 60;
  
  const handleSnackbarClose = () => {
    setOpenSnackbar(false)
  }

  let { asPath } = useRouter();
  asPath = asPath.split('/').pop()
  const { name: enterpriseName } = getEnterpriseBySlug(asPath)
  
  const validate = (values: IContactData) => {
    const errors: { name?: string, phone?: string, email?: string } = {};
  
    if (!values.name) errors.name = 'Obrigatório';

    if (!values.phone) errors.phone = 'Obrigatório';
    
    if (!values.email) {
      errors.email = 'Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email inválido';
    }
    
    return errors;
  };
  
  const handleSubmit = async (values: IContactData) => { 
    setLoading(true)
    let data = {
      email: values.email,
      subject: `Contato para o empreendimento ${enterpriseName}`,
      message: `
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Email: ${values.email}</li>
          <li>Telefone: ${values.phone}</li>
        </ul>
      `,
    }
    await sendMail(data).then((res) => {
      if (res.status === 200) setOpenSnackbar(true)
      setLoading(false)
    }).catch(() => setLoading(false))
  }

  return (
    <Box bgcolor='secondary.main' sx={{ position: 'fixed', transform: showContact ? 'translateY(0)' : 'translateY(100%)', bottom: 0, zIndex: 999, width: '100%', transition: '.3s ease all' }}>
      <Container sx={{ py: 3 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, lg: 15 }} alignItems='center'>          
          <Stack spacing={2} sx={{ color: 'white' }}>
            <Typography fontSize={22} fontWeight={500} letterSpacing={1} sx={{ whiteSpace: { xs: 'normal', lg: 'nowrap'} }}>TEM INTERESSE NO EMPREENDIMENTO?</Typography>
            <Typography fontSize={18} sx={{ whiteSpace: { xs: 'normal', lg: 'nowrap'} }}>Preencha seus dados e entraremos em contato com você!</Typography>
          </Stack>
          <div>
          <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
            }}
            validate={validate}
            onSubmit={async (values, { resetForm }) => {
              await handleSubmit(values);
              resetForm();
            }}
          >
            {(props) => (              
              <form noValidate onSubmit={props.handleSubmit}>              
                <Grid container spacing={2} alignItems='stretch'>
                  <Grid item xs={12}>
                    <Input id='name' name='name' placeholder='Nome Completo' required={true} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Input id='phone' name='phone' placeholder='Telefone' required={true} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <Input id='email' name='email' placeholder='E-mail' required={true} />
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Box sx={{ height: '100%' }}>                    
                      <LoadingButton loading={loading} sx={{ width: '100%', height: '100%' }} type='submit' color='primary' >ENVIAR</LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
          </div>
        </Stack>
      </Container>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert severity="success" variant="filled" onClose={handleSnackbarClose}>Mensagem enviada com sucesso!</Alert>
      </Snackbar>
    </Box>
  )
}