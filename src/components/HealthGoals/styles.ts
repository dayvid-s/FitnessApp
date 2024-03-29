import styled from "styled-components"

export const Container = styled.div`
  background-color: #CACBFD;
  border-radius: 20px;
  height:255px;
  width:425px;
  margin-left:34px;
  margin-top: 41px;
  `

export const TitleArea = styled.div`
  display: flex;
  padding: 15px 20px 100px ;
  h2:nth-child(-n+2){
     /*Represents the first two elements */
    font-family: Montserrat;
    color: #000;
    font-size: 2rem;
  }
  h2:nth-child(2){
    margin-left: auto;
  }
  span{
    color: #000;
    /* font-size: 2rem; */
  }
  svg{

  }

`
export const ProgressBarArea = styled.div`
  display: flex;
  flex-direction: row;


  div:nth-child(n+2) {
    margin-left:-100px;
  }
  .wrapper {
    height: 30px;
    width: 140px;
      /* border: 3px solid blue; */
    border-radius:30px;
  }

  .container {
    transform: rotate(270deg);
      background-color: #2B2A33;
      border-radius:30px;
  }

  .barCompleted {
      border-radius:30px;
      /* background-color: #683FDC; */
      background: linear-gradient(04deg, #683FDC 100%,#8E7BFB 0%);

      width: 80%;
  }

  .label {
    margin-right:5px;
    font-size: 20px;
    font-family: 'Roboto';
    color: #fff;
}
`
