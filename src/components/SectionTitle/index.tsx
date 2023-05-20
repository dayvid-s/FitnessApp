import {
  Container,
  UserEditWrapper 
} from "./styles"

interface sectionTitleProps {
  title: string,
}

export function SectionTitle( {title}: sectionTitleProps) {

  return (
    <Container>
      <div/>
      <h3>{title}</h3>
      <UserEditWrapper>
        <p>Refazer metas</p>
      </UserEditWrapper>

    </Container>
  )
}