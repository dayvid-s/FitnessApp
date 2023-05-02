import styled, {css} from "styled-components"
export interface ConteinerProps {
    type: string  
    marginLeft?: string  
  }
export interface IconWrapperProps {
    type: string  
  }
  

export const Container = styled.div<ConteinerProps>`
    ${({type})=> (type == "carb")&& css`
    background-color: var(--blue-light)`};
    
    ${({type})=> (type == "protein")&& css`
    background-color: var(--text-title);
    margin-left:19rem`};
    
    ${({type})=> (type == "fat")&& css`
    background-color: var(--orange-light);
    margin-left:38rem;`};
    
    ${({type})=> (type == "fiber")&& css`
    background-color: var(--green);
    margin-left:57rem;`};
    
    height: 30vh;
    width: 22vw;
    margin-top: -3.5rem;
    position:absolute;
    border-radius:5px;
    padding:1rem;
    
    p{
        color: var(--gray-light);
        
    }


    `
export const IconWrapper = styled.div<IconWrapperProps>`
    padding:10px;
    max-width: 50px;
    border-radius:5px;
    display: flex;
    align-items: center;
    justify-content: center;
/* 
    ${({type})=> (type == "carb")&& css`
    background-color: var(--blue-light)`};
    
    ${({type})=> (type == "protein")&& css`
    background-color: var(--text-title)`};
    
    ${({type})=> (type == "fat")&& css`
    background-color: var(--orange-light)`};
    
    ${({type})=> (type == "fiber")&& css`
    background-color: var(--green)`};
 */

    background-color: #DBF2FD;
    svg{
        width: 25px;
        height:25px;
    }
`
