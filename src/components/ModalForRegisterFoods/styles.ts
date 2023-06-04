import styled from "styled-components"

export const Container = styled.div`
  width: 60vw;
  height: 70vh;
  background: rgb(173,63,251);
  background: linear-gradient(170deg, #181818 10%, rgba(10,10,10,5) 100%);
  background:#1c1d22;
  /* padding:10px 20px; */
`
export const ModalTopArea = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px #212121 solid;
  /* opacity:0.6; */
  padding:20px 20px;
  svg{
  color:#aeaeb3;
  width:30px;
  height:30px;
  opacity: 0.9;
  cursor:pointer;
}
svg:nth-of-type(2){
  margin-left: auto;
}
p{
  margin-left:10px;
}
input{
  outline: 0;
  border: none;
  margin-left: 10px;
  background-color:#181818;
  width: 30vw;
  color: #fff;
  font-family: 'Roboto'
}
`
export const FoodListWrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
  /* padding:20px 20px; */
`

export const FoodList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top:20px;
  display:flex;
  flex-direction: row;
  /* align-items: center; */
  background-color: #292B31;
  /* border-radius: 15px; */
  padding:10px 15px;
  display:flex;
  flex-direction: column;
`

export const FoodListItem = styled.li`
  /* margin-bottom: 10px; */
  font-size: 1.5rem;

`