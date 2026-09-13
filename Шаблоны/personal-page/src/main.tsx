import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './styles.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#11120f', paper: '#191a16' },
    primary: { main: '#ff6a3d' },
    secondary: { main: '#d8ff67' },
    text: { primary: '#f2f0e9', secondary: '#aaa99f' },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 18 },
})

const rootElement = document.querySelector('#root')

if (!rootElement) {
  throw new Error('Root element was not found')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
