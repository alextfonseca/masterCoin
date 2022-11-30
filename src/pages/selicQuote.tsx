import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import styles from '../../styles/pages/currencyQuote.module.scss'
import { api } from '../services/api'

import { toast } from 'react-toastify'
import { SecondaryButton } from '../components/SecondaryButton'
import { useRouter } from 'next/router'

const SelicQuote = () => {
  const router = useRouter()

  const [quoteData, setQuoteData] = useState<any>()

  const [isLoading, setIsLoading] = useState(false)

  async function handleGetQuoteByCurrency() {
    setIsLoading(true)
    try {
      const { data } = await api.get('/conversao/selic.php')

      setQuoteData(data['prime-rate'][0])
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

  return (
    <>
      <Head>
        <title>Master Currency | Cotação da taxa Selic do Brasil</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            {isLoading && <p>Carregando dados...</p>}
            {quoteData && !isLoading && (
              <div>
                <p>Atualizado em: {quoteData.date}</p>
                <p>Valor: {quoteData.value}%</p>
              </div>
            )}
          </div>

          <div className={styles.details}>
            <h1>Cotação da taxa Selic do Brasil</h1>

            <div className={styles.buttons}>
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

export default SelicQuote
