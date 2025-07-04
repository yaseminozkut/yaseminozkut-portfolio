import styled from "styled-components";

export const Background = styled.div`
  background: #ececec;
  min-height: 200px;
  width: 100vw;
  display: flex;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: 82%;
  padding: 0 5vw 0 5vw;
  box-sizing: border-box;
  @media (max-width: 900px) {
      flex-direction: column;
      width: 99vw;
      padding: 5vw;
  }
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

export const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
`;

export const ExpItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.3rem;
`;

export const ExpLogo = styled.img`
  width: 68px;
  height: 48px;
  object-fit: contain;
  margin-top: 0.12rem;
  border-radius: 8px;
  @media (max-width: 900px) {
    width: 35px;
    height: 35px;
  }
`;

export const ExpTextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExpRole = styled.div`
  font-family: 'Roboto', Verdana, Helvetica, Arial, Sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: #555;
  letter-spacing: 0;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

export const ExpCompany = styled.div`
  font-family: 'Roboto', Verdana, Helvetica, Arial, Sans-serif;
  font-size: 0.8rem;
  color: #555;
  margin-top: 0.04rem;
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;

export const ExpDate = styled.div`
  font-family: 'Roboto', Verdana, Helvetica, Arial, Sans-serif;
  font-size: 0.8rem;
  color: #6c7a7a;
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;

export const ExpDesc = styled.ul`
  margin: 0.3em 0 0 0;
  padding-left: 1.1em;
  color: #444;
  font-family: 'Roboto', Verdana, Helvetica, Arial, Sans-serif;
  font-size: 0.8rem;
  line-height: 1;
  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
  & > li {
    margin-bottom: 0.4em;
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