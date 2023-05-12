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
    background: linear-gradient(264deg, rgba(219,84,255,1) 0%, rgba(148,187,233,1) 100%);
    height: 50vh;
    width: 20vw;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 7px -2px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

    }
    h1{
        color: #fff;

        font-weight: 500;
        font-size: 2rem;
        font-family: "Montserrat", sans-serif;
        margin-top:10px;
        
    }
    img{
        display: flex;
        margin-left:auto;
        margin-top: 10px;

    }
    svg{
        padding:15px;

    }
`

export const UserIndicatorContainer = styled.aside`
    display:flex;
    background-color : #fff;
    flex-direction: column;
    margin-left: 20px;
    height: 100vh;
    width: 30vw;
    align-items: center;
    box-shadow: 0 6px 7px -2px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding:20px;
    h1{
        color: #444444;
        margin-right:5rem;
    }
    p{
        color: #444444;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
    }
    h2{
        margin-right: auto;
        color: #444444;
        
    }
    div:nth-child(1) {
        border-top-left-radius: 20px;
        border-bottom-right-radius: 30px;
        
    }
    div:nth-child(2) {
        border-top-right-radius: 20px;
        border-bottom-left-radius: 30px;
        
    }
    div:nth-child(3) {
        border-top-right-radius: 20px;
        border-bottom-left-radius: 30px;
        
    }
    div:nth-child(4) {
        border-top-left-radius: 20px;
        border-bottom-right-radius: 30px;
    }

        `
export const titleArea = styled.div`
    display:flex;
    /* flex-direction:row;  */
    align-items: center;
    justify-content: center;
`
export const UserObjectivesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`
export const UserObjectivesRectangle = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding:10px 20px;
    width: 50%;
    height: 240px;
    border: 2px solid;
    border-color: gray ;

    /* background-color : rgb(40,40,40); */
    background: #1D222F;
    /* margin-right:5px; */
    strong{
        color:#00E7C9;
        font-size:1.5rem;
    }
    p{
        color:#fff;
        margin-bottom: 10px;
        font-size: 0.80rem;
}
`


export const UserEditWrapper = styled.div`
    padding:10px;
    background-color : rgb(40,40,40);
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-left: auto;
    p{
        color:#fff;
    }
`