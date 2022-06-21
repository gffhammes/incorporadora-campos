import { Box, Container, Divider, Stack, SxProps, Theme, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { Slider } from '../../commons/Slider'

type Props = {}

const slides = [
  {
    year: '2010',
    text: 'Nasce a Campos, inspirada na conexão entre amigos motivados pelo desejo de crescer, buscar algo novo e empreender.',
    image: 'socios'
  },
  {
    year: '2014',
    text: 'Nosso primeiro empreendimento sai do papel e se torna realidade. O Piazza San Marco, em Joinville.',
    image: '/images/.'
  },
  {
    year: '2016 e 2018',
    text: 'Logo em seguida, o Piazza San Carlo e o Piazza Della Libertá, ganham vida e conquistam os moradores do Bairro Costa e Silva em Joinville.',
    image: '/images/.'
  },
  {
    year: '2020',
    text: 'O Piazza San Pietro, no coração do bairro América, vem para apresentar um novo padrão de conforto e requinte em Joinville.',
    image: 'SAN_PIETRO'
  },
  {
    year: '2022',
    text: 'O eterno camisa 10,o craque Zico, marca mais um gol de placa e assina o nosso Residencial Del Mare, em Balneário Piçarras.',
    image: 'zico'
  },
  {
    year: '2022',
    text: 'Em uma parceria inédita no mundo, assinamos com a escola Bolshoi e iniciamos o planejamento do Edifício Bolshoi Brasil.',
    image: 'BOLSHOI'
  },
]

const sxSlide: SxProps<Theme> = {
  height: '20rem',
  backgroundColor: 'white',
  width: '100%',
  boxShadow: '15px 31px 82px rgba(18, 50, 131, .12)'
}

const OurHistorySlider = (props: Props) => {
  const [selectedSlide, setSelectedSlide] = useState(0)

  const handleYearClick = (e: any) => {
    setSelectedSlide(parseInt(e.target.id))
  }

  const slidesElements = slides.map((slide, index) => {
    return (
      <Box key={index} sx={{ position: 'relative' }} >        
        <Container sx={sxSlide}>
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
              <Typography fontSize={25} textAlign='center' letterSpacing={2}>{slide.year}</Typography>
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
        </Container>
        {index !== slides.length - 1 &&        
          <Box
            sx={{
              position: 'absolute',
              borderBottom: '3px dashed #0E1E42',
              width: '75%',
              top: '50%',
              left: '50%',
            }}
          />
        }
      </Box>
    )
  })
  

  return (
    <Box>
      <Stack component='ul' direction='row' justifyContent='center' spacing={2} divider={<Divider orientation="vertical" flexItem />}  sx={{ listStyle: 'none' }}>
        {slides.map(({ year }, index) => (
          <Box key={index} component='li' onClick={handleYearClick} id={index.toString()} sx={{ cursor: 'pointer' }}>{year}</Box>
        ))}
      </Stack>
      <Box>
        <Slider slides={slidesElements} selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide} />
      </Box>
    </Box>
  )
}

export default OurHistorySlider