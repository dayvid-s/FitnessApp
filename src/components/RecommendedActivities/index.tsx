import {
  Container, RecommendedActivityWrapper,
} from "./styles"
import {CgGym} from "react-icons/cg"

export function RecommendedActivities() {

  return (
    <Container>
      
      <RecommendedActivityWrapper>
        <CgGym></CgGym>
        <p>Treino HIIT 3x por semana. (HIIT = TREINO DE ALTA INTENSIDADE)</p>
      </RecommendedActivityWrapper>
      <RecommendedActivityWrapper>
        <CgGym></CgGym>
        <p>Treino HIIT 3x por semana. (HIIT = TREINO DE ALTA INTENSIDADE)</p>
      </RecommendedActivityWrapper>
      <RecommendedActivityWrapper>
        <CgGym></CgGym>
        <p>Treino HIIT 3x por semana. (HIIT = TREINO DE ALTA INTENSIDADE)</p>
      </RecommendedActivityWrapper>
      <RecommendedActivityWrapper>
        <CgGym></CgGym>
        <p>Treino HIIT 3x por semana. (HIIT = TREINO DE ALTA INTENSIDADE)</p>
      </RecommendedActivityWrapper>
    </Container>
  )
}