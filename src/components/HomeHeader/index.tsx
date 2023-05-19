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
      <img src="https://www.svgrepo.com/show/331727/healthy.svg"
        width="40px" height="40px"/>
      <h3>FitnessApp</h3>
      <NavBar>
        <a>Visão Geral</a>
        <a>Dieta</a>   
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
  )
}