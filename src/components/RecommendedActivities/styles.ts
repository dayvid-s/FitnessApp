import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px 2.5rem 10px; 
  flex-wrap: wrap;
  justify-content: space-between;
`

export const RecommendedActivityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: #00BCF2 6px solid;
  background: linear-gradient(270deg, #020210 0%,#6A1B9A 100%);
  height: 60px;
  width:600px;
  margin-bottom: 20px;
  svg{
    width:30px;
    height:30px;
    color:#fff;
    margin-left:10px;
  }
  p{
    margin-left:10px;
    color:#fff;
    /* font-weight: 500; */
  }
`


