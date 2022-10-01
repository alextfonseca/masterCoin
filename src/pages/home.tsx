import Link from 'next/link'
import { Coin } from 'phosphor-react'
import React from 'react'

import styles from '../../styles/pages/home.module.scss'
import { Header } from '../components/Header'

const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Link href={`/`} prefetch={false}>
          <div className={styles.card}>
            <Coin size={100} />
            <footer>
              <strong>Serviço 1</strong>
              <span>teste</span>
            </footer>
          </div>
        </Link>

        <Link href={`/`} prefetch={false}>
          <div className={styles.card}>
            <Coin size={100} />
            <footer>
              <strong>Serviço 1</strong>
              <span>teste</span>
            </footer>
          </div>
        </Link>

        <Link href={`/`} prefetch={false}>
          <div className={styles.card}>
            <Coin size={100} />
            <footer>
              <strong>Serviço 1</strong>
              <span>teste</span>
            </footer>
          </div>
        </Link>

        <Link href={`/`} prefetch={false}>
          <div className={styles.card}>
            <Coin size={100} />
            <footer>
              <strong>Serviço 1</strong>
              <span>teste</span>
            </footer>
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Home
