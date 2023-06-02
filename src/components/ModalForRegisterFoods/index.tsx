import {
  Container,
} from "./styles"
import Modal from "react-modal"
import React, { Dispatch, SetStateAction, useState } from "react"

export interface ImodalProps {
  modalIsOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}


export function ModalForRegisterFoods({modalIsOpen, setIsOpen  } : ImodalProps) {
  let subtitle

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.7)"
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      padding: "20vh 20vw",


      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#181818"

    },
  }


  function toogleModal(modal: boolean ) {
    modal == true? setIsOpen(false): setIsOpen(true)
  }


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00"
  }


  return (
    <Container>
      <Modal
       isOpen={modalIsOpen}
        // modalIsOpen={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        {/* <button onClick={()=>{toogleModal(modalIsOpen)}}>close</button> */}
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>


    </Container>
  )
}