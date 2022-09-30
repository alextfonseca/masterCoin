import React from 'react'

import type { AppProps } from 'next/app'
import { defaultTheme } from '../../styles/theme/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
