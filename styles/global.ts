import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

// fonts

@media (max-width: 1080px) {
  html {
    font-size: 93.75%; //15px
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%; //14px
  }
}

body {
  background: ${props => props.theme['black-50']};
  color: ${props => props.theme['white-50']};
  -webkit-font-smoothing: antialiased;
  font-family: "Poppins", sans-serif;
}

body,
input,
textarea,
select,
button,
p {
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
}

h2 {
  font-size: 1.7rem;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  transition: all 0.3s;

  padding: 0.5rem 0;
}

.formGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1rem;
  width: 100%;
}


.erroMessage {
  color: red;
  font-size: 0.8rem;
}


.error {
  border: 1px solid red;
  border-radius: 0.4rem;
  overflow: hidden;
}

`
