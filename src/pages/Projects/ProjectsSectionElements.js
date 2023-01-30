import styled from "styled-components";

export const Background = styled.div`
    background: #ececec;
    display: flex;
    position: relative;
    height: 1400px;
    z-index: 1;
`;

export const StyledContainer = styled.div`
  top: 5rem;
  left: 5%;
  width: 100%;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;

export const TimelineContainer = styled.div`
  top: 13%;
  position: relative;
  left: 8%;
  width: 80%;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;

export const StyledTitle = styled.p`
  position: absolute;
  font-size: 4rem;
  font-weight: bold;
  left: 8rem;
  top: 1rem;
  color: #5cbd95;
  width: fit-content;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;

export const StyledText = styled.p`
  position: relative;
  font-size: 1rem;
  color: black;
  font-weight: bold;
  width: fit-content;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;

export const Grid = styled.div`
    position: relative;
    display: grid;
    width: 80rem;
    grid-template-rows: 50px 50px;
    grid-template-columns: 120px 600px;
    grid-gap: 5px;
    left: 8rem;
`;
export const Cols = styled.div`
    position: relative;
    display: flex;
    grid-template-rows: 50px 50px;
    grid-template-columns: 400px 800px;
    grid-gap: 5px;
    top: 2rem;
`;
export const Cols2 = styled.div`
    position: relative;
    display: flex;
    width: 1100px;
    grid-gap: 5px;
    top: 1rem;
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
  font-weight: bold;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 25%;
  height: 25vw;
  width: 25vw;
  right: 1%;
`;

export const IconLink = styled.div`
  position: relative;

  height:2rem;
  width: 2rem;
  text-decoration: none;
  font-size: 30px;

  &:hover{
    {
      transform: translateY(-2px)
    }
  }
`;