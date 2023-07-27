//TODO: must be refatored
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
type doubt = {
  id: number,
  question: string,
  answer: string
  

}

interface DoubtsAnimationProps{
  doubt: doubt
}

export function DoubtsAnimation({doubt}: DoubtsAnimationProps) {
  const [showAnimation, setShowAnimation] = useState(false)
  const onChange = () => setShowAnimation(!showAnimation)



  const Panel = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
      <div {...props} ref={ref}>
        <AreaOfAddingNutrientAmounts>
          <h4 style={{fontWeight:"400"}} >{doubt.answer} </h4>
        </AreaOfAddingNutrientAmounts>
      </div>
    )
  }
  )

  Panel.displayName = "Panel"

  return (
    <>

      <Container>
        <FoodNameAndActions onClick={onChange} >
          <FoodListItem>{ doubt.question}</FoodListItem>
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