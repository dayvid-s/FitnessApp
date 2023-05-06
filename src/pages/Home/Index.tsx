import { HomeHeader } from "@component/components/HomeHeader"
import { UserNutrients } from "@component/components/UserNutrients"
import { Welcome } from "@component/components/Welcome"
import { Container } from "./styles"
import { UserStatistics } from "@component/components/UserStatistics"

export default function Home(){
  return(
    <Container>
      <HomeHeader/>
      <Welcome/>
      <UserNutrients/>
      <UserStatistics/>
    </Container>

  )
}