import React from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
  buttonText: string
  type?: 'submit' | 'button'
  onClickFunction: () => void
  isLoading: boolean
}

export const Button = ({
  buttonText,
  isLoading,
  type = 'button',
  onClickFunction
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading}
      className={styles.button}
      type={type}
      onClick={onClickFunction}
    >
      {isLoading ? 'Carregando...' : buttonText}
    </button>
  )
}
