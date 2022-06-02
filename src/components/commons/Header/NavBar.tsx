import { Box, Container, IconButton, Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import LogoHorizontal from '../../../../public/vectors/logo-horizontal.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { pages } from '../../../constants/pages';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

const sxLogo = {
  height: '100%',
  width: '50vw',
  maxWidth: '15rem',
  minWidth: '7rem',
}

const sxNavLink = {
  color: 'white',
  transition: '300ms ease all',
  '&:hover': {
    color: 'secondary.main'
  }
}


export const NavBar = () => {  
  const { asPath: currentRoute } = useRouter();
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up('sm'));
  const sizeMd = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => setOpen(open => !open);

  return(
    <Box component='nav' sx={{ position: sizeMd ? 'relative' : 'fixed', width: '100%' }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 5 }}>
          <Box component={Link} href='/' passHref>
            <a style={sxLogo} >
              <LogoHorizontal width='100%' height='100%' />
            </a>
          </Box>
          {sizeMd
            ? <Stack direction='row' spacing={3}>
                {pages.map((page, index) => {
                  const isActivePage =
                    currentRoute.includes(page.route)
                      ? page.route !== '/' || currentRoute === '/'
                      : page.route === currentRoute

                  return (
                    <Link href={page.route} passHref key={index}>
                      <Box component='a' sx={{ ...sxNavLink, borderBottom: isActivePage ? '1px solid white' : '', marginBottom: isActivePage ? '-1px' : 0 }}>                    
                        <Typography>{page.name.toUpperCase()}</Typography>
                      </Box>
                    </Link>
                  )
                })}
              </Stack>
            : <>
                <IconButton sx={{ fontSize: 30, color: 'white', zIndex: 999 }} onClick={handleMenuToggle}>
                  {open ? <CloseIcon fontSize='inherit' /> : <MenuIcon fontSize='inherit' />}
                </IconButton>
                <Box bgcolor='secondary.main' sx={{ transition: '.3s ease all', position: 'fixed', width: '100vw', height: '100vh', top: 0, right: 0, transform: open ? 'translateX(0%)' : 'translateX(100%)' }} >
                </Box>
              </>
          }
        </Box>
      </Container>
    </Box>
  )
}