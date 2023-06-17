import styled from "styled-components"

export const Container = styled.main`
    /* background-color: #f9f9f9; */
    display:flex;
    flex-direction: row;
    margin-top: 3rem;
    flex:1;
    margin-left: 2.5rem;
    margin-right: 2rem;
    `
export const Title = styled.h1`


`
export const ChartWithUserStats = styled.div`
    flex-direction: column;
    display:flex;
    background-color: #1D1E24;
    box-shadow: 2px -2px 5px 2px rgba(171,171,171,0.49);
    height: 50vh;
    width: 55vw;
    align-items: center;
    justify-content: center;
    /* box-shadow: 0 6px 7px -2px rgba(0, 0, 0, 0.2); */
    border-radius: 10px;


h1{
        flex:1;
        color: #fff;

        font-weight: 600;
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
        color:#fff;
    }
    .apexcharts-legend-text{
        color:#fff;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        background-color:'blue';
    }
    `


export const UserWaterStatsWrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin-right: 20px;
    display:flex;
    box-shadow: 2px -2px 5px 2px rgba(171,171,171,0.49);

    /* background: linear-gradient(264deg, #6E7BFB 0%,#8E7BFB 100%); */
    background: #1D1E24;
    height: 50vh;
    width: 20vw;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

    }
    h1{
        color: #FFF;

        font-weight: 700;
        font-size: 2rem;
        /* font-family: "Montserrat", sans-serif; */
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
    /* background-color : #fff; */
    /* height:100%; */
    flex-direction: column;
    margin-left: 20px;
    width: 30vw;
    height: 50vh;

    align-items: center;
    border-radius: 20px;
    /* padding:20px; */
    
    h1{
        color: #FFF;
        font-weight: 600px;
        margin-bottom: 10px;
        /* margin: 0px 0px 10px 10px; */
    }
    p{
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
    }
    h2{
        margin-right: auto;
        
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
    height: 50vh;
`
export const UserObjectivesRectangle = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding:10px 20px;
    width: 50%;
    /* height: 155px; */
    border: 2px rgb(60,60,60) solid;
    /* border-color:  ; */

    /* background-color : rgb(40,40,40); */
    background: #1D1E24;
    /* margin-right:5px; */
    strong{
        color:#9a76d9;
        font-size:1.5rem;
    }
    p{
        color:#fff;
        margin-bottom: 10px;
        font-size: 0.80rem;
}
`


export const UserEditWrapper = styled.button`
    padding:10px;
    background: #1D1821;

    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-left: auto;
    p{
        color:#fff;
    }
`