import {
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

export function HomeHeader (){
  return(
    <HeaderArea>
      <img src="https://www.svgrepo.com/show/295450/vegetables-diet.svg"
        width="30" height="30"/>
      <h3>FitnessApp</h3>
      <NavBar>
        <Link legacyBehavior  href="/home">
          <a>Visão Geral</a>
        </Link>
        <a>Dieta</a>   
        <a>Treino</a>
        <a>Hábitos saudáveis</a>
      </NavBar>
      
      <IconsArea>
        <MdOutlineNotificationsActive size={"20px"} color="#d4d4d4"/>
        
        <HiOutlineMail size={"20px"}  color="#d4d4d4" />

        <HiOutlineAdjustments size={"20px"}  color="#d4d4d4" />

      </IconsArea>
      <UserAccountArea>
        <AiOutlineUser size={"20px"} color="#d4d4d4" />
        <p>Dayvid Santos</p>
      </UserAccountArea>
    </HeaderArea>
  )
}