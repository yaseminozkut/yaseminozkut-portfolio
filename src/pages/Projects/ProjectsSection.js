import React from "react";
import {
  Background,
  IconLink,
  StyledContainer,
  StyledTitle,
  TimelineContainer,
} from "./ProjectsSectionElements";
import VerticalLineContent from "../../components/Timeline/VerticalLineContent";
import VerticalLineWrapper from "../../components/Timeline/VerticalLineWrapper";
import {FaGithub} from 'react-icons/fa';

const Projects = () => {
  return (
    <Background id="projects">
      <StyledContainer>
        <StyledTitle>Project Highlights</StyledTitle>
        <TimelineContainer>
          <VerticalLineWrapper>
            <VerticalLineContent position="left">
              <strong style={{"font-size": "1.5rem"}}>Agile Full Stack Software Development Project <IconLink> <a href='https://github.com/yaseminozkut/Team28---Make-Football-Great-Again---MFGA.git' target="_blank"><FaGithub style={{"color": "black", "size": "lg"}}></FaGithub></a></IconLink> </strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Sans-serif", "color": "grey"}}>October 2022-January 2023</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Implemented a full stack web application for Turkish Football Federation with MongoDB, Express.JS, React.JS, Node.JS. </p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Designed a better Turkish Football Federation site including statistics, data for visualization, better referee assignments, and better GUI design. </p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Learned the concepts of version control, scrum meetings, handling sprints, deployment; enhanced teamwork skills; and learned full stack web development from scratch. </p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Done automated testing with Selenium and API documentation with Swagger. </p>
            </VerticalLineContent>
            <VerticalLineContent position="left">
              <strong style={{"font-size": "1.5rem"}}>Computer Networks Course Client-Server Application Project <IconLink> <a href='https://github.com/yaseminozkut/Client-Server-Multiplayer-Quiz-Game-Socket-Programming.git' target="_blank"><FaGithub style={{"color": "black", "size": "lg"}}></FaGithub></a></IconLink></strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Sans-serif", "color": "grey"}}>October 2022-January 2023</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Implemented client-server multiple player simple quiz game GUI application using C# and TCP sockets. </p>
            </VerticalLineContent>
            <VerticalLineContent position="left">
              <strong style={{"font-size": "1.5rem"}}>Mobile Programming Course Social Media App Term Project <IconLink> <a href='https://github.com/yaseminozkut/CS310-Meta-Social-Media-Group27.git' target="_blank"><FaGithub style={{"color": "black", "size": "lg"}}></FaGithub></a></IconLink></strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Sans-serif", "color": "grey"}}>February 2022-June 2022</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Implemented a Social Media Application with Flutter. </p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Understand the logic behind interface design, validation checks, Firebase Analytics, Firebase Crashlytics, Firebase core, authentication etc. </p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Create a well-designed social media interface and link it to Firebase backend service. </p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Enhanced the team-work skills. </p>
            </VerticalLineContent>
            <VerticalLineContent position="left">
              <strong style={{"font-size": "1.5rem"}}>Data Science Course Term Project, Sabancı University 	<IconLink> <a href='https://github.com/yaseminozkut/CS210-Data-Science/blob/main/IMDB%20Movies%20Project/Project_Final_Report.ipynb' target="_blank"><FaGithub style={{"color": "black", "size": "lg"}}></FaGithub></a></IconLink></strong>
              <p style={{"font-size": "0.7rem", "fontFamily": "Sans-serif", "color": "grey"}}>November 2021-December 2021</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Learned more about exploratory data analysis, hypothesis testing, and machine learning models for data science.</p>
              <p style={{"font-size": "1rem", "padding-left": "2rem", "fontFamily": "Sans-serif", color: "#555"}}> ● Worked on a group term project about predicting the Metascores of the movies with Python using different machine learning models which were linear regression, random forest, and kNN models.  </p>
            </VerticalLineContent>
          </VerticalLineWrapper>
        </TimelineContainer>
      </StyledContainer>
    </Background>
  );
};
export default Projects;
