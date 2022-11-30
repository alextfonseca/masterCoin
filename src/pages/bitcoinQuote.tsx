import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import styles from '../../styles/pages/currencyQuote.module.scss'
import { Button } from '../components/Button'
import { api } from '../services/api'

import { toast } from 'react-toastify'
import { SecondaryButton } from '../components/SecondaryButton'
import { useRouter } from 'next/router'

const BitcoinQuote = () => {
  const router = useRouter()

  const [quoteData, setQuoteData] = useState<any>()

  const [isLoading, setIsLoading] = useState(false)

  async function handleGetQuoteByCurrency() {
    setIsLoading(true)
    try {
      const { data } = await api.post('/conversao/blockchain.php')

      setQuoteData(data)
    } catch (error) {
      toast.error(
        'Não foi possível fazer a cotação, tente novamente mais tarde'
      )
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetQuoteByCurrency()
  }, [])

  const buyValue = Number(quoteData?.BRL?.buy)

  const buyQuotation = buyValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const sellValue = Number(quoteData?.BRL?.sell)

  const sellQuotation = sellValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <>
      <Head>
        <title>Master Currency | Valor de compra e venda do bitcoin</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            {isLoading && <p>Carregando dados...</p>}
            {quoteData && !isLoading && (
              <div>
                <p>Moeda selecionada: Real</p>
                <p>Valor de compra: {buyQuotation}</p>
                <p>
                  Valor de venda:
                  {sellQuotation}
                </p>
              </div>
            )}
          </div>

          <div className={styles.details}>
            <h1>Valor de compra e venda do bitcoin</h1>

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

export default BitcoinQuote
