import React from 'react';
import { Background, ResumeButton, StyledContainer, StyledImg, StyledText, StyledTitle } from "./AboutSectionElements";
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../img/Yasemin Ozkut CV.pdf'

function ColorfulText({children}) {
    return <span style={{color: '#cbfe51'}}>{children}</span>;
  }

const About = () => {

    return(
    
        <Background>
            <StyledImg src={require("../../img/Image.png")}></StyledImg>
            <StyledContainer>
                <StyledTitle style={{"margin-bottom": "1rem"}}>Hi, I am <ColorfulText>Yasemin Özkut</ColorfulText></StyledTitle>
                <StyledTitle style={{"font-size": "2.5vw"}}>and I am a 
                    <ColorfulText>
                        <Typewriter
                                words={[' CS Student.', ' Developer.', ' Dancer for Fun ;)']}
                                loop={'infinite'}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                    </ColorfulText>
                </StyledTitle>
                <StyledText>I am a senior Computer Science and Engineering student at Sabancı University.</StyledText>
            </StyledContainer>
        </Background>
    );
}
export default About;