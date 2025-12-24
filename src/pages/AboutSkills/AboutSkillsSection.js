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
            I'm a second-year MS student in Electrical and Computer Engineering at The Ohio State University, with a BS in Computer Science and Engineering from Sabanci University. My focus is on  multimodal learning, vision-language models, and computer vision. Currently, I'm a full-time Computer Vision Engineer Intern at&nbsp;
            <StyledLink
              href="https://ubihere.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4400e6", textDecoration: "underline" }}
            >
              Ubihere
            </StyledLink>
            ,&nbsp;building person re-identification systems for multi-camera tracking. I'm also developing an intelligent dashboard that learns customer camera environments.
            I worked on deep learning and multi-modal learning models at&nbsp; Previously, I worked on medical imaging research at&nbsp;
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
            </StyledLink>, with a paper in revision at Nature Scientific Data.
            My background is in Computer Science and Engineering (Sabanci University).
            I'm passionate about bridging research and production—turning experimental models into deployable systems. Seeking full-time AI/ML roles starting May 2026.
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
              <StyledCircle>Flask</StyledCircle>
              <StyledCircle>Docker</StyledCircle>
              <StyledCircle>REST API</StyledCircle>
              <StyledCircle>LangGraph</StyledCircle>
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
