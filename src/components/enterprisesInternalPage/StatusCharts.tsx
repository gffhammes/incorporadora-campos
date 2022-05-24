import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Grid, Stack, Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const GeneralStatus = ({ status }) => {  
  const data = {
    labels: ['ready', 'waiting'],
    datasets: [
      {
        data: [status, (1 - status)],
        backgroundColor: [
          '#1A47BC',
          'transparent',
        ],
        borderWidth: 0,
      },
    ],  
  };
  
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    events: [],
    cutout: '90%',
  }

  return (
    <Box
      bgcolor='primary.main'
      sx={{
        height: '20rem',
        width: '20rem',
        borderRadius: '20rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ position: 'absolute' }}>
        <Typography sx={{ color: 'white' }}>{status * 100}%</Typography>
      </Box>
      <Doughnut data={data} options={options} />
    </Box>
  )
}

const StatusBar = ({ title, value }) => {
  return (    
    <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={4}>
      <Box bgcolor='white' sx={{ width: '100%', height: '3.5rem', position: 'relative' }}>
        <Box bgcolor='secondary.main' sx={{ position: 'absolute', width: value, height: '100%', }} />
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', px: 4 }}>
          <Typography sx={{ color: 'white'}} >{title}</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '5ch' }}>
        <Typography textAlign='right'>{value * 100}%</Typography>
      </Box>
    </Stack>
  )
}

export function StatusCharts() {
  const status = .88;

  return (
    <Grid container>
      <Grid item xs={6}>        
        <Stack>
          <Typography>STATUS DA OBRA</Typography>      
          <GeneralStatus status={status} />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={2} justifyContent='space-between' sx={{ height: '100%' }}>          
          <StatusBar title='INFRAESTRUTURA - FUNDAÇÃO' value={.88} />
          <StatusBar title='ALVENARIAS' value={1} />
          <StatusBar title='INSTALAÇÕES' value={.75} />
          <StatusBar title='REVESTIMENTOS' value={.93} />
        </Stack>
      </Grid>
    </Grid>
  )
}
