import styled from "styled-components"

export const Container = styled.div`
  background-color: #CACBFD;
  border-radius: 20px;
  height:15rem;
  width:30rem;
  margin-left:2.5rem;
  margin-top: 3rem;
  `

export const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px 100px ;
  h2:nth-child(-n+2){
    font-family: Montserrat;
    color: #000;
    font-size: 1.2rem;
  }
  span{
    color: #000;
    font-size: 1rem;

    /* white-space: normal; */
    
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
      background-color: #683FDC;
      width: 80%;
  }

  .label {
    margin-right:5px;
    font-size: 20px;
    font-family: 'Roboto';
    color: #fff;
}
`
