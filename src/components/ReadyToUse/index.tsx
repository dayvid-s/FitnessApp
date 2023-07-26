import { RectangularButton } from "../RectangularButton"
import {
  Container,
  TextReadyToUse,
  AreaReadyToUse,
  ParagraphCreateAccount
}
  from "./styles"

export function ReadyToUse() {
  return (

    <Container data-aos="fade-up" >
      <AreaReadyToUse>
        <TextReadyToUse>Pronto <strong>para começar a usar?</strong></TextReadyToUse>

        <ParagraphCreateAccount>
          Crie uma conta no FitnessApp e comece gratuitamente, leva <br/> menos de cinco minutos.
        </ParagraphCreateAccount>

        <RectangularButton title="Criar minha conta" />
      </AreaReadyToUse>
    </Container>
  )
}
