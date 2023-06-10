// TODO: adicionar recolher e abrir conteudo do alimento encontrado.
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
        preventScroll={true}
        ariaHideApp={false}
        isOpen={modalIsOpen}
        // modalIsOpen={true}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container className="mostly-customized-scrollbar" >
          <ModalTopArea>
            <AiOutlineSearch/>
            {/* <form> */}
            <input
              
              autoComplete="off"
              
              type="text" name="input" 
              placeholder="Que tal pesquisar algum alimento" 
            />
            <IoClose onClick={()=>{setIsOpen(false)}} />

          </ModalTopArea>


          <FoodListWrapper>
            <h3 style={{margin: "10px 15px"}} >Alimentos encontrados</h3>

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
                height:"150px", flexFlow: "column wrap"}} >
              
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
                <div style={{marginTop:"10px",borderLeft: "5px blue solid", height:"30px",width:"80px", display: "flex", 
                  flexDirection:"row",alignItems: "center", justifyContent:"space-between"
                }}>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >Carboidratos </p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >213.9g</p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >5%</p>
                  
                </div>

                  
              </div>
              <div style={{marginTop:"50px", height:"30px", display: "flex", 
                flexDirection:"row",alignItems: "center", 
              }}>
                <p style={{fontFamily:"Montserrat",color: "#fff",fontSize:"0.85rem",width:"400px"}} >
                A porcentagem (%), ao lado da quantidade em gramas, mostra quanto de um nutriente específico você estará 
                consumindo em relação à quantidade recomendada para o dia.
                </p>
                <div style={{marginLeft:"120px",width: "250px"}} >
                  <p style={{fontFamily:"Montserrat",marginTop:"10px",marginLeft:"10px",color: "#fff",fontSize:"0.80rem"}} >Quantidade</p>
                  <input defaultValue={0}	 type="number" style={{padding:"10px 20px",color:"#fff",marginTop:"5px", backgroundColor:"#000",borderRadius:"10px"}}>
                  </input>
                  <p style={{fontFamily:"Montserrat",marginTop:"10px",marginLeft:"10px",color: "#fff",fontSize:"0.80rem"}} >Peso em gramas</p>
                  <input defaultValue={0} type="number"  style={{padding:"10px 20px",color:"#fff",marginTop:"5px", backgroundColor:"#000",borderRadius:"10px"}}>
                    {/* must have a hover that change the border color to blue and also when is writing */}
                  </input>
                  <button style={{padding:"12px 80px",border: "none",marginTop:"10px", backgroundColor:"#82FFAC",borderRadius:"10px"}}>
                    <h4 style={{fontFamily:"Montserrat",color: "#000",display:"flex",justifyContent:"center" }} >Adicionar</h4>
                  </button>
                </div>
              </div>
            </FoodList>
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
                height:"150px", flexFlow: "column wrap"}} >
              
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
                <div style={{marginTop:"10px",borderLeft: "5px blue solid", height:"30px",width:"80px", display: "flex", 
                  flexDirection:"row",alignItems: "center", justifyContent:"space-between"
                }}>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >Carboidratos </p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >213.9g</p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >5%</p>
                  
                </div>

                  
              </div>
              <div style={{marginTop:"50px", height:"30px", display: "flex", 
                flexDirection:"row",alignItems: "center", 
              }}>
                <p style={{fontFamily:"Montserrat",color: "#fff",fontSize:"0.85rem",width:"400px"}} >
                A porcentagem (%), ao lado da quantidade em gramas, mostra quanto de um nutriente específico você estará 
                consumindo em relação à quantidade recomendada para o dia.
                </p>
                <div style={{marginLeft:"120px",width: "250px"}} >
                  <p style={{fontFamily:"Montserrat",marginTop:"10px",marginLeft:"10px",color: "#fff",fontSize:"0.80rem"}} >Quantidade</p>
                  <input type="number" style={{padding:"10px 20px",color:"#fff",marginTop:"5px", backgroundColor:"#000",borderRadius:"10px"}}>
                  </input>
                  <p style={{fontFamily:"Montserrat",marginTop:"10px",marginLeft:"10px",color: "#fff",fontSize:"0.80rem"}} >Peso em gramas</p>
                  <input type="number"  style={{padding:"10px 20px",color:"#fff",marginTop:"5px", backgroundColor:"#000",borderRadius:"10px"}}>
                  </input>
                  <button style={{padding:"12px 80px",border: "none",marginTop:"10px", backgroundColor:"#82FFAC",borderRadius:"10px"}}>
                    <h4 style={{fontFamily:"Montserrat",color: "#000",display:"flex",justifyContent:"center" }} >Adicionar</h4>
                  </button>
                </div>
              </div>
            </FoodList>
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
                height:"150px", flexFlow: "column wrap"}} >
              
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
                <div style={{marginTop:"10px",borderLeft: "5px blue solid", height:"30px",width:"80px", display: "flex", 
                  flexDirection:"row",alignItems: "center", justifyContent:"space-between"
                }}>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >Carboidratos </p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >213.9g</p>
                  <p style={{fontFamily:"Montserrat",marginLeft:"10px",color: "#fff"}} >5%</p>
                  
                </div>

                  
              </div>
              <div style={{marginTop:"50px", height:"30px", display: "flex", 
                flexDirection:"row",alignItems: "center", 
              }}>
                <p style={{fontFamily:"Montserrat",color: "#fff",fontSize:"0.85rem",width:"400px"}} >
                A porcentagem (%), ao lado da quantidade em gramas, mostra quanto de um nutriente específico você estará 
                consumindo em relação à quantidade recomendada para o dia.
                </p>
                <div style={{marginLeft:"120px",width: "250px"}} >
                  <p style={{fontFamily:"Montserrat",marginTop:"10px",marginLeft:"10px",color: "#fff",fontSize:"0.80rem"}} >Quantidade</p>
                  <input type="number" style={{padding:"10px 20px",color:"#fff",marginTop:"5px", backgroundColor:"#000",borderRadius:"10px"}}>
                  </input>
                  <p style={{fontFamily:"Montserrat",marginTop:"10px",marginLeft:"10px",color: "#fff",fontSize:"0.80rem"}} >Peso em gramas</p>
                  <input type="number"  style={{padding:"10px 20px",color:"#fff",marginTop:"5px", backgroundColor:"#000",borderRadius:"10px"}}>
                  </input>
                  <button style={{padding:"12px 80px",border: "none",marginTop:"10px", backgroundColor:"#82FFAC",borderRadius:"10px"}}>
                    <h4 style={{fontFamily:"Montserrat",color: "#000",display:"flex",justifyContent:"center" }} >Adicionar</h4>
                  </button>
                </div>
              </div>
            </FoodList>
          </FoodListWrapper>

        </Container>
      </Modal>
    </>

  )
}