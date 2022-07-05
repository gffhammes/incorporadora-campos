import { Alert, Box, Container, Grid, Snackbar, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LoadingButton } from '../../commons/Button'
import { Input } from '../../commons/Input'
import { useRouter } from 'next/router'
import { getEnterpriseBySlug } from '../../../helpers/getEnterpriseBySlug'
import { Formik } from 'formik'
import { sendMail } from '../../../services/sendMail'
import { useScroll } from '../../../hooks/useScroll'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { SwipeableEdgeDrawer } from './MobileContactDrawer'


interface IContactData {
  name: string;
  phone: string;
  email: string;
}


type Props = {
  enterpriseName: string;
}

const ContactForm = ({ enterpriseName }: Props) => {
  const [loading, setLoading] = useState(false)
  
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
      setLoading(false)
    }).catch(() => setLoading(false))
  }

  return (
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
  )
}

export default ContactForm