import React from 'react';
import {
  Background,
  StyledContainer,
  Left,
  Right,
  StyledTitle,
  StyledText,
  StyledLink,
  Cols,
  StyledCircle
} from "./AboutSkillsSectionElements";
import {ReactComponent as ReactLogo} from '../../img/wave.svg';

const AboutSkillsSection = () => {
  return (
    <Background>
    <ReactLogo flex="1"></ReactLogo>
      <StyledContainer>
        <Left id="about">
          <StyledTitle>About Me</StyledTitle>
          <StyledText>
            I'm a second-year M.S. student in Electrical and Computer Engineering at The Ohio State University. I worked on deep learning and multi-modal learning models at&nbsp;
            <StyledLink
              href="https://u.osu.edu/pcvlab/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4400e6", textDecoration: "underline" }}
            >
              PCVLab
            </StyledLink>
            &nbsp;as a GRA, under the supervision of&nbsp;
            <StyledLink
              href="https://ceg.osu.edu/people/yilmaz.15"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4400e6", textDecoration: "underline" }}
            >
              Alper Yilmaz
            </StyledLink>. Currently, I am interning as AI Engineer at&nbsp; 
            <StyledLink
              href="https://ubihere.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4400e6", textDecoration: "underline" }}
            >
              Ubihere
            </StyledLink>, working on LLMs and agentic framework (e.g., LangChain, LangGraph).
            My background is in Computer Science and Engineering (Sabanci University).
            Additionally, I'm researching multi-modal learning and vision-language models. Beyond my research and internship, I enjoy keeping up with cutting-edge AI developments and building hands-on AI projects. I love picking up new topics and enjoy both independent and team projects.
          </StyledText>
        </Left>
        <Right id="skills">
          <StyledTitle>Highlighted Skills</StyledTitle>
            <Cols>
              <StyledCircle>Python</StyledCircle>
              <StyledCircle>C++</StyledCircle>
              <StyledCircle>PyTorch</StyledCircle>
              <StyledCircle>CUDA</StyledCircle>
              <StyledCircle>YOLO</StyledCircle>
              <StyledCircle>OpenCV</StyledCircle>
              <StyledCircle>Hugging Face</StyledCircle>
              <StyledCircle>Unsloth</StyledCircle>
              <StyledCircle>Pytorch Lightning + Hydra</StyledCircle>
              <StyledCircle>Pandas</StyledCircle>
              <StyledCircle>NumPy</StyledCircle>
              <StyledCircle>Scikit-learn</StyledCircle>
              <StyledCircle>Git</StyledCircle>
              <StyledCircle>SLURM</StyledCircle>
              <StyledCircle>Linux (CLI)</StyledCircle>
              <StyledCircle>OOP</StyledCircle> 
              <StyledCircle>AI-Assisted Coding</StyledCircle> 
              <StyledCircle>Prompt Engineering</StyledCircle> 
              <StyledCircle>Deep/Machine Learning</StyledCircle>
              <StyledCircle>Distributed Training</StyledCircle>
              <StyledCircle>Agents</StyledCircle>
              <StyledCircle>Multi-modal Learning</StyledCircle>
              <StyledCircle>Computer Vision</StyledCircle>
              <StyledCircle>LLMs</StyledCircle>
              <StyledCircle>Vision-Language Models</StyledCircle>
            </Cols>
        </Right>
      </StyledContainer>
    </Background>
  );
};

export default AboutSkillsSection;
