import { IconType } from "react-icons/lib"
import {
  Container,
  IconWrapper,
  MacroNutrientsWrapper,
  RegisterMealButton,
  TotalNutrientsArea
} from "./styles"
import React from "react"
import {BsFillArrowRightSquareFill} from "react-icons/bs"


export interface InutrientsInfoProps {
  type: string,
  Icon: IconType
}

export function NutrientsInfo ({
  type,
  Icon
}:InutrientsInfoProps){
  
  

  return(
    <Container type={type} >
      <MacroNutrientsWrapper>

        <IconWrapper type={type} >

          {React.createElement(Icon)}
        </IconWrapper>

        <p>Carboidratos</p>
      </MacroNutrientsWrapper>
      
      <TotalNutrientsArea>
        <p>Total de <strong>0</strong> Carboidratos consumidos hoje</p>
      
        <RegisterMealButton>REGISTRAR REFEIÇÃO

          <BsFillArrowRightSquareFill/>
        </RegisterMealButton>
      </TotalNutrientsArea>
      {/* 0 carboidratos hoje, registrar refeição pique botao #DBF2FD*/}
    </Container>
  )
}