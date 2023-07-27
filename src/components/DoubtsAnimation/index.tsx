import {
  Container,
  DoubtsListItem,
  DoubtsNameAndActions,
  AreaOfAnswers,
} from "./styles"
import { Animation } from "rsuite"
import React, { Dispatch, SetStateAction, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

export interface IDoubtsListProps {
  showAnimation: boolean;
  setShowAnimation: Dispatch<SetStateAction<boolean>>;
}

type Doubt = {
  id: number;
  question: string;
  answer: string;
};

interface DoubtsAnimationProps {
  doubt: Doubt;
}

export function DoubtsAnimation({ doubt }: DoubtsAnimationProps) {
  const [showAnimation, setShowAnimation] = useState(false)
  const onChange = () => setShowAnimation(!showAnimation)

  const Panel = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
      <div {...props} ref={ref}>
        <AreaOfAnswers>
          <h4 style={{ fontWeight: "400" }}>{doubt.answer} </h4>
        </AreaOfAnswers>
      </div>
    )
  })

  Panel.displayName = "Panel"

  return (
    <>
      <Container>
        <DoubtsNameAndActions onClick={onChange}>
          <DoubtsListItem>{doubt.question}</DoubtsListItem>
          {showAnimation ? (
            <MdKeyboardArrowUp onClick={onChange} />
          ) : (
            <MdKeyboardArrowDown onClick={onChange} />
          )}

          <BsThreeDotsVertical />
        </DoubtsNameAndActions>

        <Animation.Collapse in={showAnimation}>
          {(props, ref) => <Panel {...props} ref={ref} />}
        </Animation.Collapse>
      </Container>
    </>
  )
}
