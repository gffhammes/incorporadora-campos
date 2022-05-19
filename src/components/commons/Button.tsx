
import { styled } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';

const commonProps = {
  width: 'fit-content',
  height: 'fit-content',
  borderRadius: '20rem',
  padding: '.75rem 2rem',
  fontWeight: 600,
  fontSize: 15,
  fontFamily: 'Satoshi, sans-serif',
  transition: '300ms ease',
  marginLeft: 'auto',
  marginRight: 'auto',
  letterSpacing: 1,
}

export const ContainedWhiteButton = styled(ButtonBase)(({ theme }) => ({
  ...commonProps,
  backgroundColor: '#fff',  
  color: '#1A47BC',  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  }
}));

export const ContainedPrimaryButton = styled(ButtonBase)(({ theme }) => ({
  ...commonProps,
  backgroundColor: '#0E1E42',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(14, 30, 66, 0.8)',
  }
}));