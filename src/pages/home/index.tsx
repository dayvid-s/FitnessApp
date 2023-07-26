import { GlobalHeader } from "@component/components/GlobalHeader"
import {
  Container
} from "./styles"
import { Introduction } from "@component/components/Introduction"
import { MotivationToUse } from "@component/components/MotivationToUse"
import { ImageWithExplanation } from "@component/components/ImageWithExplanation"
import { Footer } from "@component/components/Footer"
import { Doubts } from "@component/components/Doubts"
export default function Home() {
  return (
    <Container>
      <GlobalHeader />
      <Introduction/>
      <MotivationToUse/>
      

    
    
      

      {/* Area explicando o funcionamento dos treinos */}
    
    
      
      <ImageWithExplanation/>


      {/* Area de duvidas, use lib rsuite */} 
      <Doubts/>
      {/* terá componentes brancos/ divididos com esccuros.    */}


      <Footer/>
    </Container>

  )
}