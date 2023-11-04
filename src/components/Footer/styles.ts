import styled from "styled-components"

export const Container = styled.footer`
    background-color:#00050d;
    margin-top: 300px;
    /* height:400px; */
    padding: 51px 43px 34px
    
`

export const WrapperOfFooterSessions = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1440px;
    margin: 0px auto;
    justify-content: space-around;
    @media (max-width:800px){
        flex-direction: column;
        justify-content: center;
    }
    
`


export const ProjectInfoSection = styled.section`
    margin-right: 40px;
    max-width: 250px;

    div{
        display:flex;
        flex-direction: row;

    }
    h2{
        margin-left:10px;
        color:#00BCF2;
        font-weight: 1000px;
    }
    p{
        color:#fff;

        margin:30px 0px;
        /* width:25vw ; */
        line-height:20px;
        @media (max-width:890px){
            /* width: 100%; */
    }
    }
`
export const TwoRowsWrapper = styled.div`
    display: flex;
    flex-direction: row;
        @media (max-width:480px){
        flex-direction: column;
        justify-content: center;
    }

`

export const ProductInfoSection = styled.section`
/* width:100%;     */
    margin-left:200px;
    /* margin-right: 20px; */
    display: flex;
    flex-direction: column;
    line-height:35px;
    
    
    strong{ 
        color:#fff;
        font-weight: 700;
        font-size: 1.8rem;
    }
    p{
        font-weight:400;
        color:#e6e6e6;
        cursor: pointer;
    }


    @media (max-width:800px){
        margin-left: auto;
        margin-right: auto;
        justify-content: flex-start;
}
`


export const SectionAbout = styled(ProductInfoSection)`
    margin-left: 50px;
       @media (max-width:800px){
        margin-left: 0;
}
    `

export const DoubtSession = styled(ProductInfoSection)`
    margin-left: 50px;
    /* margin-right:auto;   */
    @media (max-width:800px){
        margin-left: 160px;
}


`

export const BottomOfFooter = styled.div`
    /* background-color: #121214; */
    /* width:100vw; */
    margin-top: 20px ;
    border-top: 2px solid #671ba0;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding:35px 40px; */
    p{
        /* margin-right: auto; */
        color:#fff;

    }
    svg{
        margin-top: 20px ;

        width:30px;
        height:30px;
        color:#fff;
        cursor: pointer;
        margin-right: 10px;
    }
    ;
`