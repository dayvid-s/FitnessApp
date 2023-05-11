import styled from "styled-components"

export const Container = styled.main`
    /* background-color: #f9f9f9; */
    display:flex;
    flex-direction: row;
    margin-top: 3rem;
    flex:1;
    margin-left: 2.5rem;
    margin-right: 2rem;
    height: 500vh;
    `

export const ChartWithUserStats = styled.div`
    flex-direction: column;
    display:flex;
    background-color: #f9f9f9;
    height: 50vh;
    width: 40vw;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 7px -2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;


h1{
        flex:1;
        color: #444444;

        font-weight: 500;
        font-size: 2rem;
        font-family: "Montserrat", sans-serif;
        margin-top:2rem;
    }
    div{
        flex:2;
        /* background-color: blue; */
    }
    .apexcharts-legend-series {
        display:block;
        justify-content:center;
        
    }
    span {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
    }
    .apexcharts-legend-text{
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        background-color:'blue';
    }
    `


export const UserWaterStatsWrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin-left: 20px;
    display:flex;
    background-color: #9462e6;
    height: 50vh;
    width: 30vw;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 7px -2px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    svg{
        padding:15px;

    }
    h1{
        /* flex:1; */
        color: #fff;

        font-weight: 500;
        font-size: 2rem;
        font-family: "Montserrat", sans-serif;
        margin-top:2rem;
        /* font-family: 'Neue Haas Grotesk Text Pro', sans-serif; */
        
    }
`

export const UserIndicatorContainer = styled.aside`

`