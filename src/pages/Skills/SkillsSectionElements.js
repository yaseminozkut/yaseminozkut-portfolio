import styled from "styled-components";

export const Background = styled.div`
    background: #ececec;
    display: flex;
    position: relative;
    width: 100vw;      // Add this line
    max-width: 100%;   // Just in case
    height: 620px;
    z-index: 1;
    overflow-x: hidden; /* <--- prevents unwanted horizontal scroll! */
    /* For very large screens, make section shorter */
    @media (min-width: 1600px) {
      height: auto;
    }
    /* For mid-size screens, slightly shorter */
    @media (max-width: 1100px) {
      height: auto;
    }
`;

export const StyledContainer = styled.div`
  left: 5%;
  width: 100%;
  display: inline-block;
`;

export const StyledTitle = styled.p`
  font-size: clamp(1.1rem, 5vw, 2rem);
  font-weight: bold;
  color: #5cbd95;;
  margin-bottom: 0;
  margin-top: 0;
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

export const StyledText = styled.p`
  position: relative;
  font-size: 1rem;
  color: #555;
  font-weight: 400;
  width: fit-content;
  font-family: Roboto, Verdana, Helvetica, Arial, Sans-serif;
  @media (max-width: 900px) {
    font-size: 0.8rem;
  }
`;

export const Grid = styled.div`
  position: relative;
  display: grid;
  width: 80%;
  grid-template-rows: auto;
  grid-template-columns: 120px 1fr;
  grid-gap: 5px;
  padding-left: 5vw;
  align-items: start;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding-left: 4vw;
    padding-top: 1vw;
    gap: 0.3rem 0; // Use a small vertical gap between label and Cols
    width: 98vw;
  }
`;


export const Cols = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px 12px;
  margin-top: 16px;

  @media (max-width: 900px) {
    margin-top: -0.8em; // much smaller on mobile
  }
`;


export const StyledCircle = styled.div`
  border-radius: 30px;
  border: 1px solid #d1d5db;
  color: #555;
  background:transparent;   // soft light gray for pill effect
  width: fit-content;
  padding: 0.35em 1.2em;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: Roboto, Verdana, Helvetica, Arial, Sans-serif;
  box-shadow: 0 1px 8px rgba(0,0,0,0.07);   // <--- subtle floating shadow
  transition: box-shadow 0.18s, transform 0.15s;

  &:hover {
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15); // <--- more "lift" on hover
    border: 1.5px solid rgb(169, 169, 172);            // optional: accent border on hover
  }
  @media (max-width: 900px) {
    font-size: 0.6rem;
    padding: 0.3em 1em;
  }
`;

