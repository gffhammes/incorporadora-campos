
import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { getEnterpriseDetailsString } from '../../helpers/getEnterpriseDetailsString'

const enterpriseNameProps = {
  fontSize: 19,
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: 2,
  sx: {
    width: 'fit-content',
    color: '#1a47bc',
    borderBottom: '2px solid #1A47BC',
  },
}

const sxImage = {
  position: 'relative',
  height: { xs: 'unset', sm: 'unset', md: '22rem'},
  aspectRatio: { xs: '1 / 1', md: 'unset'},
  width: '100%',
  overflow: 'hidden',
  maxWidth: { xs: 'unset', md: '22rem' }
}

const sxStatus = {
  position: 'absolute',
  right: {
    xs: '50%',
    sm: 0,
  },
  top: { 
    xs: 0,
    sm: '50%',
    // md: '100%',
    lg: '50%'
  },
  transform: {
    xs: 'translate(50%, -50%)',
    sm: 'translate(0%, -50%)',
    md: 'translate(0%, -50%)',
    // md: 'translate(-25%, -125%)',
    lg: 'translate(15%, -50%)',
  },
  width: '12rem',
  py: 3,
  px: 2,
  color: 'white',
  textAlign: 'center'
}

const sxInfos = {
  p: {
    xs: '5rem 2rem 2rem 2rem',
    sm: 6,
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  width: '100%',
  position: 'relative',
}

export const EnterpriseCard = ({ enterprise }) => {
  return (
    <Link href={`/empreendimentos/${enterprise.slug}`} passHref>
      <a>
        <Box sx={{ height: 'fit-content', width: '100%', boxShadow: 20 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ height: '100%' }}>                  
            <Box sx={sxImage}>
              <Image
                src={enterprise.image}
                alt={enterprise.name}
                objectFit='cover'
                width="100%"
                height="100%"
                layout="fill"
                objectPosition='left bottom'
              />
            </Box>
            <Box sx={sxInfos}>
              <Typography {...enterpriseNameProps}>{enterprise.name.toUpperCase()}</Typography>
              <Typography fontSize={16} fontWeight={500}>{enterprise.district} | {enterprise.city}</Typography>
              <Typography fontSize={14}>
                {getEnterpriseDetailsString(enterprise.slug)}
              </Typography>
              <Typography fontSize={14} fontWeight={400} sx={{ mt: '1rem', whiteSpace: 'pre-wrap' }} >{enterprise.description}</Typography>
              <Typography fontSize={15} fontWeight={700}  sx={{ mt: { xs: '1rem', md: 'auto' }, width: 'fit-content', color: '#1a47bc', borderBottom: '1px solid #1A47BC', }} >SAIBA MAIS</Typography>
              <Box bgcolor='primary.main' sx={sxStatus}>
                <Typography fontSize={13} letterSpacing={3}>{enterprise.status.toUpperCase()}</Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </a>
    </Link>
  )
}
