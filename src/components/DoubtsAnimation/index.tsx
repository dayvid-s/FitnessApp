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
  animation: string;
}

export function DoubtsAnimation({ doubt, animation }: DoubtsAnimationProps) {
  const [showAnimation, setShowAnimation] = useState(false)
  const onChange = () => setShowAnimation(!showAnimation)

  const Panel = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
      <div {...props} ref={ref}>
        <AreaOfAnswers>
          <p >{doubt.answer} </p>
        </AreaOfAnswers>
      </div>
    )
  })

  Panel.displayName = "Panel"

  return (
    <>
      <Container data-aos= {animation} >
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
