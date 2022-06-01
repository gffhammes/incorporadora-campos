import { styled, SxProps, TextField, Theme } from '@mui/material'
import React, { FC } from 'react'

interface InputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  color?: 'grey' | 'white';
  sx?: SxProps;
  multiline?: boolean;
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

const CssTextFieldGrey = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '2rem',
    '& .MuiOutlinedInput-input': {
      color: '#000',
      padding: '1rem 2rem',
    },
    '& fieldset': {
      borderColor: '#CDCDCD',
    },
    '&:hover fieldset': {
      borderColor: '#CDCDCD',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#CDCDCD',
    },
  },
});

export const Input: FC<InputProps> = ({ id, label, placeholder, type, required, value, handleChange, color, sx, multiline }) => {
  const checkColor = color ? color : 'white';
  const textFieldProps = {
    id: id,
    label: label,
    placeholder: placeholder,
    variant: "outlined",
    value: value,
    required: required,
    onChange: handleChange,
    type: type,
    // multiline: multiline,
    sx: { ...sx }
  }

  console.log(multiline)

  return (
    checkColor === 'white'
      ? <CssTextField inputProps={textFieldProps} />
      : <CssTextFieldGrey inputProps={textFieldProps} />
  )
}
