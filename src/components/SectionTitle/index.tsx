import {
  Container,
  UserEditWrapper, 
  UserObjectivesArea
} from "./styles"


interface sectionTitleProps {
  title: string,
  button: "RemakeGoals"| "Objective" ,
}

export function SectionTitle( {title, button}: sectionTitleProps) {

  return (
    <Container>
      <div/>
      <h3>{title}</h3>

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