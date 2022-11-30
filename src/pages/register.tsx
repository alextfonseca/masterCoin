import Image from 'next/future/image'
import React, { useState } from 'react'

import Logo from '../../public/icons/logo.svg'
import { Button } from '../components/Button'
import Head from 'next/head'
import { Envelope, User } from 'phosphor-react'

import styles from '../../styles/pages/register.module.scss'
import { useRouter } from 'next/router'
import { api } from '../services/api'

import { toast } from 'react-toastify'

const Register = () => {
  const router = useRouter()

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  async function handleRegisterUser() {
    setIsLoading(true)

    if (!userName || !userEmail) {
      toast.error('Preencha todos os campos')
      setIsLoading(false)
      return
    }
    try {
      await api.post('/usuarios/create.php', {
        nome: userName,
        email: userEmail
      })

      toast.success('Registro feito com sucesso!')

      router.push('/')
    } catch (error) {
      toast.error(
        'Não foi possível fazer o registro, tente novamente mais tarde'
      )
    }
    setIsLoading(false)
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
              <input
                type="text"
                placeholder="Digite seu nome completo"
                onChange={e => setUserName(e.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <Envelope size={20} color={'#00875f'} />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                onChange={e => setUserEmail(e.target.value)}
              />
            </div>

            <p>
              <a href="/">Voltar para a home</a>{' '}
            </p>

            <Button
              buttonText={'Registrar'}
              onClickFunction={handleRegisterUser}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Register
