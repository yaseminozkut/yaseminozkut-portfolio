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
            I'm a second-year MS student at The Ohio State University, focusing on computer vision, machine learning, and multimodal learning (VLMs). Currently, I'm a full-time Computer Vision Engineer Intern at&nbsp;
            <StyledLink
              href="https://ubihere.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4400e6", textDecoration: "underline" }}
            >
              Ubihere
            </StyledLink>
            ,&nbsp;working on multi-camera systems for tracking, re-identification, and spatial analysis. 
            Previously, I did reaserch at&nbsp;
            <StyledLink
              href="https://u.osu.edu/pcvlab/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4400e6", textDecoration: "underline" }}
            >
              PCVLab
            </StyledLink>
            &nbsp;as a GRA, with&nbsp;
            <StyledLink
              href="https://ceg.osu.edu/people/yilmaz.15"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4400e6", textDecoration: "underline" }}
            >
              Alper Yilmaz
            </StyledLink>, working on computer vision and multimodal learning for medical imaging. We have a dataset paper in revision at Nature Scientific Data, and our dataset has 6K+ downloads on Hugging Face.
            I like turning research into real systems and experimenting with new tech—recently built a robotics app integrating LLMs and computer vision for the Reachy Mini robot. 
            Looking for full-time AI/ML roles starting May 2026.
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
              <StyledCircle>Git</StyledCircle>
              <StyledCircle>SLURM</StyledCircle>
              <StyledCircle>Flask</StyledCircle>
              <StyledCircle>Docker</StyledCircle>
              <StyledCircle>LangGraph</StyledCircle>
              <StyledCircle>Prompt Engineering</StyledCircle> 
              <StyledCircle>Deep/Machine Learning</StyledCircle>
              <StyledCircle>Distributed Training</StyledCircle>
              <StyledCircle>Agents</StyledCircle>
              <StyledCircle>Multi-modal Learning</StyledCircle>
              <StyledCircle>Computer Vision</StyledCircle>
              <StyledCircle>LLMs/VLMs</StyledCircle>
            </Cols>
        </Right>
      </StyledContainer>
    </Background>
  );
};

export default AboutSkillsSection;
