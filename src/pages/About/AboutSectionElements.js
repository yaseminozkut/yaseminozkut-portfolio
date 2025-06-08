import styled from "styled-components";
import { Button } from "reactstrap";

// MAIN FLEX CONTAINER
export const Background = styled.div`
  background: #4400e6;
  display: flex;
  position: relative;
  height: 300px;
  align-items: flex-start;
  z-index: 1;

  /* For very large screens, make section shorter */
  @media (min-width: 1600px) {
    height: 220px;
  }
  /* For mid-size screens, slightly shorter */
  @media (max-width: 1100px) {
    height: 260px;
  }
  /* For phones/tablets, stack columns and auto height */
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 2rem;
  }
  @media (max-width: 600px) {
    padding-bottom: 1rem;
  }
`;

// LEFT SIDE
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 0 1 60%;
  padding-left: 5vw;
  padding-right: 2vw;

  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
    padding: 5vw;
    text-align: center;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  max-width: 100%;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100vw;
    align-items: flex-start;
  }
`;

// TITLE
export const StyledTitle = styled.p`
  font-size: clamp(1.1rem, 5vw, 3rem);
  font-weight: bold;
  color: #ececec;
  margin-bottom: 0;
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

// SUBTITLE
export const StyledSubtitle = styled.p`
  font-size: clamp(0.9rem, 3vw, 2rem);
  color: #ececec;
  margin-bottom: 0.1rem;
  margin-top: -0.1em;
  width: 100%;
  max-width: 90%;
  white-space: normal;
  text-align: left;
  font-family: 'JetBrains Mono', Verdana, Helvetica, Arial, Sans-serif;
  word-break: break-word;

  @media (max-width: 900px) {
    text-align: left;
    font-size: clamp(0.85rem, 5vw, 1rem);
  }
`;

// BODY TEXT
export const StyledText = styled.p`
  font-size: clamp(0.82rem, 1vw, 1rem);
  color: #ececec;
  margin-bottom: 0;
  text-align: justify;
  width: 100%;
  max-width: 90%;
  white-space: normal;
  font-family: Verdana, Helvetica, Arial, Sans-serif;
  word-break: break-word;

  @media (max-width: 900px) {
    text-align: left;
    font-size: clamp(0.75rem, 3vw, 0.8rem);
  }
`;


// RIGHT SIDE (image + button + icons, horizontal on desktop, vertical on mobile)
export const RightColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 0 1 40%;
  min-width: 180px;
  max-width: 400px;
  padding-top: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    width: 100%;
    margin-top: 2rem;
    padding-top: 0;
  }
`;

// PROFILE IMAGE
export const StyledImg = styled.img`
  width: clamp(70px, 18vw, 280px);
  max-width: 280px;
  min-width: 150px;
  height: auto;
  object-fit: contain;
  margin-right: 2.5rem;

  @media (max-width: 1000px) {
    width: clamp(60px, 44vw, 200px);
    max-width: 150px;
    min-width: 90px;
    margin: 0 auto 1.2rem auto;
  }
  @media (max-width: 600px) {
  width: clamp(44px, 34vw, 90px);
  max-width: 50px;
  min-width: 45px;
  margin-bottom: 0.5rem;
  }
`;

export const ActionsStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const IconLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 0;
  justify-content: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const IconLink = styled.a`
  font-size: 2rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ResumeButton = styled(Button)`
  border-radius: 0.2rem;
  font-size: 1rem;
  color: black;
  font-weight: bold;
  margin: 0 0 1.2rem 0;
  background-color: #5cbd95;
  text-decoration: none;
  font-family: inherit;

  &:hover {
    background-color: white;
  }
`;