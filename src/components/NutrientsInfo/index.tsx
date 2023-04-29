import { IconType } from "react-icons/lib"
import {
  Container,
  IconWrapper
} from "./styles"
import React from "react"



export interface InutrientsInfoProps {
  type: string,
  marginLeft?: string,
  Icon: IconType
}

export function NutrientsInfo ({
  type,
  marginLeft, 
  Icon
}:InutrientsInfoProps){
  
  

  return(
    <Container marginLeft={marginLeft} >
      <IconWrapper type={type} >

        {React.createElement(Icon)}
      </IconWrapper>

      <p>eaes</p>
    </Container>
  )
}