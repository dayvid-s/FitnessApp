import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --orange: #ff512f;
    --orange-light: #f09819;
    --gray-dark: #121214;
    --gray-light: #202024;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

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
      /* background: #221133; */
      /* background: rgb(32, 33, 37); */
      background:#F7F7F7;
      -webkit-font-smoothing: antialiased;
  }
  
  p,a, h1, h2, h3, h4, h5, h6{
    color:#e1e1e6;
    font-family: Roboto, sans-serif;


  }

  body, input, textarea, select, button{
    font:500 1rem sans-serif;


  }

button{
  cursor: pointer;
}

a{
  text-decoration: none;
  color: inherit;
}
`


