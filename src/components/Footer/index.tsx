import {
  BottomOfFooter,
  Container, ProductInfoSection, ProjectInfoSection, SectionAbout, WrapperOfFooterSessions,
} from "./styles"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsTwitch } from "react-icons/bs"
import { BsDiscord } from "react-icons/bs"

export function Footer() {

  return (
    <Container>


      <WrapperOfFooterSessions>

        <ProjectInfoSection>
          <div>
            <img src="https://www.svgrepo.com/show/331727/healthy.svg"
              width="40px" height="40px" />
            <h1>FitnessApp</h1>
          </div>

          <p>O FitnessApp tem o propósito de gerenciar nutrientes e treinos, e
            melhorar a qualidade de vida do usúario.
          </p>
        </ProjectInfoSection>


        <ProductInfoSection>
          <strong>O produto</strong>
          <p>Para atletas</p>
          <p>Para nutricionistas </p>
          <p>Funcionalidades</p>
          <p>Blog</p>
        </ProductInfoSection>


        <SectionAbout>
          <strong>Sobre</strong>
          <p>Quem somos</p>
          <p>Testemunhos</p>
          <p>Evoluções</p>
          <p>Termos de uso</p>
          <p>Termos de serviço</p>
          <p>Política de cookies</p>
        </SectionAbout>


        <SectionAbout>
          <strong>Dúvidas</strong>
          <p>Chat</p>
          <p>Contato</p>
          <p>Central de ajuda</p>
        </SectionAbout>

      </WrapperOfFooterSessions>

      <BottomOfFooter>
        <p>© FitnessApp 2023. Todos os direitos reservados.</p>


        <AiOutlineTwitter></AiOutlineTwitter>
        <AiFillLinkedin></AiFillLinkedin>
        <BsFacebook></BsFacebook>
        <AiOutlineInstagram></AiOutlineInstagram>
        <BsTwitch></BsTwitch>
        <BsDiscord></BsDiscord>

      </BottomOfFooter>
    </Container>
  )
}