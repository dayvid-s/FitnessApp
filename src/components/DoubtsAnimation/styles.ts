import styled, { css } from "styled-components"

export interface INutrientArea {
  type: string
}
export const Container = styled.div`
  width: 80vw;
  list-style: none;
  margin-top:10px;
  display:flex;
  background-color: #0e0e1d;
  padding:20px 15px;
  display:flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-touch-callout: none; /* Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  svg{
    color:#aeaeb3;
    width:25px;
    height:30px;
    opacity: 0.9;
    cursor:pointer;
}
  svg:nth-of-type(1){
    margin-left: auto;
    width:30px;
    height:30px;

}
  `

export const FoodNameAndActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;

`

export const NutrientsInfoList = styled.ul`
  display: flex;
  height: 150px;
  flex-flow: column wrap;
`

export const NutrientArea = styled.div<INutrientArea>`
  margin-top: 10px;
  height: 30px;
  width: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${({ type }) => (type == "protein") && css`
  border-left: 5px var(--green) solid`};

`
export const NutrientText = styled.p`
  font-family: Montserrat;
  margin-left: 10px;
  color: #fff;
`

export const AreaOfAddingNutrientAmounts = styled.div`
  /* height: 200px; */
  margin: 30px 0 10px ;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FoodListItem = styled.li`
  font-size: 1.5rem;

  `


export const InformationText = styled.p`
  font-family: "Montserrat";
  color: #fff;
  font-size: 0.85rem;
  width: 400px;
`

export const AddFoodArea = styled.div`
  margin-left: 120px;
  width: 250px;
  input{
    padding: 10px 20px;
    color: #fff;
    margin-top: 5px;
    background-color: #000;
    border:1px solid transparent;
    border-radius: 10px;
     :focus {
      border: 1px solid #82ffac; 
  }
  }
  button{
    padding: 12px 80px;
    border: none;
    margin-top: 10px;
    background-color: #82ffac;
    border-radius: 10px;
  }
  h4{
    font-family: "Montserrat";
    color: #000;
    display: flex;
    justify-content: center;
  }
`
export const InputTitle = styled.p`
  font-family: Montserrat;
  margin-top: 10px;
  margin-left: 10px;
  color: #fff;
  font-size: 0.80rem;
`