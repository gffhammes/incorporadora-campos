import { Box, Container, Stack, SxProps, Theme, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

type Props = {
  slide: any;
  index: number;
  lastSlideIndex: number;
}

const sxSlide: SxProps<Theme> = {
  height: '20rem',
  backgroundColor: 'white',
  width: '100%',
  boxShadow: '15px 31px 82px rgba(18, 50, 131, .12)'
}

const OurHistorySlide = ({ slide, index, lastSlideIndex }: Props) => {
  return (
    <Box sx={{ position: 'relative' }} >        
      <Container>
        <Box sx={sxSlide}>            
          <Stack direction='row' spacing={4} alignItems='center' justifyContent='center' sx={{ height: '100%', width: 'fit-content', mx: 'auto', px: 10, py: 5 }}>          
            <Typography fontSize={21} sx={{ maxWidth: '28ch' }}>{slide.text}</Typography>
            <Stack
              alignItems='center'
              justifyContent='center'
              sx={{
                backgroundColor: 'secondary.main',
                width: '8rem!important',
                height: '8rem!important',
                borderRadius: '8rem',
                color: 'white',
                p: 2,
                flex: '8rem',
                position: 'relative',
                zIndex: 200
              }}
            >
              <Typography fontSize={25} textAlign='center' letterSpacing={4}>{slide.year}</Typography>
            </Stack>
              <Box
                sx={{
                  position: 'relative',
                  width: '25rem',
                  height: '16rem',
                  zIndex: 200
                }}
              >
                <Image
                  src={`/images/nossa-historia/${slide.image}.webp`}
                  alt={slide.year}
                  layout='fill'
                  objectFit='contain'
                />
              </Box>
          </Stack>
        </Box>
      </Container>
      {index !== lastSlideIndex &&        
        <Box
          sx={{
            position: 'absolute',
            borderBottom: '3px dotted #0E1E42',
            width: '75%',
            top: '50%',
            left: '50%',
          }}
        />
      }
    </Box>
  )
}

export default OurHistorySlide