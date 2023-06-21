// TODO : DEIXAR CORES DO TEXTO GRANDE COLORIDAS

import { GlobalHeader } from "@component/components/GlobalHeader"
import {
  Container
} from "./styles"
import { RecommendedActivities } from "@component/components/RecommendedActivities"
import FemaleGirl from "../../assets/black-flemale-removebg-preview.png"
import Image from "next/image"
export default function Home() {
  return (
    <Container>
      <GlobalHeader />
      <div style={{display:"flex", flexDirection:"row",    marginLeft: "2.5rem", marginTop:"50px"}}>

        <div style={{ display: "flex", flexDirection:"column", alignItems: "center", marginTop:"30px", justifyContent:"center"   }} data-aos="fade-up" >
          <h1 style={{ color: "#fff", fontSize: "4rem", maxWidth: "800px" }} >Uma nova forma de cuidar da sua sáude</h1>
          {/* cores coloridas aqui com duas opções de botão. */}
          {/* botões salvos com nome what a beauty, com uma sombra rosa bem grande em um */}
          <p style={{ width: "500px" }}>Tenha controle total da sua dieta, acompanhe seus objetivos de saúde, 
          e se inspire nos treinos apresentados!
          </p>
        </div>
        {/* <Image wid style={{width:"300px", height:"300px"}}  src={FemaleGirl}></Image> */}
    
        <Image style={{marginLeft:"300px"}} src={FemaleGirl} width={400} height={300} alt="Emoji feliz" />
      </div>

      

      {/* Area que vai ter as 3 motivações do aplicativo( texto salvo no notepad) */}
    
    
      

      {/* Area explicando o funcionamento dos treinos */}
    
    
      
      {/*Area com imagem e palavra no fundo   */}



      {/* Area de duvidas, use lib rsuite */}
    
    
      
    </Container>

  )
}