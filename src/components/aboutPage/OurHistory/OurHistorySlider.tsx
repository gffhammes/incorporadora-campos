import { Box, Container, Divider, Stack, SxProps, Theme, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Slider } from '../../commons/Slider'
import OurHistorySlide from './OurHistorySlide';
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = {}

const slides = [
  {
    year: '2010',
    text: 'Nasce a Campos, inspirada na conexão entre amigos motivados pelo desejo de crescer, buscar algo novo e empreender.',
    image: 'socios.webp'
  },
  {
    year: '2014',
    text: 'Nosso primeiro empreendimento sai do papel e se torna realidade. O Piazza San Marco, em Joinville.',
    image: 'SAN_MARCO.png'
  },
  {
    year: '2016',
    text: 'Logo em seguida, o Piazza San Carlo ganha vida e conquista os moradores do Bairro Costa e Silva em Joinville.',
    image: 'SAN_CARLO.png'
  },
  {
    year: '2018',
    text: 'Em 2018, o Piazza Della Libertá nasce para conquistar os moradores do Bairro Costa e Silva.',
    image: 'LIBERTA.png'
  },
  {
    year: '2020',
    text: 'O Piazza San Pietro, no coração do bairro América, vem para apresentar um novo padrão de conforto e requinte em Joinville.',
    image: 'SAN_PIETRO.webp'
  },
  {
    year: '2022',
    text: 'O eterno camisa 10, o craque Zico, marca mais um gol de placa e assina o nosso Residencial Del Mare, em Balneário Piçarras.',
    image: 'zico.webp'
  },
  {
    year: '2022',
    text: 'Em uma parceria inédita no mundo, assinamos com a escola Bolshoi e iniciamos o planejamento do Edifício Bolshoi Brasil.',
    image: 'BOLSHOI.webp'
  },
]

const OurHistorySlider = (props: Props) => {
  const [selectedSlide, setSelectedSlide] = useState(0)
  const theme = useTheme();
  const smSize = useMediaQuery(theme.breakpoints.up('sm'));

  const handleYearClick = (e: any) => {
    setSelectedSlide(parseInt(e.target.id))
  }

  const handleNextSlide = () => {
    setSelectedSlide(selectedSlide => selectedSlide === slides.length - 1 ? 0 : selectedSlide + 1)
  }

  const slidesElements = useMemo(() => (
    slides.map((slide, index) => {
      return (
        <OurHistorySlide key={index} slide={slide} index={index} lastSlideIndex={slides.length - 1} />
      )
    })
  ), [])

  return (
    <Box>
      {smSize && <Stack
        component='ul'
        direction='row'
        justifyContent='center'
        spacing={2}
        divider={
          <Divider
            orientation="vertical"
            variant='middle'
            flexItem
            sx={{ borderColor: 'primary.main' }}
          />
        } 
        sx={{ listStyle: 'none', mb: 8 }}
      >
        {slides.map(({ year }, index) => (
          <Box key={index} component='li' onClick={handleYearClick} id={index.toString()} sx={{ transition: '300ms all ease', cursor: 'pointer', fontWeight: 600, color: selectedSlide === index ? 'secondary.main' : 'primary.main' }}>{year}</Box>
        ))}
      </Stack>}
      <Box>
        <Slider slides={slidesElements} selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide} />
      </Box>
      <Stack alignItems='center' onClick={handleNextSlide} sx={{ color: 'primary.main', width: 'fit-content', mx: 'auto',cursor: 'pointer', mt: 8 }}>
          <ArrowForwardIcon  color='inherit' />
          <Typography fontSize={16} letterSpacing={2} fontWeight={600}>ARRASTE</Typography>
      </Stack>
    </Box>
  )
}

export default OurHistorySlider