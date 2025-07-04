import React from 'react';
import { Background, StyledContainer, StyledImg, StyledText, StyledTitle, ContactRow} from "./ContactSectionElements";
import {FaRegEnvelope, FaPhoneAlt} from 'react-icons/fa';


const Contact = () => {

    return(
    
        <Background id='contact'>
            <StyledImg src={require("../../img/contact.PNG")}></StyledImg>
            <StyledContainer>
                <StyledTitle style={{"margin-bottom": "1rem"}}>Contact Me </StyledTitle>
                <StyledText>
                <ContactRow>
                    <FaRegEnvelope />
                    <span>ozkutyasemin@gmail.com <br /> ozkut1@osu.edu</span>
                </ContactRow>
                <ContactRow>
                    <FaPhoneAlt />
                    <span>+1 614 702-0362</span>
                </ContactRow>
                </StyledText>
            </StyledContainer>
        </Background>
    );
}
export default Contact;