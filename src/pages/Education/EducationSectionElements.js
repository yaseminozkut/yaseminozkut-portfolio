import styled from "styled-components";

export const Background = styled.div`
    background: #ececec;
    display: flex;
    position: relative;
    height: 800px;
    z-index: 1;
`;

export const StyledContainer = styled.div`
  top: -3rem;
  left: 5%;
  width: 100%;
  font-family: Roboto, Verdana, Helvetica, Arial, Sans-serif;
`;

export const TimelineContainer = styled.div`
  position: relative;
  left: 5%;
  width: 80%;
  font-family: Roboto, Verdana, Helvetica, Arial, Sans-serif;
`;

export const StyledTitle = styled.p`
  font-size: clamp(1.1rem, 5vw, 2rem);
  font-weight: bold;
  color: #5cbd95;;
  margin-bottom: 0;
  margin-top: 2rem;
  padding-left: 5vw;
  width: fit-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-family: 'JetBrains Mono', Verdana, Helvetica, Arial, Sans-serif;
  max-width: 100%;

  @media (max-width: 900px) {
    text-align: left;
    font-size: clamp(1.1rem, 7vw, 1.5rem);
  }

`;