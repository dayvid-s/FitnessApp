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

    img{
        cursor: pointer;
    }
    `

export const NavBar = styled.nav`
    margin-left:2rem;
    a{
        color:#fff;
        margin-right: 1rem;
        font-size: 0.85rem;
        opacity: 0.7;
    }
    img{
    }
`
export const IconsArea = styled.div`
    margin-left:auto;
    a{
        color:#fff;
        margin-right: 1rem;
        font-size: 0.85rem;
        opacity: 0.7;
    }
    img{
    }
`

export const UserAccountArea = styled.div`
    display: flex;
    margin-right: 4rem;
    margin-left: 20px;
`