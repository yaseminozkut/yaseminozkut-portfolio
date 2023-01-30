import styled from "styled-components";

export const Background = styled.nav`
    background: #ececec;
    color: #ececec;
    position: absolute;
    overflow: scroll;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    margin: 0;
    padding: 0;

    height: 100%;
    width: 100%;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 25%;
  height: 25vw;
  width: 25vw;
  right: 1%;
`;

export const StyledContainer = styled.div`
  position: relative;
  top: 10rem;
  left: 5%;
  width: fit-content;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;

export const StyledTitle = styled.p`
  position: relative;
  font-size: 4.5vw;
  font-weight: bold;

  color: white;
  width: fit-content;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;

export const StyledText = styled.p`
  position: relative;
  font-size: 1rem;

  color: white;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;
