import { GlobalStyle } from "@component/styles"
import Head from "next/head"
//document only load once time in the app.

export default function About() {  
    return(
      <>
      <GlobalStyle></GlobalStyle>
        <Head>
          <title>Página inicial - FitnessApp</title>  
        </Head>      

        <div>
          <h1>
          Página inicial - FitnessApp
          </h1>
        </div>
      </>

)
  }