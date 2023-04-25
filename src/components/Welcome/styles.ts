import styled from "styled-components"

export const Container = styled.header`
    max-width: 1120px;
    height: 4rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:1rem;
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