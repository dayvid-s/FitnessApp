import { GlobalHeader } from "@component/components/GlobalHeader"
import { Introduction } from "@component/components/Introduction"
import { MotivationToUse } from "@component/components/MotivationToUse"
import { ImageWithExplanation } from "@component/components/ImageWithExplanation"
import { Footer } from "@component/components/Footer"
import { ReadyToUse } from "@component/components/ReadyToUse"
import { Doubts } from "@component/components/Doubts"
export default function Home() {
  return (
    <>
      <GlobalHeader />
      <Introduction/>
      <MotivationToUse/>
      {/* <ImageWithExplanation/> */}
      <ReadyToUse/>
      <Doubts/>
      <Footer/>
    </>

  )
}