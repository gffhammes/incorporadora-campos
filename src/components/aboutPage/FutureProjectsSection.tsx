import { Box, Container, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { SectionTitle } from '../commons/SectionTitle'

type Props = {}

const futureProjects = [
  {
    image: '/images/BOLSHOI.png',
    name: 'Bolshoi',
  },
  {
    image: '/images/DI-SPAGNA.png',
    name: 'Di Spagna',
  },
  {
    image: '/images/SAN-MARCO-ITAJUBA.png',
    name: 'San Marco',
  },
]

const FutureProjectsSection = (props: Props) => {
  return (
    <Box bgcolor='primary.main'>
      <Container sx={{ py: 10 }}>
        <SectionTitle theme='light'>PROJETOS FUTUROS</SectionTitle>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={5}>
          {futureProjects.map(project => (
            <Box key={project.name} sx={{ position: 'relative', height: '15rem', width: '100%'}}>
              <Image
                src={project.image}
                alt={project.name}
                layout='fill'
                objectFit='contain'
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default FutureProjectsSection