import styled from "styled-components"

export const HeaderArea = styled.header`
    max-width: 1120px;
    height: 4rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:1rem;
    border-bottom: 1.3px solid;
    border-color: #353535;
    margin-left: 1.5rem;
    img{
        cursor: pointer;
    }
    `

export const NavBar = styled.nav`
    margin-left:2rem;
    a{
        color:#d4d4d4;
        margin-right: 1rem;
        font-size: 0.85rem;
    }
    img{
    }
`
export const IconsArea = styled.div`
    margin-left:auto;
    display: flex;
    svg{
        color:#fff;
        margin-right: 0.60rem;
        opacity: 0.7;
    }
`

export const UserAccountArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4rem;
    margin-left: 10px;
    svg{
        margin-right:1px;
    }
`