import {
  Container,
  HeaderArea,
  IconsArea,
  NavBar,
  UserAccountArea
} from "./styles"
import Link from "next/link"
import {MdOutlineNotificationsActive} from "react-icons/md"
import {HiOutlineMail} from "react-icons/hi"
import {HiOutlineAdjustments} from "react-icons/hi"
import {AiOutlineUser} from "react-icons/ai"
import Image from "next/image"
import Logo from "../../assets/Logo.png"
export function GlobalHeader (){
  return(
    <Container>
      <HeaderArea>

        <Image src={Logo} alt={"Logo"}
          width={50} height={50} />
        <h3>FitnessApp</h3>
        <NavBar>
          <Link legacyBehavior  href="/">
            <a>Home</a>
          </Link>
          <Link legacyBehavior  href="/overview">
            <a>Visão Geral</a>
          </Link>
          <Link legacyBehavior  href="/workouts">
            <a>Treino</a>
          </Link>
          <a>Hábitos saudáveis</a>
        </NavBar>
      
        <IconsArea>
          <MdOutlineNotificationsActive size={"20px"} color="#F7F7F7"/>
        
          <HiOutlineMail size={"20px"}  color="#F7F7F7" />

          <HiOutlineAdjustments size={"20px"}  color="#F7F7F7" />

        </IconsArea>
        <UserAccountArea>
          <AiOutlineUser size={"20px"} color="#F7F7F7" />
          <p>Dayvid Santos</p>
        </UserAccountArea>
      </HeaderArea>
    </Container>
  )
}