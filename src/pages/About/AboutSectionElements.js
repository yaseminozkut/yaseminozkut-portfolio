import styled from "styled-components";

// OUTER SECTION
export const Background = styled.div`
  background: #4400e6;
  width: 100vw;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

// FLEX ROW: Profile | Text | Icons
export const AboutRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  padding: 0 4vw;
  margin: 0 auto;
  gap: 2vw;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 5vw 5vw 5vw 5vw;
    align-items: stretch;
  }
`;

// PROFILE LEFT
export const FlippingProfileContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    order: 2;            // Move below text for mobile!
    margin: 0 auto;
  }
`;

// TEXT CENTER
export const TextBlock = styled.div`
  flex: 1 1 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 200px;

  @media (max-width: 900px) {
    order: 1;
    align-items: flex-start;
    min-width: 0;
    width: 100%;
    margin-bottom: 0.3rem;
  }
`;

export const StyledTitle = styled.p`
  font-size: clamp(1.1rem, 5vw, 2.2rem);
  font-weight: bold;
  color: #ececec;
  margin: 0 0 0.2em 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-family: 'JetBrains Mono', Verdana, Helvetica, Arial, Sans-serif;
  @media (max-width: 900px) {
    font-size: clamp(1.5rem, 7vw, 1.45rem);
    margin-bottom: -0.1rem;
    margin-left: 0;            // 🧹 Remove left margin
    width: 100%;               // 🧩 Make it take full width
    text-align: center;        // 🎯 Center the text
    white-space: normal;
  }
`;

export const StyledSubtitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.35rem);
  color: #ececec;
  margin: 0 0 0.5em 0;
  text-align: left;
  font-family: 'JetBrains Mono', Verdana, Helvetica, Arial, Sans-serif;

  @media (max-width: 900px) {
    margin-left: 0;  
    font-size: clamp(0.85rem, 5vw, 0.9rem);
    text-align: center;        // 🎯 Center the text
    white-space: normal;
    width: 100%; 
  }
`;

// ICONS RIGHT
export const ActionsStack = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  

  @media (max-width: 900px) {
    order: 3;             // Move icons to bottom for mobile
    align-items: center;
    margin-top: 0.6rem;
  }
`;

export const IconLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 0;
  justify-content: flex-end;

  @media (max-width: 900px) {
    justify-content: flex-start;
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

