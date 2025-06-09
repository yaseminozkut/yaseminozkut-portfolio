import styled from "styled-components";
import { Button } from "reactstrap";

// MAIN FLEX CONTAINER
export const Background = styled.div`
  background: #4400e6;
  display: flex;
  position: relative;
  height: 150px;
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
  flex: 0 1 70%;
  padding-left: 5vw;

  @media (max-width: 900px) {
    align-items: center;
    width: 90%;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 0;
    padding-bottom: 0;
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
    font-size: clamp(1.1rem, 7vw, 1.5rem);
  }
`;

// SUBTITLE
export const StyledSubtitle = styled.p`
  font-size: clamp(0.9rem, 3vw, 1.9rem);
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
  font-family: Roboto, Verdana, Helvetica, Arial, Sans-serif;
  word-break: break-word;

  @media (max-width: 900px) {
    text-align: left;
    font-size: clamp(0.75rem, 3vw, 0.8rem);
  }
`;

export const StyledLink = styled.a`
  color: #5cbd95;
  font-weight: 500;
  text-decoration: underline;
  transition: color 0.15s;
  &:hover {
    color: #258b60;
  }
`;



// RIGHT SIDE (image + button + icons, horizontal on desktop, vertical on mobile)
export const RightColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  flex: 0 1 20%;
  min-width: 180px;
  max-width: 400px;
  padding-top: 2.5rem;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    max-width: 100vw;
    width: 100%;
    margin-top: 3rem;
    padding-top: 0;
  }
`;

// PROFILE IMAGE
export const StyledImg = styled.img`
  width: clamp(48px, 11vw, 120px);
  max-width: 120px;
  min-width: 48px;
  height: auto;
  object-fit: contain;
  margin-right: 1.5rem;

  @media (max-width: 1000px) {
    width: clamp(36px, 22vw, 90px);
    max-width: 90px;
    min-width: 36px;
    margin: 0 auto 0.8rem auto;
  }
  @media (max-width: 600px) {
    width: clamp(24px, 18vw, 56px);
    max-width: 56px;
    min-width: 24px;
    margin-bottom: 0.4rem;
  }
`;


export const ActionsStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
    margin-top: 1.2rem;
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