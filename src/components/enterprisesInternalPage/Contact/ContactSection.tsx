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
import ContactForm from './ContactForm'

interface IContactData {
  name: string;
  phone: string;
  email: string;
}

export const ContactSection = ({ enterpriseData }) => {
  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const scroll = useScroll();
  const { width } = useWindowSize();
  
  const hideContact = scroll + window.innerHeight + 400 > document.getElementById('__next').scrollHeight
  const fixContact = width > 1200;
  let { asPath } = useRouter();
  asPath = asPath.split('/').pop()
  const { name: enterpriseName } = getEnterpriseBySlug(asPath)
  
  const handleSnackbarClose = () => {
    setOpenSnackbar(false)
  }
  

  return (
    <>    
      {!fixContact && <SwipeableEdgeDrawer enterpriseName={enterpriseName} />}
      {fixContact && <Box bgcolor='secondary.main' sx={{ position: 'fixed', transform: hideContact && fixContact ? 'translateY(100%)' : 'translateY(0)',  bottom: 0, zIndex: 500, width: '100%', transition: '.3s ease all' }}>
        <Container sx={{ py: 3 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, lg: 15 }} alignItems='center'>          
            <Stack spacing={2} sx={{ color: 'white' }}>
              <Typography fontSize={22} fontWeight={500} letterSpacing={1} sx={{ whiteSpace: { xs: 'normal', lg: 'nowrap'} }}>TEM INTERESSE NO EMPREENDIMENTO?</Typography>
              <Typography fontSize={18} sx={{ whiteSpace: { xs: 'normal', lg: 'nowrap'} }}>Preencha seus dados e entraremos em contato com você!</Typography>
            </Stack>
            <ContactForm enterpriseName={enterpriseName} />
          </Stack>
        </Container>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert severity="success" variant="filled" onClose={handleSnackbarClose}>Mensagem enviada com sucesso!</Alert>
        </Snackbar>
      </Box>}
    </>
  )
}