import { NutrientsInfo } from "../NutrientsInfo"
import {
  Container, NutrientsWrapper,
} from "./styles"


export function UserNutrients (){
  
  

  return(
    <Container>
      <NutrientsWrapper>
        <NutrientsInfo  ></NutrientsInfo>  
        <NutrientsInfo marginLeft={"12.5rem"} ></NutrientsInfo>
        <NutrientsInfo marginLeft={"25rem"} ></NutrientsInfo>
        <NutrientsInfo marginLeft={"37.5rem"} ></NutrientsInfo>
      </NutrientsWrapper>
      <p>eaes</p>
    </Container>
  )
}