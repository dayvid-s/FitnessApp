import styled from "styled-components"
import Image from "next/image"


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left:2.5rem;
  margin-top:50px;

  
  `
export const TrainningArea= styled.div`
  h3{
    color:#fff;
    font-size:1.5rem;
  }
  
  `
export const ImageArea = styled.div`

  display: flex;
  flex-direction: column;
  margin-top:20px;
  background-color: #661A95;
  width: 300px;
  height:250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p{
    font-size: 1rem;
    color:#fff;
    font-weight:500;
    margin-right: auto;
    margin-left:10px;
  }
`
export const CbumImage = styled(Image)`
  width: 400px;
  height: 200px;
  margin-top: -20px;

`

