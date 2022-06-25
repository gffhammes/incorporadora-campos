
import { CircularProgress, styled, SxProps, ButtonProps } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import React, { useMemo } from 'react';

const commonProps = {
  width: '10rem',
  minWidth: 'fit-content',
  borderRadius: '20rem',
  padding: '.5rem 2rem',
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
    backgroundColor: '#1A47BC',
    color: '#fff',  
  },
  whiteSpace: 'nowrap'
}));

export const ContainedPrimaryButton = styled(ButtonBase)(({ theme }) => ({
  ...commonProps,
  backgroundColor: '#0E1E42',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1A47BC',
  },
  whiteSpace: 'nowrap'
}));

export const ContainedSecondaryButton = styled(ButtonBase)(({ theme }) => ({
  ...commonProps,
  backgroundColor: '#1A47BC',
  color: 'white',
  '&:hover': {
    backgroundColor: '#102d75',
  },
  whiteSpace: 'nowrap'
}));

export const OutlinedWhiteButton = styled(ButtonBase)(({ theme }) => ({
  ...commonProps,
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  color: 'white',
  boxSizing: 'content-box',
  '&:hover': {
    backgroundColor: '#1A47BC',
    border: '1px solid transparent',
  },
  whiteSpace: 'nowrap'
}));

interface ILoadingButtonProps {
  children: any;
  color: string;
  type: "button" | "submit" | "reset";
  sx: SxProps;
  loading?: boolean;
}

export const LoadingButton = ({ loading, children, color, ...props }: ILoadingButtonProps) => {

  const isPrimary = color === 'primary'

  const childrenMemo = useMemo(() => {    
    return loading
      ? <CircularProgress color='inherit' sx={{ height: '20px!important', width: '20px!important' }} />
      : children    
  }, [children, loading])

  if (isPrimary) {
    return (
      <ContainedPrimaryButton focusRipple {...props}>
        {childrenMemo}
      </ContainedPrimaryButton>
    )
  } else {
    return (
      <ContainedSecondaryButton focusRipple {...props}>
        {childrenMemo}
      </ContainedSecondaryButton>
    )
  }  
}
