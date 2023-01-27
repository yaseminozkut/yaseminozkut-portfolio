import styled from "styled-components";
import {Button} from "reactstrap";

export const Background = styled.div`
    background: #4400e6;
    display: flex;
    position: relative;
    height: 600px;
    z-index: 1;
    padding: 0 30px;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 25%;
  height: 25vw;
  width: 25vw;
  right: 1%;
`;

export const StyledContainer = styled.div`
  position: relative;
  top: 10rem;
  left: 5%;
  width: fit-content;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;

export const StyledTitle = styled.p`
  position: relative;
  font-size: 4.5vw;
  font-weight: bold;

  color: #ececec;
  width: fit-content;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
`;

export const StyledText = styled.p`
  position: relative;
  font-size: 1rem;

  color: #ececec;
  font-family: 'JetBrains Mono', Roboto,"proxima nova bold","Helvetica Neue",Helvetica,Arial,Sans-serif;
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