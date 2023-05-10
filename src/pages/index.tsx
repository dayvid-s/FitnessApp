import { GlobalStyle } from "@component/styles/styles"
import Head from "next/head"
import Home from "./Home/Index"

export default function About() {  
  return(
    <>
      <GlobalStyle/>
      <Head>
        <title>Página inicial - FitnessApp</title>  
      </Head>      
      <Home></Home>
    </>

  )
}