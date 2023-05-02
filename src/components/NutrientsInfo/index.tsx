import { IconType } from "react-icons/lib"
import {
  Container,
  IconWrapper
} from "./styles"
import React from "react"



export interface InutrientsInfoProps {
  type: string,
  Icon: IconType
}

export function NutrientsInfo ({
  type,
  Icon
}:InutrientsInfoProps){
  
  

  return(
    <Container type={type}  >
      <IconWrapper type={type} >

        {React.createElement(Icon)}
      </IconWrapper>

      <p>Carboidratos</p>
    </Container>
  )
}