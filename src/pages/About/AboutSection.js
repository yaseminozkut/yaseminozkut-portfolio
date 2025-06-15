import React from 'react';
import {
  Background, AboutRow, FlippingProfileContainer, TextBlock,
  StyledTitle, StyledSubtitle, ActionsStack, IconLinks, IconLink
} from "./AboutSectionElements";
import FlippingProfile from "./FlippingProfileEffect";
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";

function ColorfulText({ children }) {
  return <span style={{ color: '#5cdb95' }}>{children}</span>;
}

const About = () => (
  <Background id="about">
    <AboutRow>
      <FlippingProfileContainer>
        <FlippingProfile />
      </FlippingProfileContainer>
      <TextBlock>
        <StyledTitle>
          Hi! I am <ColorfulText>Yasemin Ozkut</ColorfulText>
        </StyledTitle>
        <StyledSubtitle>
          and I am a{' '}
          <ColorfulText>
            <Typewriter
              words={[
                ' M.S. Student @ OSU',
                ' ML/AI Enthusiast',
                ' Researcher',
                ' Developer',
                ' Dancer for Fun ;)'
              ]}
              loop={'infinite'}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </ColorfulText>
        </StyledSubtitle>
      </TextBlock>
      <ActionsStack>
        <IconLinks>
          <IconLink>
            <a href="https://github.com/yaseminozkut" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ color: "#ececec" }} />
            </a>
          </IconLink>
          <IconLink>
            <a href="https://www.linkedin.com/in/yaseminozkut/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ color: "#ececec" }} />
            </a>
          </IconLink>
          <IconLink>
            <a href="yaseminozkut_resume.pdf" target="_blank" rel="noopener noreferrer">
              <TbFileCv style={{ color: "#ececec" }} />
            </a>
          </IconLink>
        </IconLinks>
      </ActionsStack>
    </AboutRow>
  </Background>
);

export default About;
