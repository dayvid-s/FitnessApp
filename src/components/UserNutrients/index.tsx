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
        <NutrientsInfo type = "protein"  Icon={TbMeat} marginLeft={"19rem"} ></NutrientsInfo>
        <NutrientsInfo type = "fat"  Icon = {GiAvocado}marginLeft={"38rem"} ></NutrientsInfo>
        <NutrientsInfo type = "fiber"  Icon = {GiCorn} marginLeft={"57rem"} ></NutrientsInfo> 
      </NutrientsWrapper>
    </Container>
  )
}