import styled, { css } from "styled-components"
export interface ConteinerProps {
    type: string
    marginLeft?: string
}
export interface IconWrapperProps {
    nutrientType: string
}


export const Container = styled.div<ConteinerProps>`    
    margin-right:10px;

    height: 30vh;
    width: 30vw;
    border-radius:5px;
    padding:1rem;
    
    ${({ type }) => (type == "carb") && css`
    background-color: var(--blue-light)`};
    
    ${({ type }) => (type == "protein") && css`
    background-color: var(--text-title);
    
    `};
    
    ${({ type }) => (type == "fat") && css`
    background-color: var(--text-body);
    background-color: #ff59ac;`};
    
    ${({ type }) => (type == "fiber") && css`
    background-color: var(--green);

    `};
    
    
    
    `
export const MacroNutrientsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    p{
        color: #fff;
        margin-left: auto;
        font-size: 1.20rem;
        font-weight:600;     
        font-family: "Montserrat", sans-serif;

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
        
        ${({ nutrientType }) => (nutrientType == "fiber") && css`
        color: var(--green)`};

        ${({ nutrientType }) => (nutrientType == "carb") && css`
        color: var(--blue-light);`};
       
        ${({ nutrientType }) => (nutrientType == "protein") && css`
        color: var(--text-title);`};
       
        ${({ nutrientType }) => (nutrientType == "fat") && css`
        color:#ff59ac`};

        
    }
`
export const TotalNutrientsArea = styled.div`
    margin-top: 0.5;
    p{
        color:#e1e1e1e1;;

    }
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
    font-family: roboto, sans-serif;

    font-weight:600;
    color:#404040;
    padding: 12px 10px 10px;
    border-radius:5px;
    border: none;
    
    svg{

        margin-left:5px;
        color:#633BBC;
        width: 25px;
        height:25px;
        
        ${({ nutrientType }) => (nutrientType == "fiber") && css`
        color: var(--green)`};

        ${({ nutrientType }) => (nutrientType == "carb") && css`
        color: var(--blue-light);`};
       
        ${({ nutrientType }) => (nutrientType == "protein") && css`
        color: var(--text-title);`};
       
        ${({ nutrientType }) => (nutrientType == "fat") && css`
        color:#ff59ac`};

    }
`
