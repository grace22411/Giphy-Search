import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
  body {
    margin: 0;
    padding: 0 0 50px 0;

    font-family: 'Space Grotesk', sans-serif;
    background-color: #fffae6;
    p,h1,h2,h3,h4,h5,h6{
      margin: 0;
    }
  }
`

export default GlobalStyle
