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
            I'm a second-year M.S. student in Electrical and Computer Engineering at The Ohio State University, working on deep learning and multi-modal learning models in&nbsp;
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
            </StyledLink>.
            My background is in Computer Science and Engineering (Sabanci University).
            Currently, I'm researching multi-modal learning and vision-language models. Outside of my research, I enjoy exploring agentic LLM frameworks (e.g., LangChain, LangGraph) and building AI-powered projects. I love picking up new topics and enjoy both independent and team projects.
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
              <StyledCircle>Pandas</StyledCircle>
              <StyledCircle>NumPy</StyledCircle>
              <StyledCircle>Scikit-learn</StyledCircle>
              <StyledCircle>Git</StyledCircle>
              <StyledCircle>SLURM</StyledCircle>
              <StyledCircle>Linux (CLI)</StyledCircle>
              <StyledCircle>Deep/Machine Learning</StyledCircle>
              <StyledCircle>Distributed Training</StyledCircle>
              <StyledCircle>Multi-modal Learning</StyledCircle>
              <StyledCircle>Computer Vision</StyledCircle>
              <StyledCircle>Vision-Language Models</StyledCircle>
              <StyledCircle>Prompt Engineering & AI-Assisted Coding</StyledCircle> 
              <StyledCircle>OOP</StyledCircle> 
            </Cols>
        </Right>
      </StyledContainer>
    </Background>
  );
};

export default AboutSkillsSection;
