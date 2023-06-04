// TODO: UI LIKE A TODO LIST // MODERN TODO LIST UI 
import {
  Container, 
  FoodList, 
  FoodListItem, 
  FoodListWrapper,
  ModalTopArea,
} from "./styles"
import Modal from "react-modal"
import React, { Dispatch, SetStateAction, useState } from "react"
import {IoClose} from "react-icons/io5"
import {AiOutlineSearch} from "react-icons/ai"
import {BsThreeDotsVertical} from "react-icons/bs"
export interface ImodalProps {
  modalIsOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}


export function ModalForRegisterFoods({modalIsOpen, setIsOpen  } : ImodalProps) {
  const arrayMockup ={
    "name": "Lasanha",
    "calories": 340,
    "proteins": 16.5,
    "carbs": 34.2,
    "totalFats": 14.8,
    "saturatedFats": 8.6,
    "polyUnsaturatedFats": 1.4,
    "sodium": 550,
    "dietFiber": 1.8  }

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
      

      // marginRight: "-50%",

    },
  }


  function toogleModal(modal: boolean ) {
    setIsOpen((prevState) => !prevState)

  }




  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // modalIsOpen={true}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container>
          <ModalTopArea>
            <AiOutlineSearch/>
            {/* <form> */}
            <input
              type="text" name="input" 
              placeholder="Que tal pesquisar algum alimento" 
            />
            <IoClose onClick={()=>{setIsOpen(false)}} />

          </ModalTopArea>

          <FoodListWrapper>
            <h3  >Alimentos encontrados</h3>
            <FoodList>
              <div style={{display :"flex", flexDirection:"row", justifyContent: "space-between" }} >
                <FoodListItem>Arroz integral</FoodListItem>

                <BsThreeDotsVertical style={{
                  color: "#606060",
                  width:"25px",
                  height:"25px",
                  opacity: "0.9",
                  cursor:"pointer",}} />
              </div>

              <div style={{display:"flex",
                height:"150px", flexFlow: "columnWrap"}} >
              
                <div style={{marginTop:"10px",borderLeft: "5px blue solid", height:"30px",width:"80px", display: "flex", 
                  flexDirection:"row",alignItems: "center", justifyContent:"space-between"
                }}>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >Carboidratos </p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >213.9g</p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >5%</p>
                  
                </div>
                <div style={{marginTop:"10px",borderLeft: "5px blue solid", height:"30px",width:"80px", display: "flex", 
                  flexDirection:"row",alignItems: "center", justifyContent:"space-between"
                }}>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >Carboidratos </p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >213.9g</p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >5%</p>
                  
                </div>
                <div style={{marginTop:"10px",borderLeft: "5px blue solid", height:"30px",width:"80px", display: "flex", 
                  flexDirection:"row",alignItems: "center", justifyContent:"space-between"
                }}>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >Carboidratos </p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >213.9g</p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >5%</p>
                  
                </div>
                <div style={{marginTop:"10px",borderLeft: "5px blue solid", height:"30px",width:"80px", display: "flex", 
                  flexDirection:"row",alignItems: "center", justifyContent:"space-between"
                }}>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >Carboidratos </p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >213.9g</p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >5%</p>
                  
                </div>
                <div style={{marginTop:"10px",borderLeft: "5px blue solid", height:"30px",width:"80px", display: "flex", 
                  flexDirection:"row",alignItems: "center", justifyContent:"space-between"
                }}>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >Carboidratos </p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >213.9g</p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >5%</p>
                  
                </div>
              </div>
            </FoodList>
          </FoodListWrapper>

        </Container>
      </Modal>
    </>

  )
}