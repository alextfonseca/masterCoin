import Head from 'next/head'
import React, { useState } from 'react'

import styles from '../../styles/pages/currencyQuote.module.scss'
import { Button } from '../components/Button'
import { api } from '../services/api'

import { toast } from 'react-toastify'
import { SecondaryButton } from '../components/SecondaryButton'
import { useRouter } from 'next/router'

import XMLParser from 'react-xml-parser'

const CurrencyQuote = () => {
  const router = useRouter()

  const [quoteCurrency, setQuoteCurrency] = useState('USD-BRL')

  const [quoteData, setQuoteData] = useState<any>()

  const [isLoading, setIsLoading] = useState(false)

  async function handleGetQuoteByCurrency() {
    setIsLoading(true)
    try {
      const { data } = await api.post('/conversao/cotacao.php', {
        money: quoteCurrency
      })

      const newData = new XMLParser().parseFromString(data)

      console.log(newData.children[0])
      setQuoteData(newData.children[0])
    } catch (error) {
      toast.error(
        'Não foi possível fazer a cotação, tente novamente mais tarde'
      )
    }
    setIsLoading(false)
  }

  const highestQuotationValue = Number(quoteData?.children[3].value)

  const highestQuotation = highestQuotationValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const lowestQuotationValue = Number(quoteData?.children[4].value)

  const lowestQuotation = lowestQuotationValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

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
                <p>Cotação selecionada: {quoteData?.children[2].value}</p>
                <p>Maior valor do dia: {highestQuotation}</p>
                <p>Menor valor do dia: {lowestQuotation}</p>
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
                <option value="USD-BRL">
                  Dólar americano para Real Brasileiro Turismo
                </option>
                <option value="EUR-BRL">
                  Euro para Real Brasileiro Turismo
                </option>

                <option value="BTC-BRL">
                  Bitcoin para Real Brasileiro Turismo
                </option>
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
