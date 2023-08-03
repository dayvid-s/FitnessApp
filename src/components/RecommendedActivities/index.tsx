import {
  Container,
  RecommendedActivityWrapper,
} from "./styles"
import {CgGym} from "react-icons/cg"
import {BiRun} from "react-icons/bi"
import {TbSwimming} from "react-icons/tb"
import { MdFastfood } from "react-icons/md"
import { HiTrendingDown } from "react-icons/hi"
import { GiNightSleep} from "react-icons/gi"

export function RecommendedActivities() {

  return (
    <Container>
      
      <RecommendedActivityWrapper>
        <CgGym></CgGym>
        <p>Treino HIIT 3x por semana (HIIT = TREINO DE ALTA INTENSIDADE)</p>
      </RecommendedActivityWrapper>
      <RecommendedActivityWrapper>
        <BiRun></BiRun>
        <p>Correr 3km por dia</p>
      </RecommendedActivityWrapper>
      <RecommendedActivityWrapper>
        <TbSwimming></TbSwimming>
        <p>Participar de um triatlo</p>
      </RecommendedActivityWrapper>
      <RecommendedActivityWrapper>
        <MdFastfood></MdFastfood>
        <p>Não comer Fast Foods</p>
      </RecommendedActivityWrapper>

      <RecommendedActivityWrapper>
        <HiTrendingDown></HiTrendingDown>
        <p>Balanço calórico negativo todos os dias</p>
      </RecommendedActivityWrapper>

      <RecommendedActivityWrapper>
        <GiNightSleep></GiNightSleep>
        <p>Dormir mais que 7 horas por dia</p>
      </RecommendedActivityWrapper>

    </Container>
  )
}