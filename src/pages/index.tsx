import { GlobalStyle } from "@component/styles/styles"
import Head from "next/head"
import Home from "./home"
import Overview from "./overview"


export default function Initial() {  
  return(
    <>
      <GlobalStyle/>
      <Head>
        <title>Página inicial - FitnessApp</title>  
      </Head>      
      
      <Home />
    </>

  )
}