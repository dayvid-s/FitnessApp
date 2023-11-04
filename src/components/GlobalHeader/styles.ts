import styled from "styled-components"
export interface MenuProps {
  show: boolean
}


export const Container = styled.div`
    background-color: #02020f;
    border-bottom: 1px solid;
    border-color: #090f24;
    display: flex ;
    padding:44px;
    height: 78px;
    max-width: 1440px;
    margin: 0 auto; 
    
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
export const HeaderArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width:1080px){
        display: none;
    }
        
    `

export const NavBar = styled.nav`
    margin-left:45px;
    a{
        color:#aeaeb3;
        margin-left: 34px;
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
        margin-right: 15px;
        opacity: 0.7;
        cursor:pointer;
        &:first-of-type {
           margin-left: auto;
    }
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



export const MenuContent = styled.div`
display: none;
/* position: absolute; */
/* z-index: 4; */
/* width: 100%; */
/* padding: 10px; */
/* background-color: ${({ theme }) => theme.secondary}; */
/* overflow: hidden; */
svg{
  margin-left: auto;
  height: 30px;
  width: 35px;
}
@media (max-width: 1080px) {
  /* display: none; */

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  }
`
export const MenuIconStyled = styled.img`
  cursor: pointer;

`
export const MenuStyled = styled.ul<MenuProps>`

  li a {
    /* display: block; */
    color: #fff;
    text-align: center;
    padding: 16px;
    /* outline: none; */
    text-decoration: none;
  }

  li:hover {
    cursor: pointer;
    /* background: ${({ theme }) => theme.secondary}; */
  }


  /* ${({ theme }) => theme.desktop`
    display: ${({ show }: MenuProps) => show ? "block" : "none"};
    position: fixed;
    z-index: 4;
    background: #fff;
    top: 40px;
    // right:20px;
    overflow: hidden;
    height: 100%;
    width: 200%;
    padding: 0;

    li {
      width: 100%;
    }

    li:hover {
      cursor: pointer;
      background: #fff;
      a {
        color: #fff;
      }
    }
  `} */


// `