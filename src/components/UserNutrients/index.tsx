import { NutrientsInfo } from "../NutrientsInfo"
import {
  Container,
  NutrientsWrapper,
} from "./styles"
import {TbMeat} from "react-icons/tb"
import {GiSlicedBread} from "react-icons/gi"
import {GiAvocado} from "react-icons/gi"
import {GiCorn} from "react-icons/gi"

export function UserNutrients (){
  
  

  return(
    <Container>
      <NutrientsWrapper>
        <NutrientsInfo type = "carb"  Icon = {GiSlicedBread} ></NutrientsInfo>  
        <NutrientsInfo type = "protein"  Icon={TbMeat}  ></NutrientsInfo>
        <NutrientsInfo type = "fat"  Icon = {GiAvocado}  ></NutrientsInfo>
        <NutrientsInfo type = "fiber"  Icon = {GiCorn}  ></NutrientsInfo> 
      </NutrientsWrapper>
    </Container>
  )
}