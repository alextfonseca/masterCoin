import React from 'react'
import { ButtonContainer } from './style'

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
    <ButtonContainer type={type} onClick={onClickFunction}>
      {buttonText}
    </ButtonContainer>
  )
}
