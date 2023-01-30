import React from "react";
import {
  Background,
  StyledContainer,
  StyledTitle,
  TimelineContainer,
} from "./ExperienceSectionElements";
import VerticalLineContent from "../../components/Timeline/VerticalLineContent";
import VerticalLineWrapper from "../../components/Timeline/VerticalLineWrapper";

const Experience = () => {
  return (
    <Background>
      <StyledContainer>
        <StyledTitle>Experience</StyledTitle>
        <TimelineContainer>
          <VerticalLineWrapper>
            <VerticalLineContent position="left">
              <strong style={{"font-size": "1.5rem"}}>Further Network</strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Sans-serif", "color": "grey"}}>July – August  2022 ● Istanbul, Turkey (Online)</p>
              <p style={{"fontFamily": "Sans-serif", color: "#555", "font-size": "1.2rem"}}>Front End Developer Intern</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Gained knowledge about React Native by improving Furtherpass application which aims to provide easy travel planning in the new pandemic conditions such as finding laboratories for testing. </p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Worked on front-end application development.</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Added password show-hide feature and navigation of registered but not activated users to email confirmation.</p>
            </VerticalLineContent>
            <VerticalLineContent position="left">
              <strong style={{"font-size": "1.5rem"}}>Monovi</strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Sans-serif", "color": "grey"}}>January - February 2022 ● Izmir, Turkey (Online)</p>
              <p style={{"fontFamily": "Sans-serif", color: "#555", "font-size": "1.2rem"}}>Computer Science Intern</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Gained basic knowledge about SQL, PowerApps, and Balsamiq and implemented our knowledge by designing a warehouse management system as a group in 2 weeks internship. </p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Wrote business analysis document as a group. Explained our purpose, scope, and process flow diagrams.</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Designed a database and ERD in MSSQL, an application MockUp in Balsamiq, and the application itself in PowerApps with low code for warehouse management system as a group. </p>
            </VerticalLineContent>
          </VerticalLineWrapper>
        </TimelineContainer>
      </StyledContainer>
    </Background>
  );
};
export default Experience;
