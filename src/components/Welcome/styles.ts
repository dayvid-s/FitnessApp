import styled from "styled-components"

export const Container = styled.div`
    height:13rem;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding:1rem;
    margin-left: 2rem;
    `
export const PageInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const TitleArea = styled.nav`
    a{
        color:#d4d4d4;
        margin-right: 1rem;
        font-size: 1rem;
    }
`
export const DateWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    margin-left: auto;
    p{
        font-size: 1rem;
    }
`
export const WelcomeWrapper = styled.div`
    margin-top: 1rem;
    h1{
        font-weight: 400;
        color:#d4d4d4;
        font-size: 2.4rem;
    }
    strong{
        color:#fff;
    }
    p{
        margin-top:9px;
        font-size: 1.1rem;
    }
`