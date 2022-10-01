import Image from 'next/future/image'
import React, { useState } from 'react'

import Logo from '../../public/icons/logo.svg'
import { Button } from '../components/Button'
import Head from 'next/head'
import { Envelope, Eye, EyeSlash, Lock, User } from 'phosphor-react'

import styles from '../../styles/pages/register.module.scss'
import { useRouter } from 'next/router'

const Register = () => {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  function navigate() {
    router.push('/home')
  }

  return (
    <>
      <Head>
        <title>Master Currency | Registro</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <Image
              src={Logo}
              alt="Logo da empresa escrito Master Currency, sendo o S representado pelo sinal de real"
              width={200}
              height={100}
            />

            <h1>Fique por dentro do mundo financeiro em poucos cliques</h1>
          </div>

          <div className={styles.formBox}>
            <div className={styles.inputContainer}>
              <User size={20} color={'#00875f'} />
              <input type="text" placeholder="Digite seu nome completo" />
            </div>

            <div className={styles.inputContainer}>
              <Envelope size={20} color={'#00875f'} />
              <input type="email" placeholder="Digite seu e-mail" />
            </div>

            <div className={styles.inputContainer}>
              <Lock size={20} color={'#00875f'} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
              />

              <button type="button" onClick={handleShowPassword}>
                {showPassword ? (
                  <EyeSlash size={25} color={'#00875f'} />
                ) : (
                  <Eye size={25} color={'#00875f'} />
                )}
              </button>
            </div>

            <p>
              Já possui uma conta ? <a href="/login">Logar</a>{' '}
            </p>

            <Button buttonText={'Cadastrar'} onClickFunction={navigate} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Register
