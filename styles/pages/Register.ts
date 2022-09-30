import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  max-width: 1120px;
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormBox = styled.form`
  min-width: 500px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background: ${props => props.theme['black-50']};

  padding: 3rem;

  border-radius: 5px;

  p {
    margin-top: 1rem;
    font-size: 1.125rem;

    a {
      color: ${props => props.theme['green-50']};
      text-decoration: underline;

      &:hover {
        color: ${props => props.theme['green-100']};
      }
    }
  }

  button {
    margin-top: 2rem;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0 0.5rem;

  border-radius: 5px;

  border: 2px solid ${props => props.theme['black-200']};

  background: ${props => props.theme['white-50']};

  outline: none;

  transition: all 0.3s;

  &:hover {
    border: 2px solid ${props => props.theme['green-100']};
    box-shadow: 1px 1px 5px ${props => props.theme['green-100']};
  }

  button {
    margin: 0;
    border: none;
    background: none;

    &:hover {
      filter: brightness(0.7);
    }
  }
`
