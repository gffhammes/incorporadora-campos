import { Box, Container } from '@mui/material'
import React from 'react'

type Props = {}

const VideoZico = (props: Props) => {
  return (
    <Box>
      <Container sx={{ pb: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video
          src='/videos/VT CAMPOS INCORPORADORA ALT3.mp4'
          width='60%'
          autoPlay
          controls
          muted
        />
      </Container>
    </Box>
  )
}

export default VideoZico