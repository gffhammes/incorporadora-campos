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
        aspectRatio: '1 / 1',
        width: '100%',
        maxWidth: '17rem',
        borderRadius: '20rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ position: 'absolute' }}>
        <Typography sx={{ color: 'white' }} fontSize={60} fontWeight={700}>{(status * 100).toFixed(0)}%</Typography>
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
          <Typography sx={{ color: 'white' }} fontSize={13} fontWeight={500} >{title}</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '5ch' }}>
        <Typography textAlign='right' fontSize={17} fontWeight={700} >{value * 100}%</Typography>
      </Box>
    </Stack>
  )
}

export function StatusCharts({ data }) {
  const generalStatus = () => {
    const total = data.infrastructure + data.masonry + data.installations + data.coating;

    return total / 4;
  }

  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={4}>        
        <Stack spacing={10} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Typography fontSize={28} fontWeight={500} letterSpacing={2} sx={{ color: '#0E1E42', whiteSpace: 'nowrap' }}>STATUS DA OBRA</Typography>      
          <GeneralStatus status={generalStatus()} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <Stack spacing={2} justifyContent='space-between' sx={{ height: '100%' }}>          
          <StatusBar title='INFRAESTRUTURA - FUNDAÇÃO' value={data.infrastructure} />
          <StatusBar title='ALVENARIAS' value={data.masonry} />
          <StatusBar title='INSTALAÇÕES' value={data.installations} />
          <StatusBar title='REVESTIMENTOS' value={data.coating} />
        </Stack>
      </Grid>
    </Grid>
  )
}