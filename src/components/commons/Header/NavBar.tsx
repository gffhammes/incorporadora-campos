import { Box, Container, IconButton, Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import React, { FC, useMemo, useState } from 'react'
import LogoHorizontal from '../../../../public/vectors/logo-horizontal.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { pages } from '../../../constants/pages';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { useScroll } from '../../../hooks/useScroll';

const sxLogo = {
  height: '100%',
  width: '50vw',
  maxWidth: '15rem',
  minWidth: '7rem',
}

const sxNavLink = {
  width: 'fit-content',  
  transition: '300ms ease all',
  '&:hover': {
    color: '#ffffff'
  }
}


export const NavBar = () => {  
  const { asPath: currentRoute } = useRouter();
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up('sm'));
  const sizeMd = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);

  const scroll = useScroll();
  const isMenuScroll = scroll > 60;

  const handleMenuToggle = () => setOpen(open => !open);

  const pagesMemo = useMemo(() => {
    return (
      pages.map((page, index) => {
        const isActivePage =
          currentRoute.includes(page.route)
            ? page.route !== '/' || currentRoute === '/'
            : page.route === currentRoute
  
        return (
          <Link href={page.route} passHref key={index}>
            <Box
              component='a'
              sx={{
                ...sxNavLink,
                borderBottom: isActivePage ? '1px solid white' : '',
                marginBottom: isActivePage ? '-1px' : 0,
                color: isActivePage ? '#fff' : '#ffffff89',
              }}
              onClick={handleMenuToggle}
            >                    
              <Typography>{page.name.toUpperCase()}</Typography>
            </Box>
          </Link>
        )
      })
    )
  }, [currentRoute])

  return(
    <Box component='nav' sx={{ transition: '.2s ease all', position: isMenuScroll && !sizeMd ? 'fixed' : 'relative', width: '100%', backgroundColor: isMenuScroll && !sizeMd ? 'primary.main' : 'none', boxShadow: isMenuScroll && !sizeMd ? 20 : 0, top: isMenuScroll ? 0 : 'unset' }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: isMenuScroll && !sizeMd ? 2 : 5 }}>
          <Box component={Link} href='/' passHref>
            <a style={sxLogo} >
              <LogoHorizontal width='100%' height='100%' />
            </a>
          </Box>
          {sizeMd
            ? <Stack direction='row' spacing={3}>
                {pagesMemo}
              </Stack>
            : <>
                <IconButton sx={{ fontSize: 30, color: 'white', zIndex: 999 }} onClick={handleMenuToggle}>
                  {open ? <CloseIcon fontSize='inherit' /> : <MenuIcon fontSize='inherit' />}
                </IconButton>
                <Box
                  bgcolor='secondary.main'
                  sx={{
                    transition: '.3s ease all',
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    top: 0,
                    right: 0,
                    transform: open ? 'translateX(0%)' : 'translateX(100%)',
                    p: '15rem 2rem 2rem 2rem'
                  }}
                >
                  <Stack direction='column' spacing={3} sx={{ textAlign: 'center' }}>
                    {pagesMemo}
                  </Stack>
                </Box>
              </>
          }
        </Box>
      </Container>
    </Box>
  )
}