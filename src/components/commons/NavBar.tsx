import { Box, Container, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface NavBarProps {

}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <>
      <Box bgcolor='primary.main' sx={{ color: 'white' }}>
        <Container>
          <Stack direction='row' justifyContent='space-between'>
            <Stack direction='row'>              
              <Typography>SIGA NAS REDES SOCIAIS</Typography>
              <Box>
                <LinkedInIcon />
                <InstagramIcon />
                <FacebookIcon />
              </Box>
            </Stack>
            <Stack direction='row'> 
              <WhatsAppIcon />             
              <Typography>47 9 99138-2244</Typography>
            </Stack>
          </Stack>
        </Container>  
      </Box>    
      <nav>
        <Typography>navbar</Typography>
      </nav>
    </>
  )
}
