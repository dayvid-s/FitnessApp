import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left:34px;
  margin-top:50px;
  div:nth-child(1){
    padding:30px 5px;
    background-color: #fff;

  }
  h4{
    margin-left:20px;
    color:#fff;
    font-size:2.5rem;
  }
  `



export const UserEditWrapper = styled.button`
  padding:10px;
  background: #1D1821;

  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-bottom-left-radius: 30px;
  border: none;

  margin-left: auto;
  margin-right:34px;
  cursor: pointer;
  p{
      color:#fff;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
  }
`



export const RemakeGoalsButton = styled.button`
  padding:10px;
  background: #1D1821;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-bottom-left-radius: 30px;
  margin-left: auto;
  margin-right:2.5rem;
  cursor: pointer;
  p{
      color:#fff;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
  }
`

export const UserObjectivesArea = styled.div`

  margin-left: auto;
  margin-right:34px;
  background-color: #fff;
  padding: 10px 60px;
  border-radius: 20px;
  p{
      color:#000;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
  }
`

