import React from 'react';
import {
  Background,
  StyledContainer,
  Left,
  Right,
  StyledTitle,
  StyledText,
  StyledLink,
  Grid,
  Cols,
  StyledCircle
} from "./AboutSkillsSectionElements";
import {ReactComponent as ReactLogo} from '../../img/wave.svg';

const AboutSkillsSection = () => {
  return (
    <Background id="aboutskills">
    <ReactLogo flex="1"></ReactLogo>
      <StyledContainer>
        <Left>
          <StyledTitle>About</StyledTitle>
          <StyledText>
            I'm a second-year M.S. student in Electrical and Computer Engineering at The Ohio State University, working on deep learning and multi-modal learning models in&nbsp;
            <StyledLink
              href="https://u.osu.edu/pcvlab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PCVLab&nbsp;
            </StyledLink>
            as a GRA, under the supervision of&nbsp;
            <StyledLink
              href="https://ceg.osu.edu/people/yilmaz.15"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alper Yilmaz
            </StyledLink>.
            My background is in Computer Science and Engineering (Sabanci University).
            Currently I'm implementing multi-modal model for generating medical reports from X-rays. Additionally, my team is preparing to compete in&nbsp;
            <StyledLink
              href="https://www.nasa-beyond-challenge.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NASA's Beyond the Algorithm Challenge
            </StyledLink>
            , tackling flood analysis using satellite imagery with neuromorphic computing. On the side, I'm exploring agentic LLMs (LangChain, LangGraph) and building AI-powered iOS apps with friends. I love picking up new topics and enjoy both independent and team projects.
          </StyledText>
        </Left>
        <Right>
          <StyledTitle>Highlighted Skills</StyledTitle>
            <Cols>
              <StyledCircle>Python</StyledCircle>
              <StyledCircle>C++</StyledCircle>
              <StyledCircle>PyTorch</StyledCircle>
              <StyledCircle>CUDA</StyledCircle>
              <StyledCircle>YOLO</StyledCircle>
              <StyledCircle>OpenCV</StyledCircle>
              <StyledCircle>Hugging Face</StyledCircle>
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
              
            </Cols>
        </Right>
      </StyledContainer>
    </Background>
  );
};

export default AboutSkillsSection;
