import styled from "styled-components";

export const Background = styled.div`
  background: #ececec;
  min-height: 200px;
  width: 100vw;
  display: flex;
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 850px;
  /* Remove margin: 0 auto if you want it strictly left-aligned */
  padding-top: 1rem;
  padding-left: 5vw;
  /* Optional: Keep a little right padding for breathing room */
  padding-right: 2vw;
  box-sizing: border-box;
`;


export const StyledTitle = styled.p`
  font-size: clamp(1.1rem, 5vw, 2rem);
  font-weight: bold;
  color: #5cbd95;
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

export const EduList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
`;

export const EduItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.3rem;
`;

export const EduLogo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-top: 0.12rem;
  border-radius: 8px;
`;

export const EduTextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EduDegree = styled.div`
  font-family: 'Roboto', Verdana, Helvetica, Arial, Sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #555;
  letter-spacing: 0;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

export const EduSchool = styled.div`
  font-family: 'Roboto', Verdana, Helvetica, Arial, Sans-serif;
  font-size: 0.8rem;
  color: #555;
  margin-top: 0.04rem;
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;

export const EduDate = styled.div`
  font-family: 'Roboto', Verdana, Helvetica, Arial, Sans-serif;
  font-size: 0.8rem;
  color: #6c7a7a;
  margin-bottom: -0.28rem; // Optional, for spacing
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;

export const EduMinor = styled.div`
  font-family: 'Roboto', Verdana, Helvetica, Arial, Sans-serif;
  font-size: 0.75rem;
  color: #555;
  margin-top: 0.04rem;
  font-style: italic;
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;

