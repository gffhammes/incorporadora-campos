import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

interface SectionTitleProps {
  children: any;
  theme?: 'light' | 'dark';
  textAlign?: 'left' | 'center' | 'right';
  marginBottom?: boolean;
  divider?: boolean;
}


export const SectionTitle: FC<SectionTitleProps> = ({ theme, textAlign, marginBottom, children, divider = true }) => {
  const textColor = theme === 'light' ? '#fff' : '#0E1E42';
  const borderColor = theme === 'light' ? '#fff' : '#c6c6c6';

  return (
    <>      
      <Typography
        variant='h2'
        fontSize={{ xs: 20, sm: 28}}
        fontWeight={500}
        letterSpacing={6}
        textAlign={textAlign ? textAlign : 'center'}
        sx={{
          color: textColor,
          width: 'fit-content',
          mx: textAlign ? '' : 'auto',
        }} 
      >
        {children}
      </Typography>
      {divider && <Box
        bgcolor={borderColor}
        sx={{
          width: '100%',
          maxWidth: { xs: '20ch', md: '42ch' },
          height: '1px',
          mx: 'auto',
          mt: 4,
          mb: marginBottom !== undefined ? (!marginBottom ? 0 : 10) : 10
        }}
      />}
    </>    
  )
}
