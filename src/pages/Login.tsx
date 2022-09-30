import Image from 'next/future/image'
import React, { useState } from 'react'
import {
  Container,
  Content,
  ContentText,
  FormBox,
  InputContainer
} from '../../styles/pages/Login'

import Logo from '../../public/icons/logo.svg'
import { Button } from '../components/Button'
import Head from 'next/head'
import { Envelope, Eye, EyeSlash, Lock } from 'phosphor-react'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Head>
        <title>Master Currency | Login</title>
      </Head>
      <Container>
        <Content>
          <ContentText>
            <Image
              src={Logo}
              alt="Logo da empresa escrito Master Currency, sendo o S representado pelo sinal de real"
              width={200}
              height={100}
            />

            <h1>
              Faça login na plataforma e fique por dentro do mundo do dinheiro
            </h1>
          </ContentText>

          <FormBox>
            <InputContainer>
              <Envelope size={20} color={'#00875f'} />
              <input type="email" placeholder="Digite seu e-mail" />
            </InputContainer>

            <InputContainer>
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
            </InputContainer>

            <Button buttonText={'Entrar'} onClickFunction={() => {}} />

            <p>
              Ainda não possui uma conta ? <a href="/register">Registrar-se</a>{' '}
            </p>
          </FormBox>
        </Content>
      </Container>
    </>
  )
}
