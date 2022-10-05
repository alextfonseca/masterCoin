import React from 'react'

import styles from './styles.module.scss'

interface SecondaryButtonProps {
  buttonText: string
  type?: 'submit' | 'button'
  onClickFunction: () => void
}

export const SecondaryButton = ({
  buttonText,
  type = 'button',
  onClickFunction
}: SecondaryButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onClickFunction}>
      {buttonText}
    </button>
  )
}
