import { Header } from '../src/components/commons/Header'
import '../styles/globals.css'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { WhatsAppFloatButton } from '../src/components/commons/WhatsAppFloatButton';
import { PageTitle } from '../src/components/commons/PageTitle';
import TagManager from 'react-gtm-module'
import { useEffect } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'Satoshi, sans-serif',
  },
  palette: {
    primary: { main: '#0E1E42' },
    secondary: { main: '#1A47BC' },
  }
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NZV49Z7' });
  }, []);

  return (    
    <ThemeProvider theme={theme}>
      <PageTitle />
      <Header />
      <Component {...pageProps} />
      <WhatsAppFloatButton />
    </ThemeProvider>
  )
}

export default MyApp
