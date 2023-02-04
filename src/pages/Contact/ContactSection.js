import React from 'react';
import { Background, StyledContainer, StyledImg, StyledText, StyledTitle} from "./ContactSectionElements";
import {FaRegEnvelope} from 'react-icons/fa';

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