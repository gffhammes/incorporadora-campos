
import { styled } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';

const commonProps = {
  width: 'fit-content',
  borderRadius: '20rem',
  padding: '.75rem 3rem',
  fontWeight: 700,
  fontSize: 15,
  fontFamily: 'Satoshi, sans-serif',
  transition: '300ms ease',
  marginLeft: 'auto',
  marginRight: 'auto',
}

export const ContainedWhiteButton = styled(ButtonBase)(({ theme }) => ({
  ...commonProps,
  backgroundColor: '#fff',  
  color: '#1A47BC',  
  '&:hover': {
    backgroundColor: '#ffffffd1',
  }
}));

export const ContainedPrimaryButton = styled(ButtonBase)(({ theme }) => ({
  ...commonProps,
  backgroundColor: '#0E1E42',
  color: 'white',
  '&:hover': {
    backgroundColor: '#0E1E42',
  }
}));