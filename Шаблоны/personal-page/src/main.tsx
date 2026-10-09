import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './styles.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#fffaf1', paper: '#ffffff' },
    primary: { main: '#ef5a8a' },
    secondary: { main: '#7447d8' },
    text: { primary: '#242326', secondary: '#625d65' },
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
