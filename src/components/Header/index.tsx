import Image from 'next/future/image'
import React from 'react'
import styles from './styles.module.scss'

import Logo from '../../../public/icons/logo.svg'
import { SignOut } from 'phosphor-react'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={Logo}
        alt="Logo da empresa escrito Master Currency, sendo o S representado pelo sinal de real"
        width={200}
        height={100}
      />

      <a href="/">
        <SignOut size={40} color={'#00b37e'} />
      </a>
    </header>
  )
}
