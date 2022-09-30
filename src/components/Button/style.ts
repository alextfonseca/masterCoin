import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: ${props => props.theme['green-50']};
  border: 0px;
  border-radius: 5px;

  color: ${props => props.theme['white-50']};
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;

  padding: 0.9rem 2rem;

  &:hover {
    background: ${props => props.theme['green-100']};
  }
`
