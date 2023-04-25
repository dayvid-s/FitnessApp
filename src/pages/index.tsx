import { HomeHeader } from "@component/components/HomeHeader"
import { UserNutrients } from "@component/components/UserNutrients"
import { Welcome } from "@component/components/Welcome"
import { GlobalStyle } from "@component/styles"
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