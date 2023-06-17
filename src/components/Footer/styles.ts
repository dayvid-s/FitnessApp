import styled from "styled-components"

export const Container = styled.footer`
    margin-top: 300px;
    height:30rem;
    padding:3rem 2.5rem 2rem;
`

export const WrapperOfFooterSessions = styled.div`
    display: flex;
    flex-direction: row;
`


export const ProjectInfoSection = styled.section`
    div{
        display:flex;
        flex-direction: row;

    }
    h1{
        margin-left:10px;
        color:#00BCF2;
        font-size:2rem;
        font-weight: 1000px;
    }
    p{
        color: #aeaeb3;
        margin:30px 0px;
        width:25vw ;
        line-height:20px;
    }
`

export const ProductInfoSection = styled.section`
    margin-left: auto;
    display: flex;
    flex-direction: column;
    line-height:40px;

    strong{ 
        color:#fff;
        font-weight: 600;
        font-size: 1.10rem;
    }
    p{
        color:#aeaeb3;
        cursor: pointer;
    }
`


export const SectionAbout = styled(ProductInfoSection)`
    margin-left: 100px;
    `

export const DoubtSession = styled(ProductInfoSection)`
    margin-left: 100px;

    margin-right:50px;  
`

export const BottomOfFooter = styled.div`
    /* background-color: #121214; */
    /* width:100vw; */
    margin: 70px -40px 0 -40px;
    border-top: 1px solid #373737;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:35px 40px;
    p{
        margin-right: auto;
    }
    svg{
        width:30px;
        height:30px;
        color:#fff;
        cursor: pointer;
        margin-right: 10px;
    }
    ;
`