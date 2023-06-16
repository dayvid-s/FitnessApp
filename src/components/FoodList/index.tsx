// TODO: adicionar recolher e abrir conteudo do alimento encontrado.
import {
  AddFoodArea,
  AreaOfAddingNutrientAmounts,
  InputTitle,
  Container,
  FoodListItem,
  FoodNameAndActions,
  InformationText,
  NutrientArea,
  NutrientText,
  NutrientsInfoList,
} from "./styles"
import { Animation } from "rsuite"
import React, { Dispatch, SetStateAction, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
export interface ImodalProps {
  modalIsOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}


export function FoodsList() {
  const [show, setShow] = React.useState(true)
  const onChange = () => setShow(!show)
  const Panel = React.forwardRef<HTMLDivElement>((props, ref)=>{
    
    return(
    
        
      <div
        {...props}
        ref={ref}  
        style={{
          background: "#000",
          width: 100,
          height: 88,
          display: "inline-block",
          overflow: "hidden"
        }}
      >
        <div>
          <p>Panel</p>
          <p>Content Content Content</p>
        </div>
      </div>
    )
  }
  )

  Panel.displayName = "Panel"
  
  
  const arrayMockup = [{
    "id": "1",
    "name": "Lasanha",
    nutrients: {
      
      "calories": 340,
      "proteins": 16.5,
      "carbs": 34.2,
      "totalFats": 14.8,
      "saturatedFats": 8.6,
      "polyUnsaturatedFats": 1.4,
      "sodium": 550,
      "dietFiber": 1.8
    }
  } ]
  return (
    <>

      <Container>
        <FoodNameAndActions>
          <FoodListItem>Arroz integral</FoodListItem>
          <MdKeyboardArrowDown  onClick={onChange} />
          {/* <MdKeyboardArrowUp/> */}

          <BsThreeDotsVertical />
        </FoodNameAndActions>

        <NutrientsInfoList>

          {arrayMockup.map((Food) =>{
            return (
              
              <NutrientArea key={Food.id} >
                <NutrientText></NutrientText>
                <NutrientText>213.9g</NutrientText>
                <NutrientText>5%</NutrientText>
              </NutrientArea>
            )
            
          })}
          <NutrientArea>
            <NutrientText>Carboidratos </NutrientText>
            <NutrientText>213.9g</NutrientText>
            <NutrientText>5%</NutrientText>

          </NutrientArea>
          <NutrientArea>
            <NutrientText>Carboidratos </NutrientText>
            <NutrientText>213.9g</NutrientText>
            <NutrientText>5%</NutrientText>

          </NutrientArea>
          <NutrientArea>
            <NutrientText>Carboidratos </NutrientText>
            <NutrientText>213.9g</NutrientText>
            <NutrientText>5%</NutrientText>

          </NutrientArea>
          <NutrientArea>
            <NutrientText>Carboidratos </NutrientText>
            <NutrientText>213.9g</NutrientText>
            <NutrientText>5%</NutrientText>

          </NutrientArea>
          <NutrientArea>
            <NutrientText>Carboidratos </NutrientText>
            <NutrientText>213.9g</NutrientText>
            <NutrientText>5%</NutrientText>

          </NutrientArea>
          <NutrientArea>
            <NutrientText>Carboidratos </NutrientText>
            <NutrientText>213.9g</NutrientText>
            <NutrientText>5%</NutrientText>

          </NutrientArea>


        </NutrientsInfoList>

        <AreaOfAddingNutrientAmounts>
          <InformationText >
            A porcentagem (%), ao lado da quantidade em gramas, mostra quanto de um nutriente específico você estará
            consumindo em relação à quantidade recomendada para o dia.
          </InformationText>
          <AddFoodArea>
            <InputTitle>Quantidade</InputTitle>
            <input defaultValue={0} type="number" >
            </input>
            <InputTitle>Peso em gramas</InputTitle>
            <input defaultValue={0} type="number" >
              {/* must have a hover that change the border color to blue and also when is writing */}
            </input>
            <button >
              <h4>Adicionar</h4>
            </button>
          </AddFoodArea>
        </AreaOfAddingNutrientAmounts>
      </Container>

    </>

  )
}