import styled, {css} from "styled-components"
export interface ConteinerProps {
    type: string  
    marginLeft?: string  
  }
export interface IconWrapperProps {
    type: string  
  }
  

export const Container = styled.div<ConteinerProps>`    
    /* display: flex;
    flex-direction: row; */
    height: 30vh;
    width: 22vw;
    margin-top: -3.5rem;
    position:absolute;
    border-radius:5px;
    padding:1rem;
    
    ${({type})=> (type == "carb")&& css`
    background-color: var(--blue-light)`};
    
    ${({type})=> (type == "protein")&& css`
    background-color: var(--text-title);
    margin-left:19rem`};
    
    ${({type})=> (type == "fat")&& css`
    background-color: var(--text-body);
    background-color: #ff59ac;
    margin-left:38rem;`};
    
    ${({type})=> (type == "fiber")&& css`
    background-color: var(--green);
    margin-left:57rem;`};
    
    
    
    `
export const MacroNutrientsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    p{
        color: #ffeaea;
        margin-left: auto;
        font-size: 1.20rem;
        font-weight:600;     
    }

`
export const IconWrapper = styled.div<IconWrapperProps>`
    padding:10px;
    max-width: 50px;
    border-radius:5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DBF2FD;
    svg{
        width: 25px;
        height:25px;
    }
`
export const TotalNutrientsArea = styled.div`
    margin-top: 0.5;
    strong{
        font-size: 1.5rem;
        color:#ffffff;
    }
`

export const RegisterMealButton = styled.button`
    display:flex;
    align-items: center;
    margin-top:1rem;
    margin-left: 2rem;
    background-color:#DBF2FD;
    font-family: roboto;
    font-weight:600;
    color:var(--text-title4fffff);
    color:#4b4b4b;
    padding: 10px 15px 10px;
    border-radius:5px;
    border: none;
    
    svg{
        margin-left:5px;
        color:#633BBC;
        width: 25px;
        height:25px;

    }
`
