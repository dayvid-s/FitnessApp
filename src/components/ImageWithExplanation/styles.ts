import styled from "styled-components"
import Image from "next/image"

export const Container = styled.section`
  display: flex;
  justify-content: center;
`

export const WomanTrainningImg = styled(Image)`
  max-height: 900px;
  opacity: 0.7;
  width: 100vw;
  object-fit: cover;
`

export const AreaInsideImage = styled.div`
  position: absolute;
  top: 2000px;
  right: 10%;
  left: 2%;
  max-width: 650px;

`


export const MotivationText = styled.h1`
  color: #feefef;
  font-weight: 500;
  font-family: Graphik Trial, sans-serif;
`

export const CallActionArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  border-bottom: 2px #3fe75b solid;
  max-width: 130px;
  cursor: pointer;
  p{
  color: #3fe75b;
  font-weight: 500;
  }
`

export const InformationParagraph = styled.p`
  font-weight: 500;
  /* fontFamily: "Roboto", */
  color: #feefefca;
  margin-top: 160px;

`