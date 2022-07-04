import { FormControl, InputLabel, MenuItem, Select as MuiSelect, styled } from '@mui/material'
import { ChangeEvent } from 'react';

const StyledSelect = styled(MuiSelect)({
  borderRadius: '20rem',
  color: 'white',
  '& .MuiOutlinedInput-input': {
    color: 'white',
    padding: '.75rem 1.5rem',
  },
  '& fieldset': {
    borderColor: 'white',
  },
  '&:hover fieldset': {
    borderColor: 'white!important',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white!important',
    '& legend': {
      color: 'white'
    }
  },
  '& .MuiSvgIcon-root': {
    color: 'white'
  }
});

interface IProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  width?: string | number ;
}

export const Select = ({ label, name, options, value, handleChange, width }: IProps) => {

  return (
    <FormControl sx={{width: width || '100%'}}>      
      <InputLabel
        sx={{
          color: 'white',
          '&.Mui-focused': { color: 'white!important' },
          '&.MuiInputLabel-root': {
            lineHeight: 1,
          },
        }}
      >{label}</InputLabel>
      <StyledSelect value={value} onChange={handleChange} label={label} MenuProps={{ disableScrollLock: true }} sx={{ width: width || '100%' }}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>{option}</MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  )
}