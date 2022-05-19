import { styled, TextField } from '@mui/material'
import React, { FC } from 'react'

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  handleChange(e: any): void;
}

const CssTextField = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '20rem',
    '& .MuiOutlinedInput-input': {
      color: 'white',
      padding: '1rem 2rem',
    },
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

export const Input: FC<InputProps> = ({ label, placeholder, type, value, handleChange }) => {
  const textFieldProps = {
    label: label,
    placeholder: placeholder,
    variant: "outlined",
    value: value,
    onChange: handleChange,
    type: type,
  }

  return (
    <CssTextField inputProps={textFieldProps} />
  )
}
