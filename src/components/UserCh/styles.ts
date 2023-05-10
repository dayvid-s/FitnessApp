import styled from "styled-components"

export const Container = styled.main`
    /* background-color: #f9f9f9; */
    flex-direction: row;
    margin-top: 3rem;
    flex:1;
    margin-left: 2.5rem;
    margin-right: 2rem;
    height: 100vh;
    `

export const ChartWithUserStats = styled.div`
    flex-direction: column;
    display:flex;
    background-color: #f9f9f9;
    height: 50vh;
    width: 40vw;
    align-items: center;
    justify-content: center;

    h1{
        flex:1;
        color: #202020;
        /* margin-left: 1rem; */
        font-weight: 500;
        font-size: 2rem;
    }
    div{
        flex:3;
        background-color: #202020;

    }
    `

