import {
  Container,
  TitleArea,
  DateWrapper,
  PageInfoWrapper,
  WelcomeWrapper
} from "./styles"


export function Welcome (){
  
  const dateOfToday= (new Date().toLocaleDateString([],
    {weekday: "long", year: "numeric", month: "long", day: "numeric"}))

  const dateCapitalized = dateOfToday.charAt(0).toUpperCase() + dateOfToday.slice(1).replace(".","")

  return(
    <Container>
      <PageInfoWrapper>

        <TitleArea>
          <a>Visão Geral / <strong>Dieta</strong></a> 
        </TitleArea>
      
        <DateWrapper>
          <p>{dateCapitalized}</p>
        </DateWrapper>
      </PageInfoWrapper>
      <WelcomeWrapper>

        <h1>Seja bem vindo, <strong>Dayvid.</strong></h1>
        <p>Abaixo você verá os seus valores dos macronutrientes atuais.</p>
      </WelcomeWrapper>
    </Container>
  )
}