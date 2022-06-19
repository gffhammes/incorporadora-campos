import { Checkbox, FormControlLabel } from '@mui/material'
import { useField } from 'formik';
import React from 'react'

interface ICheckBoxProps {
  label: string;
  name: string;
}

const CheckBox = ({ label, name }: ICheckBoxProps) => {
  const [field, meta, helpers] = useField({ name })

  return (
    <FormControlLabel  {...field} control={<Checkbox checked={!!field.value} />} label={label}/>
  )
}

export default CheckBox