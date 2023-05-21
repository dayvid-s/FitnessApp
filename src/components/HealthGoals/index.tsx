import ProgressBar from "@ramonak/react-progress-bar"
import {
  Container,
} from "./styles"

export function HealthGoals() {

  return (
    <Container>
      <ProgressBar
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
    </Container>
  )
}