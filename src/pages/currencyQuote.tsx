import Head from 'next/head'
import React, { useState } from 'react'

import styles from '../../styles/pages/currencyQuote.module.scss'
import { Button } from '../components/Button'
import { api } from '../services/api'

import { toast } from 'react-toastify'
import { SecondaryButton } from '../components/SecondaryButton'
import { useRouter } from 'next/router'

interface quoteDataProps {
  USDBRL: {
    ask: string
    bid: string
    code: string
    codeIn: string
    create_data: string
    high: string
    low: string
    name: string
    pctChange: string
    timeStamp: string
    varbid: string
  }
}

const CurrencyQuote = () => {
  const router = useRouter()

  const [quoteCurrency, setQuoteCurrency] = useState('USD-BRL')

  const [quoteData, setQuoteData] = useState<quoteDataProps>()

  const [isLoading, setIsLoading] = useState(false)

  async function handleGetQuoteByCurrency() {
    setIsLoading(true)
    try {
      const { data } = await api.post('/conversao/cotacao.php', {
        money: quoteCurrency
      })
      setQuoteData(data)
    } catch (error) {
      toast.error(
        'Não foi possível fazer a cotação, tente novamente mais tarde'
      )
    }
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>Master Currency | Cotação de Moeda</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            {isLoading && <p>Carregando dados...</p>}
            {quoteData && !isLoading && (
              <div>
                <p>Name: {quoteData?.USDBRL.name}</p>
                <p>Ask: {quoteData?.USDBRL.ask}</p>
                <p>Bid: {quoteData?.USDBRL.bid}</p>
                <p>Code: {quoteData?.USDBRL.code}</p>
                <p>CodeIn: {quoteData?.USDBRL.codeIn}</p>
                <p>Low: {quoteData?.USDBRL.low}</p>
                <p>High: {quoteData?.USDBRL.high}</p>
                <p>VarBid: {quoteData?.USDBRL.varbid}</p>
              </div>
            )}
          </div>

          <div className={styles.details}>
            <h1>Cotação de moedas</h1>

            <form>
              <label htmlFor="quote">Escolha qual moeda deseja cotar</label>
              <select
                name="quote"
                id="quote"
                onChange={e => setQuoteCurrency(e.target.value)}
              >
                <option value="USD-BRL">Dólar para real</option>
              </select>
            </form>

            <div className={styles.buttons}>
              <Button
                buttonText={'Cotar'}
                onClickFunction={handleGetQuoteByCurrency}
                isLoading={isLoading}
              />

              <SecondaryButton
                buttonText={'Voltar para home'}
                onClickFunction={() => router.push('/')}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrencyQuote
