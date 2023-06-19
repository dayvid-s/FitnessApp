//TODO: .Adicionar cor responsiva ao nutrient em nutrient area
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
export interface IFoodListProps {
  showAnimation: boolean,
  setShowAnimation: Dispatch<SetStateAction<boolean>>
}


export function FoodList() {
  const [showAnimation, setShowAnimation] = useState(false)
  const onChange = () => setShowAnimation(!showAnimation)
  const Panel = React.forwardRef<HTMLDivElement>((props, ref) => {

    return (


      <div {...props} ref={ref}>
        <NutrientsInfoList>

          {arrayMockup.map((NutrientName, index) => {
            return (

              <NutrientArea key={index} type='protein' >
                {/* aqui precisa estar responsivo ao tipo de nutrient */}
                <NutrientText>{NutrientName}</NutrientText>
                <NutrientText>213.9g</NutrientText>
                <NutrientText>5%</NutrientText>
              </NutrientArea>
            )

          })}


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
      </div>
    )
  }
  )

  Panel.displayName = "Panel"


  const arrayMockup = [

    "calories",
    "proteins",
    "carbs",
    "totalFats",
    "saturatedFats",
    "polyUnsaturatedFats",
    "sodium",
    "dietFiber"
  ]
  return (
    <>

      <Container>
        <FoodNameAndActions onClick={onChange} >
          <FoodListItem>Arroz integral</FoodListItem>
          {showAnimation == true ? (
            <MdKeyboardArrowUp onClick={onChange} />
          ) : (
            <MdKeyboardArrowDown onClick={onChange} />
          )}

          <BsThreeDotsVertical />
        </FoodNameAndActions>


        <Animation.Collapse in={showAnimation}>
          {(props, ref) => <Panel {...props} ref={ref} />}
        </Animation.Collapse>

      </Container>

    </>

  )
}