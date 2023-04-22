import {
  HeaderArea,
  IconsArea,
  NavBar,
  UserAccountArea
} from "./styles"

export function HomeHeader (){
  return(
    <HeaderArea>
      <img src="https://www.svgrepo.com/show/295450/vegetables-diet.svg"
        width="30" height="30"/>
      <h3>FitnessApp</h3>
      <NavBar>
        <a>Seus macronutrientes</a>
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

        <img src="https://www.svgrepo.com/show/513797/user-down.svg" alt="" 
          width="30" height="20"
        />
      </IconsArea>
      <UserAccountArea>
        <p>eae</p>
        <p>ss</p>
      </UserAccountArea>
    </HeaderArea>
  )
}