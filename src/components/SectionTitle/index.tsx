import {
  Container,
  UserEditWrapper, 
  UserObjectivesArea
} from "./styles"


interface sectionTitleProps {
  title: string,
  button?: "RemakeGoals"| "Objective" ,
}

export function SectionTitle( {title, button}: sectionTitleProps) {

  return (
    <Container>
      <div/>
      <h4>{title}</h4>

      {button == "RemakeGoals" &&  
      <UserEditWrapper>
        <p>Refazer metas</p> 
      </UserEditWrapper> } 
      
      
      {button == "Objective" &&  
        <>
          <UserObjectivesArea>
            <p>Objetivo : Alcançar 58 Kilos</p> 
          </UserObjectivesArea>
        </>
      } 


    </Container>
  )
}