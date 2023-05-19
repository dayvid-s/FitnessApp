import styled from "styled-components"

export const Container = styled.div`
    height:16.5rem;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding:1rem;
    background-color: #121214;
    `
export const PageInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;

`

export const TitleArea = styled.nav`
    a{
        color:#F7F7F7;
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
    margin-left: 2rem;
    h1{
        font-weight: 400;
        color:#F7F7F7;
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