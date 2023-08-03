import styled from "styled-components"

export const Container = styled.div`
    background-color: #02020f;
    border-bottom: 1px solid;
    border-color: #090f24;
    display: flex ;
    `
export const HeaderArea = styled.header`
    height: 68px;
    margin: 0 auto; 
    max-width: 1440px;
    padding:44px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
        margin-left: -5px;
        cursor: pointer;
    }
    h3{
        font-size: 3.06rem;
        cursor:pointer;
        color:#fff;
    }
    `

export const NavBar = styled.nav`
    margin-left:85px;
    a{
        color:#aeaeb3;
        margin-right: 34px;
        font-size: 1.6rem;
        cursor:pointer;

        &:hover {
            color:#fefefe;
        }


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
        
        &:hover {
            opacity:1;
        }

    }
`

export const UserAccountArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-right: 2.5rem; */
    margin-left: 10px;
    svg{
        margin-right:2px;
        cursor:pointer;
    }
    p{
        /* font-size: 1.6rem; */
        color:#aeaeb3;
        cursor:pointer;
        margin-right:-4px;
        &:hover {
            color:#fefefe;
        }

    }
`