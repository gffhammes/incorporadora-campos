import { Alert, Box, Container, Grid, Snackbar, Stack, Typography } from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'
import GroundOfferForm from './GroundOfferForm'
import RealStateAgentForm from './RealStateAgentForm'

const boxShadow = '0px 10px 13px -6px rgb(26 71 188 / 20%), 0px 20px 31px 3px rgb(26 71 188 / 14%), 0px 8px 38px 7px rgb(26 71 188/ 12%);'

const sxFormWrapper = {
  position: 'relative',
  width: '100%',
  backgroundColor: 'white',
  transform: 'translateY(-30vh)',
  marginBottom: '-20vh',
  zIndex: '500',
  boxShadow,
}

export const MainForms = () => {
  return (
    <Box>
      <Container>
        <Stack direction='row' sx={sxFormWrapper}>
          <RealStateAgentForm />
          <GroundOfferForm />
          {/* <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
              subject: '',
              message: '',
            }}
            validate={validate}
            onSubmit={async (values, { resetForm }) => {
              await handleSubmit(values);
              resetForm();
            }}
          >
            {(props) => (              
              <Box component='form' noValidate onSubmit={props.handleSubmit} sx={{ px: 2, mx: 'auto', maxWidth: 'sm' }}>
                <Grid container spacing={2} alignItems='center'>
                  <Grid item xs={12}>
                    <Input id='name' name='name'  placeholder='Nome Completo' required={true} color='grey' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input id='phone' name='phone'  placeholder='Telefone' required={true} color='grey' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input id='email' name='email' placeholder='E-mail' required={true} color='grey' />
                  </Grid>
                  <Grid item xs={12}>
                    <Input id='subject' name='subject' placeholder='Assunto' required={true} color='grey' />
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
          </Formik> */}
        </Stack>
      </Container>
      {/* <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert severity="success" variant="filled" onClose={handleSnackbarClose}>Mensagem enviada com sucesso!</Alert>
      </Snackbar> */}
    </Box>
  )
}
