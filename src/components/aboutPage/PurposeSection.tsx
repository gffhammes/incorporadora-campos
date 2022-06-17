import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'

type Props = {}

const icons = [
  {
    image: '/images/missao.png',
    title: 'MISSÃO',
    text: 'Promover e realizar a construção de edificações com qualidade e durabilidade a fim de superar as expectativas de acionistas, clientes e sociedade.',
  },
  {
    image: '/images/visao.png',
    title: 'VISÃO',
    text: 'Ser reconhecida pela clareza de seus negócios, robustez e qualidade de seus empreendimentos e pela geração de qualidade de vida de seus clientes.',
  },
  {
    image: '/images/valores.png',
    title: 'VALORES',
    text: 'Nononono nonono nonononono nonono nononono nono nononono nonononon non ononono nono no no nonononon non ononono  nono no nononono',
  },
]

const PurposeSection = (props: Props) => {
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        <SectionTitle marginBottom={false}>PROPÓSITO</SectionTitle>
        <Stack sx={{ mt: 5, mb: 8 }}>          
          <Typography textAlign='center' sx={{ maxWidth: '55ch', mx: 'auto' }} fontWeight={500} >
            Estar na vanguarda com os empreendimentos imobiliários, criar conexões com seus sócios, clientes e comunidade nos impulsiona, nos move.
          </Typography>
        </Stack>
        <Grid container alignItems='center' justifyContent='center' spacing={10}>
          {icons.map(({image, title, text}) => (
            <Grid item key={title} xs={12} md={6} lg={4} >
              <Stack spacing={3}>                
                <Box sx={{ position: 'relative', width: '10rem', height: '10rem', mx: 'auto', mb: 2 }}>
                  <Image
                    src={image}
                    alt={title}
                    layout='fill'
                  />
                </Box>
                <Typography textAlign='center' fontSize={23} letterSpacing={3} fontWeight={500} lineHeight={1}>{title}</Typography>
                <Typography textAlign='center' fontSize={15} fontWeight={500} sx={{ maxWidth: '40ch', mx: 'auto!important' }}>{text}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default PurposeSection