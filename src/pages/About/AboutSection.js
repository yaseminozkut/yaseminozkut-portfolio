import React from 'react';
import {
  Background, IconLinks, ResumeButton, StyledContainer, StyledImg,
  StyledText, StyledTitle, StyledSubtitle, IconLink, RightColumn, TextBlock, ActionsStack, HeroRow, TitleSubtitleBlock
} from "./AboutSectionElements";
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../img/Yasemin Ozkut Resume.pdf';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";

function ColorfulText({ children }) {
  return <span style={{ color: '#5cdb95' }}>{children}</span>;
}

const About = () => {
  return (
    <Background id='about'>
      <StyledContainer>
        <TextBlock>
          <StyledTitle>
            Hi, I am <ColorfulText>Yasemin Ozkut</ColorfulText>
          </StyledTitle>
          <StyledSubtitle>
            and I am a{' '}
            <ColorfulText>
              <Typewriter
                words={[' CS Student.', ' Developer.', ' Dancer for Fun ;)']}
                loop={'infinite'}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </ColorfulText>
          </StyledSubtitle>
          <StyledText>
            I am a senior Computer Science and Engineering student at Sabancı University. I am passionate about design and software engineering. I am a fast learner and I am eager to learn new things and take challenges. I love to work both in a team and by myself, so I can easily adapt in both situations.
          </StyledText>
        </TextBlock>
      </StyledContainer>
      <RightColumn>
        <StyledImg src={require("../../img/Image.png")} alt="Profile" />
        <ActionsStack>
          <IconLinks>
            <IconLink>
              <a href='https://github.com/yaseminozkut' target="_blank" rel="noopener noreferrer">
                <FaGithub style={{ color: "#ececec" }} />
              </a>
            </IconLink>
            <IconLink>
              <a href='https://www.linkedin.com/in/yaseminozkut/' target="_blank" rel="noopener noreferrer">
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
      </RightColumn>
    </Background>
  );
};
export default About;
