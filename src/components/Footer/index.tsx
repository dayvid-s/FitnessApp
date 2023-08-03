import {
  BottomOfFooter,
  Container,
  ProductInfoSection,
  ProjectInfoSection,
  SectionAbout,
  WrapperOfFooterSessions,
  DoubtSession
} from "./styles"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsTwitch } from "react-icons/bs"
import { BsDiscord } from "react-icons/bs"
import Logo from "../../assets/Logo.png"
import Image from "next/image"

export function Footer() {

  return (
    <Container>


      <WrapperOfFooterSessions>

        <ProjectInfoSection>
          <div>
            <Image src={Logo} alt={"Crepioca"}
              width={50} height={50} />
            <h2>FitnessApp</h2>
          </div>

          <p>O FitnessApp tem o propósito de gerenciar nutrientes e treinos, e
            melhorar a qualidade de vida do usúario.
          </p>

          <BottomOfFooter>


            <AiOutlineTwitter></AiOutlineTwitter>
            <AiFillLinkedin></AiFillLinkedin>
            <BsFacebook></BsFacebook>
            <AiOutlineInstagram></AiOutlineInstagram>
            <BsTwitch></BsTwitch>
            <BsDiscord></BsDiscord>

          </BottomOfFooter>
          <p>© FitnessApp 2023.<br/> Todos os direitos reservados.</p>
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


        <DoubtSession>
          <strong>Dúvidas</strong>
          <p>Chat</p>
          <p>Contato</p>
          <p>Central de ajuda</p>
        </DoubtSession>

      </WrapperOfFooterSessions>
    </Container>
  )
}