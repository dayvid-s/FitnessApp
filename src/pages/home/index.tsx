import { GlobalHeader } from "@component/components/GlobalHeader"
import {
  Container
} from "./styles"
import { Introduction } from "@component/components/Introduction"
import { MotivationToUse } from "@component/components/MotivationToUse"
import { ImageWithExplanation } from "@component/components/ImageWithExplanation"
import { Footer } from "@component/components/Footer"
import { ReadyToUse } from "@component/components/ReadyToUse"
import { Doubts } from "@component/components/Doubts"
export default function Home() {
  return (
    <Container>
      <GlobalHeader />
      <Introduction/>
      <MotivationToUse/>
      <ImageWithExplanation/>
      <ReadyToUse/>
      <Doubts/>
      <Footer/>
    </Container>

  )
}