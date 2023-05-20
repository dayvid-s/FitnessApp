import styled from "styled-components"

export const HeaderArea = styled.header`
    max-width: 1520px;
    height: 4rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:2.5rem;
    border-bottom: 0.80px solid;
    border-color: #353535;
    /* background-color: #12121; */
    img{
        margin-left: 0.5rem;
        cursor: pointer;
    }
    h3{
        font-size: 1.8rem;
        cursor:pointer;
        color:#fff;
    }
    `

export const NavBar = styled.nav`
    margin-left:5rem;
    a{
        color:#aeaeb3;
        margin-right: 2rem;
        font-size: 1rem;
        cursor:pointer;

    }
`
export const IconsArea = styled.div`
    margin-left:auto;
    display: flex;
    svg{
        color:#fff;
        margin-right: 1.2rem;
        opacity: 0.7;
        cursor:pointer;

    }
`

export const UserAccountArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-right: 2.5rem; */
    margin-left: 10px;
    svg{
        margin-right:1px;
        cursor:pointer;
    }
    p{
        color:#aeaeb3;
    }
`