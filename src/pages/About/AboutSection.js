import React from 'react';
import {
  Background, IconLinks, ResumeButton, StyledContainer, StyledImg,
  StyledText, StyledTitle, StyledSubtitle, IconLink, RightColumn, TextBlock, ActionsStack, StyledLink 
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
            Hi! I am <ColorfulText>Yasemin Ozkut</ColorfulText>
          </StyledTitle>
          <StyledSubtitle>
            and I am a{' '}
            <ColorfulText>
              <Typewriter
                words={[' Master\'s Student.', ' AI/ML Enthusiast.', ' Researcher.', ' Developer.', ' Dancer for Fun ;)']}
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
            I am a second-year M.S. student in Electrical and Computer Engineering at The Ohio State University, working as a graduate research assistant in&nbsp; 
            <StyledLink
              href="https://u.osu.edu/pcvlab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PCVLab&nbsp;
            </StyledLink>
            
            
            under the supervision of&nbsp;
            <StyledLink
              href="https://ceg.osu.edu/people/yilmaz.15"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alper Yilmaz
            </StyledLink>.
            With a background in Computer Science and Engineering (Sabanci University), my research focuses on artificial intelligence, deep learning, and machine learning. I am passionate about developing innovative real-world AI/ML solutions, and thrive on learning new things and tackling challenges. I enjoy both independent work and collaborating within diverse teams, and adapt easily to different environments.
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
