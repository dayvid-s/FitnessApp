import { RectangularButton } from "../RectangularButton"
import {
  Container, TextReadyToUse,
}
  from "./styles"

export function Doubts() {
  return (
    <Container>

      {/* <Container data-aos="fade-up" > */}
      <div style={{
        display: "flex",
        flexDirection:"column",
        marginLeft: "70px",
      }}>

        <TextReadyToUse>Pronto <strong>para começar a usar?</strong></TextReadyToUse>
      
        <p style={{fontSize:"1.25rem",fontWeight:"400", marginTop:"30px", marginBottom:"30px"}} >
          Crie uma conta no FitnessApp e comece gratuitamente, leva <br/> menos de cinco minutos.
        </p>

        <RectangularButton title="Criar minha conta" />
      </div>
    </Container>
  )
}
