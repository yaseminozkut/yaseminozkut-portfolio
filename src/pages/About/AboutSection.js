import React from 'react';
import { Background, ResumeButton, StyledContainer, StyledImg, StyledText, StyledTitle } from "./AboutSectionElements";
import resume from '../../img/Yasemin Ozkut CV.pdf'

const About = () => {

    return(
    
        <Background>
            <StyledImg src={require("../../img/Image.png")}></StyledImg>
            </StyledContainer>
        </Background>
    );
}
export default About;