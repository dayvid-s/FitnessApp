import { HomeHeader } from "@component/components/HomeHeader"
import { UserNutrients } from "@component/components/UserNutrients"
import { Welcome } from "@component/components/Welcome"
import { Container } from "./styles"
import { UserStatistics } from "@component/components/UserStatistics"
import { Footer } from "./../../components/Footer"
import { HealthGoals } from "./../../components/HealthGoals"
import { SectionTitle } from "@component/components/SectionTitle"

export default function Home() {
  return (
    <Container>
      <HomeHeader />
      <Welcome />
      <UserNutrients />
      <SectionTitle title="Metas diárias / Semanais" />
      <UserStatistics />
      {/* <HealthGoals /> */}
      <Footer />
    </Container>

  )
}