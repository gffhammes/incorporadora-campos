import React, { useMemo, useState } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

const boxShadow = '0px 10px 13px -6px rgb(26 71 188 / 20%), 0px 20px 31px 3px rgb(26 71 188 / 14%), 0px 8px 38px 7px rgb(26 71 188/ 12%);'

export const Slide = ({ image, selectedSlide, index, handleClickOpen }) => {
  const [loading, setLoading] = useState(true)

  const isSelected = useMemo(() => selectedSlide === index, [index, selectedSlide])

  const handleLoaded = () => {
    setLoading(false);
  }

  return (
    <Box
      className="embla__slide_full"
      sx={{
        boxShadow: isSelected ? boxShadow : 0,
        transitionProperty: 'filter, box-shadow',
        transitionDuration: '1s',
        transitionTimingFunction: 'ease',
        width: '100%',
        aspectRatio: '2 / 1',
        filter: isSelected ? 'opacity(1)' : 'opacity(.25)',
        cursor: isSelected ? 'pointer' : 'unset',
      }}
      onClick={isSelected ? handleClickOpen : null}
    >
      {loading && <Box bgcolor='#e2e2e2' sx={{ width: '100%', height: '100%', display: 'flex',alignItems: 'center', justifyContent: 'center' }}>loading...</Box>}
      <Image
        src={image.attributes.url}
        alt='image'
        layout='fill'
        objectFit='cover'
        onLoadingComplete={handleLoaded}
      />
    </Box>
  )
}