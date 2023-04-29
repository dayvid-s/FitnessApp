import styled from "styled-components"
export interface ConteinerProps {
    marginLeft?: string  
  }
export interface IconWrapperProps {
    type: string  
  }
  

export const Container = styled.div<ConteinerProps>`
    background-color: #fff;
    height: 30vh;
    width: 22vw;
    margin-top: -3.5rem;
    position:absolute;
    margin-left: ${props => props.marginLeft};
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
    background-color: var(--blue-light);
    svg{
        width: 25px;
        height:25px;
    }
`
