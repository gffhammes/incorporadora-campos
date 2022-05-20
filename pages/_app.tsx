import { NavBar } from '../src/components/commons/NavBar'
import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { Footer } from '../src/components/commons/Footer';
import { WhatsAppFloatButton } from '../src/components/commons/WhatsAppFloatButton';
import { PageTitle } from '../src/components/commons/PageTitle';

const { palette } = createTheme();

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
  return (    
    <ThemeProvider theme={theme}>
      <PageTitle />
      <NavBar />
      <Component {...pageProps} />
      <WhatsAppFloatButton />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
