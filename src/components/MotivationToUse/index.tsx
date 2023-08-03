import {
  Container,
  DescriptionText,
  MotivationArea,
  MotivationTitleText,
}
  from "./styles"
import {IoIosFitness} from "react-icons/io"
import {FcTodoList} from "react-icons/fc"
import {GiHealthNormal  } from "react-icons/gi"
import {GiNotebook  } from "react-icons/gi"
import { discoverAnimation } from "@component/utils/DiscoverAnimation"
  
import React from "react"
import { IconType } from "react-icons/lib"

type Motivation = {
  id: number;
  icon: IconType;
  MotivationTitle: string;
  MotivationDescription: string;
}


export function MotivationToUse() {
  const ArrayOfMotivations : Motivation[] = [
    {
      id: 1,
      icon:GiNotebook,
      MotivationTitle: "Conheça sua ingestão diária",
      MotivationDescription: "Conheça os nutrientes que você consome diariamente para tomar decisões informadas sobre sua dieta e saúde."
    },
    {
      id:2,
      icon: GiHealthNormal,
      MotivationTitle: "Gerenciamento de sua saúde:",
      MotivationDescription: " Registre suas refeições e monitore a ingestão de nutrientes essenciais para promover uma alimentação balanceada e saúde geral."
    },
    {
      id: 3,
      icon: FcTodoList,
      MotivationTitle: "Concretize suas metas fitness",
      MotivationDescription: " Crie planos alimentares personalizados e otimize a nutrição para progredir nos treinos,na perda de peso ou ganho de massa muscular."
    },
    {
      id: 4,
      icon: IoIosFitness,
      MotivationTitle: "Treine de acordo com você",
      MotivationDescription: " O Fitnessp App oferece treinos personalizados, permitindo que você se exercite de acordo com suas necessidades e objetivos, promovendo o progresso e a saúde física."
    }
  ]


  return (
    <Container  >
      <h3>Transforme sua jornada fitness com nossa plataforma completa de nutrição e exercícios.</h3>

      {ArrayOfMotivations.map((Motivation, index) => {
        return (
          <MotivationArea data-aos={discoverAnimation(index)} key={Motivation.id}>

            {React.createElement(Motivation.icon)}
            <MotivationTitleText>{Motivation.MotivationTitle}</MotivationTitleText>
            <DescriptionText>{Motivation.MotivationDescription}</DescriptionText>
            
            {/* <StartToUseArea>
              <p>Começar a usar</p>
              <FiChevronRight/>
            </StartToUseArea> */}
          </MotivationArea>
            
        )
      })}
      
              
    </Container>
  )
}
