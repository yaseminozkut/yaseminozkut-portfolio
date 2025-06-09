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
            With a background in Computer Science and Engineering (Sabanci University), my research focuses on artificial intelligence, deep learning, and machine learning.
            I am currently working on implementing multi-modal report generation models using paired X-ray images and radiology reports. In addition, I am participating in the&nbsp;
            <StyledLink
              href="https://www.nasa-beyond-challenge.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NASA Beyond the Algorithm Challenge&nbsp; 
            </StyledLink>
            as part of a team focused on flood analysis from satellite imagery using neuromorphic computing. I am also learning about agentic large language models (LLMs) with frameworks such as LangChain and LangGraph to deepen my understanding of advanced AI systems. As a side project, I am collaborating with friends to build AI-powered iOS applications.
            I am passionate about building real-world, AI/ML solutions. I thrive on continuous learning and tackling new challenges, and I make it a priority to stay up to date with emerging concepts in the field. I enjoy working independently as well as collaborating within diverse teams, and I adapt quickly to new environments.
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
              <StyledCircle>Keras-OCR</StyledCircle>
              <StyledCircle>OpenCV</StyledCircle>
              <StyledCircle>Hugging Face</StyledCircle>
              <StyledCircle>Pandas</StyledCircle>
              <StyledCircle>NumPy</StyledCircle>
              <StyledCircle>Scikit-learn</StyledCircle>
              <StyledCircle>Matplotlib</StyledCircle>
              <StyledCircle>Git</StyledCircle>
              <StyledCircle>SLURM</StyledCircle>
              <StyledCircle>Linux (CLI)</StyledCircle>
              <StyledCircle>Deep/Machine Learning</StyledCircle>
              <StyledCircle>Distributed Training</StyledCircle>
              <StyledCircle>Multi-modal Learning</StyledCircle>
              <StyledCircle>Vision-Language Models</StyledCircle>
              <StyledCircle>Computer Vision</StyledCircle>
              <StyledCircle>Object Detection</StyledCircle>
              <StyledCircle>Segmentation</StyledCircle>
              <StyledCircle>Image Processing</StyledCircle>
              <StyledCircle>Network Analysis</StyledCircle>
              <StyledCircle>Data Visualization</StyledCircle>
              <StyledCircle>OOP</StyledCircle>
              <StyledCircle>Data Structures</StyledCircle>
              <StyledCircle>Algorithms</StyledCircle>
              <StyledCircle>React.js</StyledCircle>
              <StyledCircle>CSS</StyledCircle>
            </Cols>
        </Right>
      </StyledContainer>
    </Background>
  );
};

export default AboutSkillsSection;
