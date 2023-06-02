import { IconType } from "react-icons/lib"
import {
  Container,
  IconWrapper,
  MacroNutrientsWrapper,
  RegisterMealButton,
  TotalNutrientsArea
} from "./styles"
import React, { useState } from "react"

import {BsFillArrowRightSquareFill} from "react-icons/bs"
import { ModalForRegisterFoods } from "../ModalForRegisterFoods"


export interface InutrientsInfoProps {
  type: string,
  Icon: IconType
}

export function NutrientsInfo ({
  type,
  Icon
}:InutrientsInfoProps){
  const [modalIsOpen, setIsOpen] =useState(false)
  function toogleModal(modal: boolean ) {
    {console.log(modalIsOpen)}
    modal == true? setIsOpen(false): setIsOpen(true)
  }
  
  
  return(
    <Container type={type} >
      <MacroNutrientsWrapper>

        <IconWrapper nutrientType={type} >

          {React.createElement(Icon)}
        </IconWrapper>

        <p>Carboidratos</p>
      </MacroNutrientsWrapper>
      
      <ModalForRegisterFoods modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <TotalNutrientsArea>
        <p>Total de <strong>0</strong> Carboidratos consumidos hoje</p>
      
        <RegisterMealButton 
          onClick={()=>{toogleModal(modalIsOpen)}}
          nutrientType={type} >REGISTRAR REFEIÇÃO

          <BsFillArrowRightSquareFill/>
        </RegisterMealButton>
      </TotalNutrientsArea>
      {/* 0 carboidratos hoje, registrar refeição pique botao #DBF2FD*/}
    </Container>
  )
}