import { HomeHeader } from "@component/components/HomeHeader"
import { UserNutrients } from "@component/components/UserNutrients"
import { Welcome } from "@component/components/Welcome"
import { Container } from "./styles"
import { UserStatistics } from "@component/components/UserStatistics"
import { Footer } from "./../../components/Footer"
import { HealthGoals } from "./../../components/HealthGoals"

export default function Home() {
  return (
    <Container>
      <HomeHeader />
      <Welcome />
      <UserNutrients />
      <UserStatistics />
      {/* <HealthGoals /> */}
      <Footer />
    </Container>

  )
}