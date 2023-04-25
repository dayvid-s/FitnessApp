import {
  Container,
  TitleArea,
  DateWrapper
} from "./styles"


export function Welcome (){
  
  
  const dateOfToday= (new Date().toLocaleDateString([],{weekday: "long", year: "numeric", month: "long", day: "numeric"}))

  return(
    <Container>
      <TitleArea>
        <a>Visão Geral / <strong>Dieta</strong></a> 
      </TitleArea>
      
      <DateWrapper>
        <p>{dateOfToday.replace(".","")}</p>
      </DateWrapper>
    </Container>
  )
}