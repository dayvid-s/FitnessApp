import styled from "styled-components"

export const Container = styled.div`
    background-color: #CACBFD;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    height:15rem;
    /* position: absolute; */
    /* top:850px; */
    width:30rem;
    /* padding:3rem   2.5rem 2rem; */
    margin-left:2.5rem;
    div {
      margin-top: 2rem;
    }
    div:nth-child(n+2) {
      margin-left:-80px;
    }
.wrapper {
  height: 30px;
  width: 140px;
    /* border: 3px solid blue; */
  border-radius:30px;
}

.container {
  transform: rotate(270deg);
    background-color: #2B2A33;
    border-radius:30px;
}

.barCompleted {
    border-radius:30px;
    background-color: #683FDC;
    width: 80%;
}

.label {
  margin-left:50%;
  border-radius:30px;
  font-size: 20px;
  font-family: 'Roboto';
  color: #fff;
}
`

