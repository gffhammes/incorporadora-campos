import { styled, TextField } from '@mui/material'
import React, { FC } from 'react'

interface InputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
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

export const Input: FC<InputProps> = ({ id, label, placeholder, type, required, value, handleChange }) => {
  const textFieldProps = {
    id: id,
    label: label,
    placeholder: placeholder,
    variant: "outlined",
    value: value,
    required: required,
    onChange: handleChange,
    type: type,
  }

  return (
    <CssTextField inputProps={textFieldProps} />
  )
}
