import { HomeHeader } from "@component/components/HomeHeader"
import { GlobalStyle } from "@component/styles"
import Head from "next/head"

export default function About() {  
  return(
    <>
      <GlobalStyle></GlobalStyle>
      <Head>
        <title>Página inicial - FitnessApp</title>  
      </Head>      

      <HomeHeader></HomeHeader>
    </>

  )
}