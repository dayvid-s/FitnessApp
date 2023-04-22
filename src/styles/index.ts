import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

@media (max-width:1080px){
  html{
    font-size: 93.75%; // 15px
  }
}

@media (max-width:720px){
  html{
    font-size: 87.5%; // 14px
  }
}

  body{
    /* background-color: linear-gradient(8deg,#221133,rgba(1, 2, 17)); */
      /* background-color: rgba(0, 0, 0, 0.1); */
      background: #221133;
  }
  
  p, h1, h2, h3, h4, h5, h6{
    color:#f2f6FC;
  }

  body, input, textarea, select, button{
    font:400 1rem sans-serif;
  }

button{
  cursor: pointer;
}

a{
  text-decoration: none;
  color: inherit;
}
`


