import { Stack, Typography } from '@mui/material'
import React from 'react'

interface IFormTitleProps {
  children: string;
}

interface IFormTemplateProps {
  children: any;
  title: string;
  bgcolor?: 'white' | 'grey';
}

const FormTitle = ({ children }: IFormTitleProps) => {
  return (
    <Typography sx={{ color: 'secondary.main' }} fontSize={20} fontWeight={600} letterSpacing={2}>{children}</Typography>  
  )
}

const FormTemplate = ({ children, title, ...props }: IFormTemplateProps) => {
  const bgcolor = props.bgcolor === 'grey' ? '#E4E2E7' : '#fff'
  return (
    <Stack bgcolor={bgcolor} alignItems='center' spacing={5} sx={{ py: 4, px: 6 }}>      
      <FormTitle>{title}</FormTitle>
      {children}
    </Stack>
  )
}

export default FormTemplate