import { GlobalHeader } from "@component/components/GlobalHeader"
import {
  Container
} from "./styles"
import { RecommendedActivities } from "@component/components/RecommendedActivities"

export default function Home() {
  return (
    <Container>
      <GlobalHeader />

      <div data-aos="fade-right" >
        <RecommendedActivities />
      </div>
    </Container>

  )
}