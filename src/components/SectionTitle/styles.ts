import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left:2.5rem;
  margin-top:50px;
  margin-bottom:-30px;
  div:nth-child(1){
    padding:30px 5px;
    background-color: #fff;

  }
  h3{
    margin-left:20px;
    color:#fff;
    font-size:1.5rem;
  }
  `



export const UserEditWrapper = styled.div`
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