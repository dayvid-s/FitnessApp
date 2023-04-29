import { NutrientsInfo } from "../NutrientsInfo"
import {
  Container, NutrientsWrapper,
} from "./styles"


export function UserNutrients (){
  
  

  return(
    <Container>
      <NutrientsWrapper>
        <NutrientsInfo  ></NutrientsInfo>  
        <NutrientsInfo marginLeft={"19rem"} ></NutrientsInfo>
        <NutrientsInfo marginLeft={"38rem"} ></NutrientsInfo>
        <NutrientsInfo marginLeft={"57rem"} ></NutrientsInfo>
      </NutrientsWrapper>
      <p>eaes</p>
    </Container>
  )
}