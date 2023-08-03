import {
  AreaInsideImage,
  CallActionArea,
  Container,
  InformationParagraph,
  MotivationText,
  WomanTrainningImg,
}
  from "./styles"
import PeopleTrainning from "../../assets/bruce-mars-gJtDg6WfMlQ-unsplash.jpg"
import {FiArrowRight} from "react-icons/fi"
import React from "react"

export function ImageWithExplanation() {
  return (
    <Container data-aos="fade-up" >
      <WomanTrainningImg
        placeholder="blur"
        quality={100}
        src={PeopleTrainning} alt={"Logo"} />
      
      <AreaInsideImage>

        <MotivationText>Seja livre, seja ativo, seja saudável.</MotivationText>

        <CallActionArea>
          <p>Junte-se a nós</p>
          <FiArrowRight color="#3fe75b" height={30} width={30} />
        </CallActionArea>

        <InformationParagraph>Com treinos personalizados, planos de dieta equilibrados
          <br /> e acompanhamento em tempo real, você estará mais perto
          <br /> de se tornar  a melhor versão de si mesmo!
        </InformationParagraph>
        
      </AreaInsideImage>
    
    
    </Container>
  )
}
