import styled from "styled-components";
import {Button} from "reactstrap";

export const Background = styled.div`
    background: #4400e6;
    display: flex;
    position: relative;
    height: 200px;
    z-index: 1;
    padding: 0 30px;
    @media (max-width: 900px) {
      height: 150px;
      padding-bottom: 5%;    
    }
`;

export const StyledImg = styled.img`
  position: absolute;
  height: 10vw;
  width: 10vw;     
  top: 5%;
  right: 10%;
  @media (max-width: 900px) {
    height: 12vw;
    width: 12vw;   
    right: 15%;  
  }
  
`;

export const StyledContainer = styled.div`
  position: relative;
  left: 13%;
  width: 60rem;
  height: 200px;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
  @media (max-width: 900px) {
    font-size: clamp(1.1rem, 7vw, 1.5rem);
    left: 0%;
    margin-left: 0;            
    width: 100%;               
    text-align: center;
    height: 150px;
    padding-bottom: 5%;           
  }
`;

export const StyledTitle = styled.p`
  position: relative;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ececec;
  width: fit-content;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
  @media (max-width: 900px) {
    font-size: clamp(1.1rem, 7vw, 1.5rem);
    margin-left: 0;            
    width: 100%;               
    text-align: center;       
  }
`;

export const StyledText = styled.p`
  position: relative;
  font-size: 1rem;

  color: #ececec;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
  @media (max-width: 900px) {          
    text-align: center;
    justify-content: center;       
  }
`;

export const ResumeButton = styled(Button)`
  position: absolute;
  border-radius: 0.2rem;
  top: 90%;
  right: 8%;
  font-size: 1rem;
  color: black;
  font-weight: bold;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  background-color: #5cbd95;
  text-decoration: none;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;

  &:hover{
    background-color: white;
  }
`;

export const IconLinks = styled.div`
  position: absolute;
  top: 95%;
  right: 8.5%;
  height:5rem;
  width: 8rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  display: inline-block;
  display: grid;
  grid-template-columns: 40px 40px 40px;
  grid-gap: 10px;
`;

export const IconLink = styled.div`
  position: relative;

  height:5rem;
  text-decoration: none;
  font-size: 30px;

  &:hover{
    {
      transform: translateY(-2px)
    }
  }
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start; /* left align by default */

  @media (max-width: 900px) {
    justify-content: center;  /* center on small screens */
  }

  margin-top: 0.4rem;
`;
