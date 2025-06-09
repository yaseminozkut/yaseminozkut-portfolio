import styled from "styled-components";

export const Background = styled.div`
    background: #ececec;
    width: 100vw;
    max-width: 100%;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    padding-top: 0;
    padding-bottom: 2vw;
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 900px) {
      flex-direction: column;
      width: 99vw;
    }
`;

export const Left = styled.div`
    flex: 1;
    width: 50%;
    min-width: 280px;
    max-width: 100vw;
    margin-right: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 2vw;
    padding-left: 5vw;

    @media (max-width: 900px) {
      max-width: 100vw;
      width: 90%;
      margin: 0 auto 2vw auto;
      padding-left: 5vw;
      padding-right: 5vw;
    }
`;


export const Right = styled.div`
    flex: 1;
    width: 50%;
    min-width: 280px;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 900px) {
      width: 90%;
      min-width: 0;
      padding-left: 5vw;
    }
`;


export const StyledTitle = styled.p`
  font-size: clamp(1.1rem, 5vw, 2rem);
  font-weight: bold;
  color: #5cbd95;
  margin-bottom: 0.2em;
  margin-top: 0;
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

export const StyledText = styled.p`
  position: relative;
  font-size: 0.8rem;
  color: #555;
  font-weight: 400;
  font-family: Roboto, Verdana, Helvetica, Arial, Sans-serif;
  margin-bottom: 1.5rem;
  line-height: 1.7;
  word-break: break-word;
  text-align: justify;
  @media (max-width: 900px) {
    font-size: 0.7rem;
    margin-bottom: 1.2rem;
  }
`;

export const StyledLink = styled.a`
  color: #4400e6;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #5cbd95;
    text-decoration: underline;
  }
`;

export const Grid = styled.div`
  position: relative;
  display: grid;
  width: 90%;
  grid-template-rows: auto;
  grid-template-columns: 140px 1fr;
  grid-gap: 5px;
  padding-left: 0;
  align-items: start;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-top: 1vw;
    gap: 0.3rem 0;
    width: 98vw;
  }
`;

export const Cols = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 6px 6px;
  margin-top: 16px;

`;

export const StyledCircle = styled.div`
  border-radius: 30px;
  border: 1px solid #d1d5db;
  color: #555;
  background: transparent;
  width: fit-content;
  padding: 0.35em 1.2em;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: Roboto, Verdana, Helvetica, Arial, Sans-serif;
  box-shadow: 0 1px 8px rgba(0,0,0,0.07);
  transition: box-shadow 0.18s, transform 0.15s;

  &:hover {
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    background: #4400e6;
    color: #ececec;
  }
  @media (max-width: 900px) {
    font-size: 0.6rem;
    padding: 0.2em 0.5em;
  }
`;
