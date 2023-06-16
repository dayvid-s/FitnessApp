import styled from "styled-components"


export const Container = styled.div`
    margin-bottom:30px;
  list-style: none;
  margin-top:20px;
  display:flex;
  background-color: #131313;
  padding:10px 15px;
  display:flex;
  flex-direction: column;
  height:370px;


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
`

export const NutrientsInfoList = styled.ul`
  display: flex;
  height: 150px;
  flex-flow: column wrap;
`

export const NutrientArea = styled.div`
  margin-top: 10px;
  border-left: 5px blue solid;
  height: 30px;
  width: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const NutrientText = styled.p`
  font-family: Montserrat;
  margin-left: 10px;
  color: #fff;
`

export const AreaOfAddingNutrientAmounts = styled.div`
  margin-top: 50px;
  height: 30px;
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
    border-radius: 10px;
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