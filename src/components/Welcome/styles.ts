import styled from "styled-components"

export const Container = styled.div`
    flex-direction: column;
    max-width: 1120px;
    height: 4rem;
    margin: 0 auto;
    align-items: center;
    padding:1rem;
    margin-left: 1.5rem;
    `
export const PageInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const TitleArea = styled.nav`
    a{
        color:#d4d4d4;
        margin-right: 1rem;
        font-size: 0.85rem;
    }
`
export const DateWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4rem;
    margin-left: auto;
    p{
        font-size: 0.70rem;
    }
`
export const WelcomeWrapper = styled.div`
    margin-top: 1rem;
    h1{
        font-weight: 300;
        color:#d4d4d4;
    }
    strong{
        color:#fff;
    }
`