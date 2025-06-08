import React from 'react';
import { Background, StyledCircle, StyledContainer, StyledText, StyledTitle, Grid, Cols, Cols2} from "./SkillsSectionElements";
import {ReactComponent as ReactLogo} from '../../img/wave.svg';

const Skills = () => {

    return(
    
        <Background id='skills'>
            <StyledContainer>
            <ReactLogo flex="1"></ReactLogo>
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
                    <Cols>
                        <StyledCircle>React.JS</StyledCircle>
                        <StyledCircle>Flutter</StyledCircle>
                    </Cols>
                </Grid>
                <Grid>
                    <StyledText>Back-End:</StyledText>
                    <Cols>
                        <StyledCircle>Node.JS</StyledCircle>
                        <StyledCircle>Express.JS</StyledCircle>
                    </Cols>
                </Grid>
                <Grid>
                    <StyledText>Database:</StyledText>
                    <Cols>
                        <StyledCircle>MongoDB</StyledCircle>
                        <StyledCircle>SQL</StyledCircle>
                        <StyledCircle>Firebase</StyledCircle>
                    </Cols>
                </Grid>
                <Grid>
                    <StyledText>General:</StyledText>
                    <Cols style={{width: "90%"}}>
                        <StyledCircle>Git</StyledCircle>
                        <StyledCircle>Postman</StyledCircle>
                        <StyledCircle>Data Structures</StyledCircle>
                        <StyledCircle>Algorithms</StyledCircle>
                        <StyledCircle>OOP</StyledCircle>
                        <StyledCircle>Web Developement</StyledCircle>
                        <StyledCircle>Socket Programming</StyledCircle>
                    </Cols>
                </Grid>
            </StyledContainer>
        </Background>
    );
}
export default Skills;