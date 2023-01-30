import React from 'react';
import { Background, IconLinks, ResumeButton, StyledContainer, StyledImg, StyledText, StyledTitle, IconLink} from "./ContactSectionElements";
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../img/Yasemin Ozkut CV.pdf';
import {FaRegEnvelope} from 'react-icons/fa';

function ColorfulText({children}) {
    return <span style={{color: '#5cdb95'}}>{children}</span>;
  }

const Contact = () => {

    return(
    
        <Background id='contact'>
            <StyledImg src={require("../../img/contact.PNG")}></StyledImg>
            <StyledContainer>
                <StyledTitle style={{"margin-bottom": "1rem"}}>Contact Me </StyledTitle>
                <StyledText> <FaRegEnvelope></FaRegEnvelope> &emsp; ozkutyasemin@gmail.com </StyledText>
                <StyledText> <FaRegEnvelope></FaRegEnvelope> &emsp; yozkut@sabanciuniv.edu </StyledText>
            </StyledContainer>
        </Background>
    );
}
export default Contact;