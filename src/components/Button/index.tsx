import React from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
  buttonText: string
  type?: 'submit' | 'button'
  onClickFunction: () => void
}

export const Button = ({
  buttonText,
  type = 'button',
  onClickFunction
}: ButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onClickFunction}>
      {buttonText}
    </button>
  )
}
