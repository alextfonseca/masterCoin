import Image from 'next/future/image'
import React, { useState } from 'react'

import Logo from '../../public/icons/logo.svg'
import { Button } from '../components/Button'
import Head from 'next/head'
import { Envelope, Eye, EyeSlash, Lock, User } from 'phosphor-react'
import {
  Container,
  Content,
  ContentText,
  FormBox,
  InputContainer
} from '../../styles/pages/Register'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Head>
        <title>Master Currency | Registro</title>
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

            <h1>Fique por dentro do mundo financeiro em poucos cliques</h1>
          </ContentText>

          <FormBox>
            <InputContainer>
              <User size={20} color={'#00875f'} />
              <input type="text" placeholder="Digite seu nome completo" />
            </InputContainer>

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

            <p>
              Já possui uma conta ? <a href="/Login">Logar</a>{' '}
            </p>

            <Button buttonText={'Cadastrar'} onClickFunction={() => {}} />
          </FormBox>
        </Content>
      </Container>
    </>
  )
}

export default Register
