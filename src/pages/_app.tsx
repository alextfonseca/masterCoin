import React from 'react'

import type { AppProps } from 'next/app'

import '../../styles/global.scss'

import { ToastContainer } from 'react-toastify' // Importamos o Toastify

import 'react-toastify/dist/ReactToastify.css' // O estilo do Toastify

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        autoClose={3000}
        theme={'dark'}
        position={'bottom-center'}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
