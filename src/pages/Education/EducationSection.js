import React from "react";
import {
  Background,
  StyledContainer,
  StyledTitle,
  TimelineContainer,
} from "./EducationSectionElements";
import VerticalLineContent from "../../components/Timeline/VerticalLineContent";
import VerticalLineWrapper from "../../components/Timeline/VerticalLineWrapper";

const Education = () => {
  return (
    <Background id="education">
      <StyledContainer>
        <StyledTitle>Education</StyledTitle>
        <TimelineContainer>
          <VerticalLineWrapper>
            <VerticalLineContent position="left">
              <strong style={{"font-size": "1.5rem", color: "#555"}}>The Ohio State University</strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Roboto", "color": "grey", "margin-top": "1px"}}>August 2024 - Expected May 2026 ● Columbus, OH, USA</p>
              <p style={{"fontFamily": "Roboto", color: "#555", "font-size": "1rem",  "margin-bottom": "-8px"}}>M.S in Electrical and Computer Engineering (Second Year)</p>
              <p style={{"font-size": "0.7rem", "padding-left": "0.5rem", "fontFamily": "Roboto", color: "#555"}}> <strong>Course Highlights:</strong> High Performance Deep/Machine Learning, Photogrammetry, Photogrammetric Computer Vision, Machine Learning in Remote Sensing, AI in Medical Imaging, Reinforcement Learning</p>
            </VerticalLineContent>
            <VerticalLineContent position="left">
              <strong style={{"font-size": "1.5rem", color: "#555"}}>Sabancı University</strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Roboto", "color": "grey"}}>September 2019 - February 2024 ● Istanbul, Turkey</p>
              <p style={{"fontFamily": "Roboto", color: "#555", "font-size": "1rem",  "margin-bottom": "-8px"}}>B.S in Computer Science and Engineering</p>
              <p style={{"font-size": "0.7rem", "padding-left": "0.5rem", "fontFamily": "Roboto", color: "#555"}}> <strong>Course Highlights:</strong> Machine Learning, Artificial Intelligence, Network Science, Data Science, Database Systems, Mobile Application Development, Data Structures, Algorithms, Probability, Statistical Modelling, Discrete Mathematics, Software Engineering, Computer Networks</p>
              <p style={{"fontFamily": "Roboto", color: "#555", "font-size": "1rem",  "margin-bottom": "-8px"}}>Minor in Business Analytics, School of Management</p>
              <p style={{"font-size": "0.7rem", "padding-left": "0.5rem", "fontFamily": "Roboto", color: "#555"}}> <strong>Course Highlights:</strong> Introduction to Data Analysis and Research in Business, Introduction to Business Analytics, Optimization Modeling in Business Analytics</p>
            </VerticalLineContent>
          </VerticalLineWrapper>
        </TimelineContainer>
      </StyledContainer>
    </Background>
  );
};
export default Education;
