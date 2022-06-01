import { Box, Container, IconButton, Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'
import LogoHorizontal from '../../../../public/vectors/logo-horizontal.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { pages } from '../../../constants/pages';
import MenuIcon from '@mui/icons-material/Menu';

const sxLogo = {
  height: '100%',
  width: '50vw',
  maxWidth: '15rem',
  minWidth: '7rem',
}

const sxNavLink = {
  transition: '500ms ease all',
  color: 'white',
  '&:hover': {
    color: 'secondary.main'
  }
}


export const NavBar = () => {
  const theme = useTheme();
  const sizeSm = useMediaQuery(theme.breakpoints.up('sm'));
  const sizeMd = useMediaQuery(theme.breakpoints.up('md'));


  return(
    <Box component='nav'>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 5 }}>
          <Box component={Link} href='/' passHref>
            <a style={sxLogo} >
              <LogoHorizontal width='100%' height='100%' />
            </a>
          </Box>
          {sizeMd
            ? <Stack direction='row' spacing={3}>
                {pages.map((page, index) => (
                  <Link href={page.route} passHref key={index}>
                    <Box component='a' sx={sxNavLink}>                    
                      <Typography>{page.name.toUpperCase()}</Typography>
                    </Box>
                  </Link>
                ))}
              </Stack>
            : <IconButton sx={{ fontSize: 30, color: 'white' }}>
                <MenuIcon fontSize='inherit' />
              </IconButton>
          }
        </Box>
      </Container>
    </Box>
  )
}