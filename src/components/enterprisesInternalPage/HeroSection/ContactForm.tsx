import { Box, Container, Grid, Paper, Stack, SxProps, Theme, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { PrimaryGradientCover } from '../../commons/PrimaryGradientCover';
import { SectionTitle } from '../../commons/SectionTitle';
import { FloatingDownArrowScroll } from '../../commons/FloatingDownArrowScroll';
import { Input } from '../../commons/Input';
import { LoadingButton } from '../../commons/Button';
import { Formik } from 'formik';

const sxLogo: SxProps<Theme> = {
  position: 'relative',
  height: '10rem',
  width: '16vw',
  minWidth: '10rem',
  maxWidth: '13rem',
}

type Props = {
  logo: string;
  name: string;
}

const ContactForm = ({ logo, name }: Props) => {
  return (
    <Box bgcolor='primary.main' sx={{ p: 10, borderRadius: 2, width: '55%', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
      <Stack direction='row' alignItems='center' spacing={10}>
        <Box sx={sxLogo} >                           
          <Image
            src={logo}
            alt={name}
            layout='fill'
            objectFit='contain'
          />
        </Box>
        
        <Box sx={{ maxWidth: '20rem' }}>        
          <Typography variant='h6' fontSize={20} textAlign='center' sx={{ color: 'white', mb: 2 }}>TEM INTERESSE NO EMPREENDIMENTO?</Typography>
          <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
            }}
            // validate={validate}
            onSubmit={async (values, { resetForm }) => {
              // await handleSubmit(values);
              resetForm();
            }}
          >
            {(props) => (              
              <form noValidate onSubmit={props.handleSubmit}>              
                <Grid container spacing={2} alignItems='stretch'>
                  <Grid item xs={12}>
                    <Input id='name' name='name' placeholder='Nome Completo' required={true} />
                  </Grid>
                  <Grid item xs={12} >
                    <Input id='phone' name='phone' placeholder='Telefone' required={true} />
                  </Grid>
                  <Grid item xs={12} >
                    <Input id='email' name='email' placeholder='E-mail' required={true} />
                  </Grid>
                  <Grid item xs={12} >
                    <Box sx={{ height: '100%' }}>                    
                      <LoadingButton loading={/*loading */false} sx={{ width: '100%', height: '100%' }} type='submit' color='secondary' >ENVIAR</LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Box>
  )
}

export default ContactForm