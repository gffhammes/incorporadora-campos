import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import ThankYou from '../../src/components/commons/ThankYou/ThankYou'

type Props = {}

export default function Confirm({}: Props) {
  return (
    <ThankYou text="Em breve entraremos em contato com você!" />
  )
}