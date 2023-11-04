import {
  Container,
  CreateAccountButton,
  HowItWorksButton,
  IntroductionButtonArea,
  IntroductionParagraph,
  IntroductionSection,
  ChevronRightIcon,
  IntroductionTitle,
  WomanImage,
}
  from "./styles"
  
import React from "react"
import FemaleGirl from "../../assets/bela-jovem-comendo-salada-sobre-fundo-preto_1301-7563-removebg-preview.png"

export function Introduction() {
  return (
    <Container  >
      {/* <Container data-aos="fade-up" > */}
      <IntroductionSection>
        <IntroductionTitle>
          Uma nova forma de<br/> cuidar <strong>da sua sáude</strong>
        </IntroductionTitle>
        <IntroductionParagraph>Tenha controle total da sua dieta, acompanhe seus objetivos de saúde, 
          e se inspire nos treinos apresentados!</IntroductionParagraph>

      
        <IntroductionButtonArea>

          <CreateAccountButton>
            <h4>Criar minha conta</h4>
            <ChevronRightIcon color="#000" />
          </CreateAccountButton>
        
          <HowItWorksButton>
            <h4>Como funciona</h4>
            <ChevronRightIcon color="#fff" />
          </HowItWorksButton>

        </IntroductionButtonArea>
      </IntroductionSection>



      <WomanImage  src={FemaleGirl} alt="Mulher comendo" />
    
    
    </Container>
  )
}
