import styled from "styled-components"

export const Container = styled.div`
  width: 70vw;
  height: 85vh;
  background: rgb(173,63,251);
  background: linear-gradient(170deg, #181818 10%, rgba(10,10,10,5) 100%);
  background:#101010;

  overflow-y: scroll;
  &::-webkit-scrollbar {
  width: 10px;

  background-color: #101010; 
}

/* Add a thumb */
&::-webkit-scrollbar-thumb {
  background: darkgrey;
}
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
  background-color:transparent;
  width: 30vw;
  color: #fff;
  font-family: 'Roboto'
}
`

export const FoodListWrapper = styled.div`
  `


export const FoodList = styled.ul`
  margin-bottom:30px;
  list-style: none;
  margin-top:20px;
  display:flex;
  /* align-items: center; */
  background-color: #131313;
  /* border-radius: 15px; */
  padding:10px 15px;
  display:flex;
  flex-direction: column;
  height:370px;
`

export const FoodListItem = styled.li`
  font-size: 1.5rem;

  `