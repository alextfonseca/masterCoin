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

          <Link href={`/bitcoinQuote`} prefetch={false}>
            <div className={styles.card}>
              <Coin size={100} />
              <footer>
                <strong>Valor de compra e venda do bitcoin</strong>
                <span>by Blochchain.info</span>
              </footer>
            </div>
          </Link>

          <Link href={`/selicQuote`} prefetch={false}>
            <div className={styles.card}>
              <Coin size={100} />
              <footer>
                <strong>Valor da taxa selic</strong>
                <span>by Brapi</span>
              </footer>
            </div>
          </Link>

          <Link href={`/inflationQuote`} prefetch={false}>
            <div className={styles.card}>
              <Coin size={100} />
              <footer>
                <strong>Valor da inflação</strong>
                <span>by Brapi</span>
              </footer>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home
