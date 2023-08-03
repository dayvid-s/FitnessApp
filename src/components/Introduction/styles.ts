import styled from "styled-components"
import Image from "next/image"
import { BiChevronRight } from "react-icons/bi"

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 42.5px; 
  margin-top: 50px; 
  width: 100%;
  max-width: 1120px; 
  margin: 50px auto; 
`

export const IntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const IntroductionTitle = styled.h1`
  font-size: 6.8rem; 
  color: #fff;
  margin-top: 20px; 
  strong {
    font-size: 6.8rem; 
    max-width: 800px; 
    color: transparent;
    display: inline-block;
    text-align: center;
    background-image: linear-gradient(to left, #00ee28, #ccffa3);
    background-clip: text;
    -webkit-background-clip: text;
  }
`

export const IntroductionParagraph = styled.p`
  width: 500px; 
`

export const IntroductionButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px; 
`

export const CreateAccountButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 40px; 
  border: none;
  margin-top: 10px; 
  background-color: #82ffac;
  background-image: linear-gradient(to right, #00ee28, #82ffac);
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 90px 2px rgba(65, 156, 96, 1);
  -moz-box-shadow: 0px 0px 90px 2px rgba(65, 156, 96, 1);
  box-shadow: 0px 0px 90px 2px rgba(65, 156, 96, 1);

  h4 {
    font-family: Montserrat;
    color: #000;
    display: flex;
  }
`

export const ChevronRightIcon = styled(BiChevronRight)`
  width:30px; 
  height: 30px;
`

export const HowItWorksButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 40px;  
  background-color: transparent;
  margin-top: 10px; 
  margin-left: 10px; 
  h4 {
    font-family: Montserrat;
    color: #fff;
    display: flex;
  }
`

export const WomanImage = styled(Image)`
  border-top-right-radius: 100px; 
  border-top-left-radius: 100px; 
  max-width: 400px; 
  margin-left: 50px; 
  background-image: linear-gradient(#82ffac, #020210);
`
