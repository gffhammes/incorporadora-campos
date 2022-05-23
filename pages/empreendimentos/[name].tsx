import React from 'react'
import { useRouter } from 'next/router'
import { Footer } from '../../src/components/commons/Footer'
import { Box } from '@mui/material'

const Enterprise = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <main style={{ height: '100%' }}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>{name}</div>
      </Box>
      <Footer />
    </main>
  )
}

export default Enterprise