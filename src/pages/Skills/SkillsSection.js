import React from 'react';
import { Background, StyledCircle, StyledContainer, StyledImg, StyledText, StyledTitle, Grid, Cols, Cols2} from "./SkillsSectionElements";
import { Typewriter } from 'react-simple-typewriter';
import wave from "../../img/wave.svg";


const Skills = () => {

    return(
    
        <Background>
            <StyledContainer>
            <img src={wave} alt='waves' width="1600"></img>
                <StyledTitle>Skills</StyledTitle>
                <Grid>
                    <StyledText size='md'>Programming Languages:</StyledText>
                    <Cols>
                        <StyledCircle>C++</StyledCircle>
                        <StyledCircle>Python</StyledCircle>
                        <StyledCircle>C#</StyledCircle>
                        <StyledCircle>Dart</StyledCircle>
                    </Cols>
                </Grid>
                <Grid>
                    <StyledText>Front-End:</StyledText>
                    <Cols2>
                        <StyledCircle>React.JS</StyledCircle>
                        <StyledCircle>Flutter</StyledCircle>
                    </Cols2>
                </Grid>
                <Grid>
                    <StyledText>Back-End:</StyledText>
                    <Cols2>
                        <StyledCircle>Node.JS</StyledCircle>
                        <StyledCircle>Express.JS</StyledCircle>
                    </Cols2>
                </Grid>
                <Grid>
                    <StyledText>Database:</StyledText>
                    <Cols2>
                        <StyledCircle>MongoDB</StyledCircle>
                        <StyledCircle>SQL</StyledCircle>
                        <StyledCircle>Firebase</StyledCircle>
                    </Cols2>
                </Grid>
                <Grid>
                    <StyledText>General:</StyledText>
                    <Cols2>
                        <StyledCircle>Git</StyledCircle>
                        <StyledCircle>Postman</StyledCircle>
                        <StyledCircle>Data Structures</StyledCircle>
                        <StyledCircle>Algorithms</StyledCircle>
                        <StyledCircle>OOP</StyledCircle>
                        <StyledCircle>Web Developement</StyledCircle>
                        <StyledCircle>Socket Programming</StyledCircle>
                    </Cols2>
                </Grid>
            </StyledContainer>
        </Background>
    );
}
export default Skills;