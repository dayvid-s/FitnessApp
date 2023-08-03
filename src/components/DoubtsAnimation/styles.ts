import styled, { css } from "styled-components"

export interface IDoubtArea {
  type: string;
}

export const Container = styled.div`
  width: 80vw;
  max-width: 1120px;
  margin: 0px auto;

  list-style: none;
  margin-top: 10px;
  display: flex;
  background-color: #0e0e1d;
  padding: 20px 15px;
  flex-direction: column;
  border-radius: 5px;
  -webkit-touch-callout: none; /* Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  svg {
    color: #aeaeb3;
    width: 25px;
    height: 30px;
    opacity: 0.9;
    cursor: pointer;
  }

  svg:nth-of-type(1) {
    margin-left: auto;
    width: 30px;
    height: 30px;
  }
`

export const DoubtsNameAndActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`

export const DoubtsInfoList = styled.ul`
  display: flex;
  height: 150px;
  flex-flow: column wrap;
`

export const DoubtArea = styled.div<IDoubtArea>`
  margin-top: 10px;
  height: 30px;
  width: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ type }) =>
    type === "protein" &&
    css`
      border-left: 5px var(--green) solid;
    `}
`

export const DoubtText = styled.p`
  font-family: Montserrat;
  margin-left: 10px;
  color: #fff;
`

export const AreaOfAnswers = styled.div`
  margin: 30px 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  h4{
    font-weight: 400;
  }
`

export const DoubtsListItem = styled.li`
  font-size: 1.5rem;
`

export const AddDoubtArea = styled.div`
  margin-left: 120px;
  width: 250px;

  input {
    padding: 10px 20px;
    color: #fff;
    margin-top: 5px;
    background-color: #000;
    border: 1px solid transparent;
    border-radius: 10px;

    :focus {
      border: 1px solid #82ffac;
    }
  }

  button {
    padding: 12px 80px;
    border: none;
    margin-top: 10px;
    background-color: #82ffac;
    border-radius: 10px;
  }

  h4 {
    font-family: "Montserrat";
    color: #000;
    display: flex;
    justify-content: center;
  }
`

export const InputTitle = styled.p`
  font-family: Montserrat;
  margin-top: 10px;
  margin-left: 10px;
  color: #fff;
  font-size: 0.80rem;
`
