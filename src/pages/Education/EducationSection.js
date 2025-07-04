import React from "react";
import {
  Background,
  StyledContainer,
  StyledTitle,
  EduList,
  EduItem,
  EduLogo,
  EduTextBlock,
  EduDegree,
  EduSchool,
  EduDate,
  EduMinor
} from "./EducationSectionElements";
import osuLogo from "../../img/osu_logo.png";
import sabanciLogo from "../../img/sabanci_logo.png";

const Education = () => (
  <Background id="education">
    <StyledContainer>
      <StyledTitle>Education</StyledTitle>
      <EduList>
        <EduItem>
          <EduLogo src={osuLogo} alt="Ohio State University Logo" />
          <EduTextBlock>
            <EduDegree>
              M.Sc. in Electrical and Computer Engineering
            </EduDegree>
            <EduSchool>The Ohio State University</EduSchool>
            <EduDate>August 2024 — Present</EduDate>
          </EduTextBlock>
        </EduItem>
        <EduItem>
          <EduLogo src={sabanciLogo} alt="Sabancı University Logo" />
          <EduTextBlock>
            <EduDegree>
              B.Sc. in Computer Science and Engineering
            </EduDegree>
            <EduSchool>Sabancı University</EduSchool>
            <EduMinor>Minor in Business Analytics</EduMinor>
            <EduDate>September 2019 — February 2024</EduDate>
          </EduTextBlock>
        </EduItem>
      </EduList>
    </StyledContainer>
  </Background>
);

export default Education;
