import { Box, Container } from '@mui/material'
import React from 'react'

type Props = {}

const VideoZico = (props: Props) => {
  return (
    <Box>
      <Container sx={{ pb: 5 }}>
        <video
          src='/videos/VT CAMPOS INCORPORADORA ALT3.mp4'
          width='100%'
          autoPlay
          controls
        />
      </Container>
    </Box>
  )
}

export default VideoZico