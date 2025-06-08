import styled from "styled-components";

export const Background = styled.div`
    background: #ececec;
    display: flex;
    position: relative;
    height: 800px;
    z-index: 1;
`;

export const StyledContainer = styled.div`
  top: 1rem;
  left: 5%;
  width: 100%;
  display: inline-block;
`;

export const StyledTitle = styled.p`
  position: absolute;
  font-size: 4rem;
  font-weight: bold;
  left: 8rem;
  top: 6rem;
  color: #5cbd95;
  width: fit-content;
  font-family: 'JetBrains Mono', Verdana, Helvetica, Arial, Sans-serif;
`;

export const StyledText = styled.p`
  position: relative;
  font-size: 1rem;
  color: black;
  font-weight: 550;
  width: fit-content;
  font-family: Verdana, Helvetica, Arial, Sans-serif;
`;

export const Grid = styled.div`
    position: relative;
    display: grid;
    width: 80%;
    grid-template-rows: 50px 50px;
    grid-template-columns: 120px 1000px;
    grid-gap: 5px;
    left: 8rem;
    align-items: start;
`;
export const Cols = styled.div`
    position: relative;
    display: flex;
    grid-template-rows: 50px 50px;
    grid-template-columns: 400px 800px;
    grid-gap: 5px;
    margin-top: 16px;
`;

export const StyledCircle = styled.div`
  border-radius: 30px;
  background-color: black;
  width: fit-content;
  padding-left: 8px;
  padding-right: 8px;
  block-size: fit-content;
  font-size: 1rem;
  color: white;
  font-weight: 550;
  font-family: Verdana, Helvetica, Arial, Sans-serif;
  &:hover{
    {
      transform: translateY(-4px)
    }
  }
`;