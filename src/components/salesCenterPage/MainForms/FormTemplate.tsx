import { Box, Stack, Typography } from '@mui/material'
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
    <Box bgcolor={bgcolor} sx={{ flex: 1 }}>      
      <Stack  alignItems='center' spacing={5} sx={{ px: 2, py: 4, maxWidth: '450px', mx: 'auto' }}>
        <FormTitle>{title}</FormTitle>
        {children}
      </Stack>
    </Box>
  )
}

export default FormTemplate