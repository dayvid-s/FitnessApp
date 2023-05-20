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
        // baseBgColor
        completed={80}
        className="wrapper"
        barContainerClassName="container"
        completedClassName="barCompleted"
        labelClassName={"label"}
      />
      <ProgressBar
        maxCompleted={8}

        completed={80}
        className="wrapper"
        barContainerClassName="container"
        completedClassName="barCompleted"
        labelClassName={"label"}
      />
      <ProgressBar
        maxCompleted={8}

        completed={80}
        className="wrapper"
        barContainerClassName="container"
        completedClassName="barCompleted"
        labelClassName={"label"}
      />
      <ProgressBar
        maxCompleted={8}

        completed={80}
        className="wrapper"
        barContainerClassName="container"
        completedClassName="barCompleted"
        labelClassName={"label"}
      />
      <ProgressBar
        maxCompleted={8}

        completed={80}
        className="wrapper"
        barContainerClassName="container"
        completedClassName="barCompleted"
        labelClassName={"label"}
      />
      <ProgressBar

        completed={80}
        maxCompleted={8}
        className="wrapper"
        barContainerClassName="container"
        completedClassName="barCompleted"
        labelClassName={"label"}
      />
    </Container>
  )
}