import React from 'react';
import { Background, IconLinks, ResumeButton, StyledContainer, StyledImg, StyledText, StyledTitle, IconLink} from "./AboutSectionElements";
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../img/Yasemin Ozkut Resume.pdf';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

function ColorfulText({children}) {
    return <span style={{color: '#5cdb95'}}>{children}</span>;
  }

const About = () => {

    return(
    
        <Background id='about'>
            <StyledImg src={require("../../img/Image.png")}></StyledImg>
            <ResumeButton href={resume} download="Yasemin Ozkut Resume">Download Resume</ResumeButton>
            <IconLinks>
                <IconLink> 
                    <a href='https://github.com/yaseminozkut' target="_blank"><FaGithub style={{"color": "#ececec", "size": "lg"}}></FaGithub></a>
                </IconLink>
                <IconLink> 
                    <a href='https://www.linkedin.com/in/yaseminozkut/' target="_blank"><FaLinkedin style={{"color": "#ececec", "size": "lg"}}></FaLinkedin></a>
                </IconLink>
                <IconLink> 
                    <a href='https://www.instagram.com/yaseminozkut/' target="_blank"><FaInstagram style={{"color": "#ececec", "size": "lg"}}></FaInstagram></a>
                </IconLink>
            </IconLinks>
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
                <StyledText>I am a senior Computer Science and Engineering student at Sabancı University. I am passionate about design and software engineering. I am a fast learner and I am eager to learn new things and take challenges. I love to work both in a team and by myself, so I can easly adapt in both situations. </StyledText>
            </StyledContainer>
        </Background>
    );
}
export default About;