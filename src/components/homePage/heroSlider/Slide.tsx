import { Box, Container, Stack, SxProps, Theme, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { OutlinedWhiteButton } from '../../commons/Button';
import { PrimaryGradientCover } from '../../commons/PrimaryGradientCover'

interface IProps {
  bgImage: string;
  logo: string;
  enterpriseName: string;
  text: string;
  buttonText: string;
  href: string;
}

const sxImage: SxProps<Theme> = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  backgroundSize: 'cover',
}

const sxContent: SxProps<Theme> = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 500,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
}

const sxLogo: SxProps<Theme> = {
  position: 'relative',
  height: '100%',
  width: '16vw',
  minWidth: '10rem',
  maxWidth: '13rem',
}

export const Slide = ({
  bgImage,
  logo,
  enterpriseName,
  text,
  href,
  buttonText,
  ...props
}: IProps) => {
  return (
    <Box sx={{ position: 'relative', zIndex: 500, height: '100%' }}>
      <Box
        sx={{
          ...sxImage,
          backgroundImage: `url("${bgImage}")`,
        }}
      />
      <PrimaryGradientCover />
      <Box sx={sxContent}>
        <Container sx={{ display: 'flex', height: '100%', pb: 10, pt: 20 }}>  
          <Stack sx={{ mx: 'auto' }} alignItems='center' justifyContent='flex-end' >
            <Box sx={sxLogo} >
              <Image
                src={logo}
                alt={enterpriseName}
                layout='fill'
                objectFit='contain'
              />
            </Box>
            <Typography fontSize={21} letterSpacing={4} textAlign='center' sx={{ color: 'white', mt: 'auto', mb: 2 }} >{text}</Typography>
            <Link href={href} passHref >
              <a>
                <OutlinedWhiteButton sx={{ width: 'fit-content' }}>{buttonText}</OutlinedWhiteButton>
              </a>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}