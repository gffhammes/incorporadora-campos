import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

interface SectionTitleProps {
  theme?: 'light' | 'dark';
  children: any;
}

const titleStyle = {
  width: 'fit-content',
  mx: 'auto'
}

export const SectionTitle: FC<SectionTitleProps> = ({ theme, children }) => {
  const textColor = theme === 'light' ? '#fff' : '#0E1E42';
  const borderColor = theme === 'light' ? '#fff' : '#c6c6c6';

  return (
    <>      
      <Typography
        variant='h2'
        fontSize={{ xs: 20, sm: 28}}
        fontWeight={400}
        letterSpacing={6}
        textAlign='center'
        sx={{ ...titleStyle, color: textColor }} 
      >
        {children}
      </Typography>
      <Box bgcolor={borderColor} sx={{ width: '100%', maxWidth: '42ch', height: '1px', mx: 'auto', mt: 4, mb: 10 }} />
    </>    
  )
}
