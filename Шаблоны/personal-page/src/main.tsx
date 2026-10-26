import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './styles.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#fff7f2', paper: '#ffffff' },
    primary: { main: '#c52e3d' },
    secondary: { main: '#f16b4f' },
    text: { primary: '#251316', secondary: '#78666a' },
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
