import Head from 'next/head'
import Link from 'next/link'
import { Coin } from 'phosphor-react'
import React from 'react'

import styles from '../../styles/pages/home.module.scss'
import { Header } from '../components/Header'

const Home = () => {
  return (
    <>
      <Head>
        <title>Master Currency | Home</title>
      </Head>
      <main className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Link href={`/currencyQuote`} prefetch={false}>
            <div className={styles.card}>
              <Coin size={100} />
              <footer>
                <strong>Cotações de Moedas</strong>
                <span>by AwesomeAPI</span>
              </footer>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home
