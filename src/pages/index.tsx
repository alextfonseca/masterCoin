import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { defaultTheme } from '../../styles/theme/default'
import Login from './Login'

const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Home
