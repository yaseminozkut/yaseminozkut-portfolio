import styled from "styled-components";

export const Background = styled.div`
  background: #ececec;
  min-height: 200px;
  width: 100vw;
  display: flex;
`;

export const SectionContainer = styled.div`
  width: 82%;
  background: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding-bottom: 2rem;
  box-sizing: border-box;
  @media (max-width: 900px) {
      flex-direction: column;
      width: 99vw;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'JetBrains Mono', Verdana, Arial, sans-serif;
  color: #5cbd95;
  font-size: clamp(1.2rem, 5vw, 2rem);
  margin-left: 5vw;
  margin-bottom: 1rem;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: clamp(1.1rem, 7vw, 1.5rem);
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
`;

export const PapersRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.3rem;
  margin-left: 5vw;
  margin-right: 5vw;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.2rem;
    margin-left: 6vw;
    margin-right: 6vw;
  }
`;

export const CardMediaWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #f3f3f3;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    max-width: 150px;
    max-height: 200px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
  }
`;


export const CardCoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  border-radius: 12px;
  transition: opacity 0.18s;
`;

export const CardVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 12px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 10px 0 rgba(44,62,80,0.09);
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  align-items: stretch;
  transition: box-shadow 0.18s;

  &:hover {
    box-shadow: 0 6px 24px 0 rgba(44,62,80,0.13);
  }

  &:hover ${CardCoverImg} {
    opacity: 0;
  }
  &:hover ${CardVideo} {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const CardContent = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1.1rem 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CardTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  @media (max-width: 700px) {
    justify-content: center;
    text-align: center;
  }
`;

export const CardTitle = styled.div`
  font-size: 1rem;
  font-family: 'Roboto', Verdana, Arial, sans-serif;
  font-weight: 500;
  color: #222;
`;

export const GithubIcon = styled.a`
  color: #4400e6;
  font-size: 1.27rem;
  &:hover {
    color: #5cbd95;
  }
`;

export const CardSubtitle = styled.div`
  font-size: 0.8rem;
  font-family: 'Roboto', Verdana, Helvetica, Arial, sans-serif;
  color: #666;
  margin-bottom: 0.1em;
  @media (max-width: 700px) {
    justify-content: center;
    text-align: center;
  }
`;

export const CardDesc = styled.div`
  font-size: 0.8rem;
  font-family: 'Roboto', Verdana, Helvetica, Arial, sans-serif;
  color: #555;
  margin-top: 0.5em;
`;

export const CardTag = styled.div`
  display: inline-block;
  background: #d4fbe3;
  color: #27ae60;
  font-size: 0.6rem;
  border-radius: 8px;
  padding: 0.12em 0.68em;
  margin-top: 0.3em;
  font-family: 'JetBrains Mono', Verdana, Arial, sans-serif;
  font-weight: 500;
`;
