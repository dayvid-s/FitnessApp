import styled, {css} from "styled-components"
export interface ConteinerProps {
    type: string  
    marginLeft?: string  
  }
export interface IconWrapperProps {
    nutrientType: string  
  }
  

export const Container = styled.div<ConteinerProps>`    
    height: 30vh;
    width: 22vw;
    margin-top: -8.0rem;
    position:absolute;
    border-radius:5px;
    padding:1rem;
    
    ${({type})=> (type == "carb")&& css`
    background-color: var(--blue-light)`};
    box-shadow: 2px 2px 10px var(--blue-light);
    
    ${({type})=> (type == "protein")&& css`
    background-color: var(--text-title);
    box-shadow: 2px 2px 10px var(--text-title);
    
    margin-left:19rem`};
    
    ${({type})=> (type == "fat")&& css`
    background-color: var(--text-body);
    background-color: #ff59ac;
    box-shadow: 2px 2px 10px var(--text-body);
    margin-left:38rem;`};
    
    ${({type})=> (type == "fiber")&& css`
    background-color: var(--green);
    box-shadow: 2px 5px 10px var(--green);

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
        
        ${({nutrientType})=> (nutrientType == "fiber")&& css`
        color: var(--green)`};

        ${({nutrientType})=> (nutrientType == "carb")&& css`
        color: var(--blue-light);`};
       
        ${({nutrientType})=> (nutrientType == "protein")&& css`
        color: var(--text-title);`};
       
        ${({nutrientType})=> (nutrientType == "fat")&& css`
        color:#ff59ac`};

        
    }
`
export const TotalNutrientsArea = styled.div`
    margin-top: 0.5;
    strong{
        font-size: 1.5rem;
        color:#ffffff;
    }
`

export const RegisterMealButton = styled.button<IconWrapperProps>`
    display:flex;
    align-items: center;
    margin-top:1rem;
    margin-left: auto;
    background-color:#DBF2FD;
    font-family: roboto;
    font-weight:600;
    color:var(--text-title4fffff);
    color:#4b4b4b;
    padding: 12px 10px 10px;
    border-radius:5px;
    border: none;
    
    svg{

        margin-left:5px;
        color:#633BBC;
        width: 25px;
        height:25px;
        
        ${({nutrientType})=> (nutrientType == "fiber")&& css`
        color: var(--green)`};

        ${({nutrientType})=> (nutrientType == "carb")&& css`
        color: var(--blue-light);`};
       
        ${({nutrientType})=> (nutrientType == "protein")&& css`
        color: var(--text-title);`};
       
        ${({nutrientType})=> (nutrientType == "fat")&& css`
        color:#ff59ac`};

    }
`
