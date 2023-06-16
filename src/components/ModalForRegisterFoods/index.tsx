import {
  Container,
  FoodListWrapper,
  ModalTopArea,
} from "./styles"
import Modal from "react-modal"
import React, { Dispatch, SetStateAction } from "react"
import { IoClose } from "react-icons/io5"
import { AiOutlineSearch } from "react-icons/ai"
import { FoodList } from "../FoodList"
export interface ImodalProps {
  modalIsOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}


export function ModalForRegisterFoods({ modalIsOpen, setIsOpen }: ImodalProps) {

  const Panel = React.forwardRef<HTMLDivElement>((props, ref) => {

    return (


      <div
        {...props}
        ref={ref}
        style={{
          background: "#000",
          width: 100,
          height: 88,
          display: "inline-block",
          overflow: "hidden"
        }}
      >
        <div>
          <p>Panel</p>
          <p>Content Content Content</p>
        </div>
      </div>
    )
  }
  )

  Panel.displayName = "Panel"



  const customStyles = {
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.8)"
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      borderRadius: "5px",
      padding: "0vh 0vw",
      transform: "translate(-50%, -50%)",
      background: "#181818",
    },
  }

  return (
    <>
      <Modal
        preventScroll={true}
        ariaHideApp={false}
        isOpen={modalIsOpen}
        // modalIsOpen={true}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container className="mostly-customized-scrollbar" >
          <ModalTopArea>
            <AiOutlineSearch />
            {/* <form> */}
            <input

              autoComplete="off"

              type="text" name="input"
              placeholder="Que tal pesquisar algum alimento"
            />
            <IoClose onClick={() => { setIsOpen(false) }} />

          </ModalTopArea>


          <FoodListWrapper>
            <h3 style={{ margin: "10px 15px" }} >Alimentos encontrados</h3>

            <FoodList />
            <FoodList />
            <FoodList />
            <FoodList />

          </FoodListWrapper>

        </Container>
      </Modal>
    </>

  )
}