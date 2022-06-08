import { styled, SxProps, TextField, Theme } from '@mui/material'
import { useField } from 'formik';
import React, { FC, useMemo } from 'react'

interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  color?: 'grey' | 'white';
  sx?: SxProps;
  multiline?: boolean;
}

const CssTextField = styled(TextField)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '20rem',
    '& .MuiOutlinedInput-input': {
      color: 'white',
      padding: '.75rem 1.5rem',
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
      padding: '.75rem 1.5rem',
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

export const Input: FC<InputProps> = ({ id, label, placeholder, type, required, color, sx, name, multiline = false }) => {  
  const [field, meta, helpers] = useField({ name });

  const checkColor = color ? color : 'white';
  const textFieldProps = {
    id: id,
    label: label,
    placeholder: placeholder,
    variant: "outlined",
    required: required,
    type: type,
    sx: { ...sx }
  }

  const helperTextMemo = useMemo(() => {
    return meta.error && meta.touched ? meta.error : null;
  }, [meta.error, meta.touched])

  return (
    checkColor === 'white'
      ? <>
          <CssTextField inputProps={textFieldProps} multiline={multiline} {...field} helperText={helperTextMemo} error={!!helperTextMemo}  />
        </>
      : <CssTextFieldGrey inputProps={textFieldProps} multiline={multiline} rows={6} {...field} helperText={helperTextMemo} error={!!helperTextMemo}  />
  )
}
