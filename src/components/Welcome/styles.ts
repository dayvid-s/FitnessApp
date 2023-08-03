import styled from "styled-components"

export const Container = styled.div`
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding:24px;
    `
export const PageInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 14px;

`

export const TitleArea = styled.nav`
    a{
        color:#F7F7F7;
        margin-right: 17px;
    }
`
export const DateWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
    margin-left: auto;
`
export const WelcomeWrapper = styled.div`
    margin-top: 18px;
    margin-left: 14px;
    h1{
        font-weight: 400;
        color:#ccd6db;
        font-size: 4.2rem;
    }
    strong{
        color:#fff;
    }
    p{
        margin-top:9px;

    }
`