import { User } from "@component/assets"
import {
  HeaderArea,
  IconsArea,
  NavBar,
  UserAccountArea
} from "./styles"
 
import Link from "next/link"

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

        <img src="https://www.svgrepo.com/show/473975/notification-bell-new.svg"
          width="30" height="20"  />
        <img src="https://www.svgrepo.com/show/489456/email.svg" alt=""
          width="30" height="20"
        />
        <img src="https://www.svgrepo.com/show/425650/configuration-vertical-options.svg"
          width="30" height="20"
          alt="" />

        <svg media="../usersv.svg"  
          width="30" height="20"
        />
      </IconsArea>
      <User  ></User>
      <UserAccountArea>
        <p>Dayvid Santos</p>
      </UserAccountArea>
    </HeaderArea>
  )
}