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
    <Background>
      <StyledContainer>
        <StyledTitle>Education</StyledTitle>
        <TimelineContainer>
          <VerticalLineWrapper>
            <VerticalLineContent position="left">
              <strong style={{"font-size": "1.5rem"}}>Sabancı University</strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Sans-serif", "color": "grey"}}>3.58/4.00 ● 2019 - Expected February 2024 ● Istanbul, Turkey</p>
              <p style={{"fontFamily": "Sans-serif", color: "#555", "font-size": "1.2rem"}}>B.S in Computer Science and Engineering, Faculty of Engineering and Natural Sciences (Senior)</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> <strong>Course Highlights:</strong> Introduction to programming with Python, Advanced Programming with C++, Data Science, Database Systems, Mobile Application Development, Data Structures, Probability, Statistical Modelling, Discrete Mathematics, Software Engineering, Computer Networks, Algorithms, Machine Learning</p>
              <p style={{"fontFamily": "Sans-serif", color: "#555", "font-size": "1.2rem"}}>Minor in Business Analytics, School of Management</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> <strong>Course Highlights:</strong> Introduction to Data Analysis and Research in Business, Introduction to Business Analytics, Optimization Modeling in Business Analytics</p>
            </VerticalLineContent>
            <VerticalLineContent position="right">
              <strong style={{"font-size": "1.5rem"}}>Sev American College</strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Sans-serif", "color": "grey"}}>2014 - 2019 ● Istanbul, Turkey</p>
            </VerticalLineContent>
          </VerticalLineWrapper>
        </TimelineContainer>
      </StyledContainer>
    </Background>
  );
};
export default Education;
