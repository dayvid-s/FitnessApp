import ProgressBar from "@ramonak/react-progress-bar"
import {
  Container, ProgressBarArea, TitleArea,
} from "./styles"
import Image from "next/image"
import HappyEmogi from "/src/assets/emojihappyjfif-removebg-preview.png"
import NeutralEmogi from "/src/assets/emojiNeutral-removebg-preview.png"
import AngryEmogi from "/src/assets/emojiNeutral-removebg-preview.png"
export function HealthGoals() {

  return (
    <Container>
      <TitleArea>
        <h2>Tempo de sono</h2>
        <h2>6.4 <span>horas</span> </h2>
        {/* <Image src={AngryEmogi} width={35} height={32} alt="Emoji feliz"/> */}
        
      </TitleArea>
      
      <ProgressBarArea>

        <ProgressBar
          transitionDuration="3"
          // completedClassName="barCompleted"
          maxCompleted={8}
          completed='5'
          className="wrapper"
          barContainerClassName="container"
          labelClassName={"label"}
        />
        <ProgressBar
          maxCompleted={8}
          completed='2'
          className="wrapper"
          barContainerClassName="container"
          labelClassName={"label"}
        />

        <ProgressBar
          maxCompleted={8}
          completed='7'
          className="wrapper"
          barContainerClassName="container"
          labelClassName={"label"}
        />

        <ProgressBar
          maxCompleted={8}
          completed='9'
          className="wrapper"
          barContainerClassName="container"
          labelClassName={"label"}
        />

        <ProgressBar
          maxCompleted={8}
          completed='9'
          className="wrapper"
          barContainerClassName="container"
          labelClassName={"label"}
        />

        <ProgressBar
          maxCompleted={8}
          completed='8'
          className="wrapper"
          barContainerClassName="container"
          labelClassName={"label"}
        />

        <ProgressBar
          maxCompleted={8}
          completed='9'
          className="wrapper"
          barContainerClassName="container"
          labelClassName={"label"}

        />
      </ProgressBarArea>
    </Container>
  )
}