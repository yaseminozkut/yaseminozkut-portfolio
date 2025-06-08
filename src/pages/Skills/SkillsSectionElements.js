import styled from "styled-components";

export const Background = styled.div`
    background: #ececec;
    display: flex;
    position: relative;
    width: 100vw;      // Add this line
    max-width: 100%;   // Just in case
    height: 800px;
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
  font-size: clamp(1.1rem, 5vw, 3rem);
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
    font-size: clamp(1.1rem, 7vw, 2.5rem);
  }

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
  grid-template-rows: auto;
  grid-template-columns: 120px 1fr;    // <-- key line!
  grid-gap: 5px;
  padding-left: 5vw;
  align-items: start;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding-left: 4vw;
    gap: 0.4rem 0;
    width: 98vw;
  }
`;



export const Cols = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;      // This line enables wrapping
  width: 100%;
  gap: 8px 12px;        // Use gap instead of grid-gap for flex!
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