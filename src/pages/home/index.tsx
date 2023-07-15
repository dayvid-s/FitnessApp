import { GlobalHeader } from "@component/components/GlobalHeader"
import {
  Container
} from "./styles"
import { Introduction } from "@component/components/Introduction"
import { MotivationToUse } from "@component/components/MotivationToUse"
export default function Home() {
  return (
    <Container>
      <GlobalHeader />
      <Introduction/>
      <MotivationToUse/>
      

      {/* Area que vai ter as 3 motivações do aplicativo( texto salvo no notepad) */}
    
    
      

      {/* Area explicando o funcionamento dos treinos */}
    
    
      
      {/*Area com imagem e palavra no fundo   */}



      {/* Area de duvidas, use lib rsuite */}
    
      
    </Container>

  )
}