import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 50px 5vw ;
  flex-wrap: wrap;
  gap:30px;
`

export const MotivationArea = styled.div`
  background-color: #0e0e1d;
  padding: 20px;
  width: 80vh;
  height: 300px;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #1d1d3d;
  }
  svg{
  color:#aeaeb3;
  width:30px;
  height:30px;
  opacity: 0.9;
}
`
export const MotivationTitleText = styled.h1`
  margin-top: 30px;
`


export const DescriptionText = styled.p`
  margin-top: 30px;
`
export const StartToUseArea = styled.div`
  p{
    margin-top: 30px;
    font-size: 1.5rem;
    color: #ffffffd6;
  }
`

