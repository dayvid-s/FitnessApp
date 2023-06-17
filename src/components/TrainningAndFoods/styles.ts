import styled from "styled-components"
import Image from "next/image"


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  margin-left:2.5rem;
  margin-top:50px;

  
  `



export const TrainningArea = styled.div`
  h3{
    color:#fff;
    font-size:1.5rem;
    margin-left:20px;
  }
  
  `

export const TrainningTitleWrapper = styled.div`
  display: flex;
  flex-direction : row;
  border-left: 10px #fff solid;
  align-items: center;
  height:60px;
  `
export const ImageArea = styled.div`

  display: flex;
  flex-direction: column;
  margin-top:20px;
  background-color: #FFF3CA;
  width: 300px;
  height:250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p{
    font-size: 1rem;
    color:#000;
    font-weight:600;
    margin-right: auto;
    margin-left:10px;
  }
`
export const CbumImage = styled(Image)`
  width: 400px;
  height: 200px;
  margin-top: -20px;

`


export const FoodsArea = styled.div`
    margin-top: 14px; 
    margin-left: auto;
    margin: 14px 50px 0px auto;
    h3{
      color:#fff;
      font-size:1.5rem;
    }
    `

export const FoodList = styled.div`
  display: flex;
  flex-direction: row;
  div:nth-child(1){
    background-color: #CCFFA3;
  }
  div:nth-child(3){
    background-color: #FDDCE0;
  }
  `
export const FoodsWrapper = styled.div`
  margin-right: 20px;
  margin-top:35px;
  padding: 5px 0px 0px 20px;
  width:260px;
  height: 250px;
  background-color: #BAEEC4;
  border-radius: 10px;
  

  h1{
    margin-top: 10px;
    color: #000;
     /* margin-left: 10px; */
     font-size:1.2rem;
     /* justify-self: center; */
     
    }
    div{
      margin-top: 10px;

      display: flex;
      flex-direction: row;
      align-items: center;
      /* margin-left: 10px; */
    /* margin-: 10px; */
  }
  p{
    max-width: 300px;
    color: #202020;
    font-weight: 600;
    /* font-family: montserrat */
    /* font-family: 'Neue Haas Grotesk Text Pro', sans-serif; */


  }
`