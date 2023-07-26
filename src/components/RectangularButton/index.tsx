import {
  RectangularButtonn
} from "./styles"

interface RectangularButtonProps{
    title: string
}
export function RectangularButton({title}: RectangularButtonProps){
  return (
      
    <RectangularButtonn>
      <h4>{title}</h4>
    </RectangularButtonn>
  )
}