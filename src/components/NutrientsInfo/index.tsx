import {
  Container,
} from "./styles"

interface InutrientsInfoProps {
  marginLeft?: string  
}


export function NutrientsInfo ({marginLeft}:InutrientsInfoProps){
  
  

  return(
    <Container marginLeft={marginLeft} >
      <p>eaes</p>
    </Container>
  )
}