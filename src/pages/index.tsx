import { GlobalStyle } from "@component/styles/styles"
import Head from "next/head"
import Home from "./home"
import Workouts from "./workouts"
import { HomeHeader } from "@component/components/HomeHeader"
import { Welcome } from "@component/components/Welcome"
import { UserNutrients } from "@component/components/UserNutrients"
import { UserStatistics } from "@component/components/UserStatistics"

export default function Initial() {  
  return(
    <>
      <GlobalStyle/>
      <Head>
        <title>Página inicial - FitnessApp</title>  
      </Head>      
      <Home/>
    </>

  )
}