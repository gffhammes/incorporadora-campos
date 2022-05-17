import { NavBar } from '../src/components/commons/NavBar'
import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'

const { palette } = createTheme();

const theme = createTheme({
  typography: {
    fontFamily: 'Satoshi, sans-serif',
  },
  palette: {
    primary: { main: '#0d235e' },
  }
})

function MyApp({ Component, pageProps }) {
  return (    
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
