import { HomeHeader } from "@component/components/HomeHeader"
import { Welcome } from "@component/components/Welcome"
import { GlobalStyle } from "@component/styles"
import Head from "next/head"

export default function About() {  
  return(
    <>
      <GlobalStyle/>
      <Head>
        <title>Página inicial - FitnessApp</title>  
      </Head>      

      <HomeHeader/>
      <Welcome/>
    </>

  )
}