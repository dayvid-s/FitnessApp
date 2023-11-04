import Head from "next/head"
import Home from "./home"
import { GlobalStyle } from "@component/styles/styles"


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