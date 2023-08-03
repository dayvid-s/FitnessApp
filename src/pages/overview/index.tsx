import { GlobalHeader } from "@component/components/GlobalHeader"
import { UserNutrients } from "@component/components/UserNutrients"
import { Welcome } from "@component/components/Welcome"
import { UserStatistics } from "@component/components/UserStatistics"
import { Footer } from "../../components/Footer"
import { HealthGoals } from "../../components/HealthGoals"
import { SectionTitle } from "@component/components/SectionTitle"
import { RecommendedActivities } from "@component/components/RecommendedActivities"
import { TrainningAndFoods } from "@component/components/TrainningAndFoods"

export default function Overview() {
  return (
    <>
      <GlobalHeader />
      <Welcome />
      <UserNutrients />
      <SectionTitle title="Metas diárias / Semanais" button="RemakeGoals"  />
      <UserStatistics />
      <SectionTitle 
        title="Atividades recomendadas para perda de peso" button='Objective' />
      {/* aqui será condicional/ para ganho de peso/manuntenção/ ou perda de peso */}
      {/* <HealthGoals /> */}
      <RecommendedActivities/>
      <TrainningAndFoods />
      
      <SectionTitle 
        title="Tempo de sono semanal"  />
      <HealthGoals />
      
      <Footer />
    </>

  )
}