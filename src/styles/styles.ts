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

  
html{
  font-size: 62.5%;

}
@media (max-width:1000px){
  html{
    font-size: 50%; 
  }
}

  body{
  /* background-color: linear-gradient(8deg,#221133,rgba(1, 2, 17)); */
    /* background-color: rgba(0, 0, 0, 0.1); */
    /* background: #221133; */
    /* background: rgb(32, 33, 37); */
    /* background-color: #010101; */
    background-color: #020210;
    ::-webkit-scrollbar {
    width: 5px;
    
}


::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}


  -webkit-font-smoothing: antialiased;
  }
  
  p,a, h1, h2, h3, h4, h5, h6, li,strong {
    color:#aeaeb3; 
    font-family: 'Roboto', sans-serif;
    /* font-family: 'Neue Haas Grotesk Text Pro', sans-serif; */
    /* font-family: 'Open Sans', sans-serif; */


  }
  p,a,li,span{
    font-size: 1.6rem;
    font-weight: 500;
  }
  input, textarea, select, button{
    font:500 1.6rem "Roboto", sans-serif;
  }
  h1{
    font-size: 4.2rem;
  }
  h2{
    font-size: 3.5rem;
  }
  h3{
    font-size: 2.5rem;
  }
  h4{
    font-size: 2rem;
  }
input{
  outline: 0;
  border: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

}
button{
  cursor: pointer;
  border:"none";
  
}

a{
  text-decoration: none;
  color: inherit;
}
`


