import React, {useState} from "react";
import { Background, StyledContainer, StyledImg, StyledText, StyledTitle } from "./HomepageElements";
import { Typewriter } from 'react-simple-typewriter'
import Sidebar from "../../components/Sidebar/Sidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import About from "../About/AboutSection";
import AboutSkills from "../AboutSkills/AboutSkillsSection";
import Skills from "../Skills/SkillsSection";
import Education from "../Education/EducationSection";
import Experience from "../Experience/ExperienceSection";
import Projects from "../Projects/ProjectsSection";
import Papers from "../Papers/PapersSection";
import Contact from "../Contact/ContactSection";

function ColorfulText({children}) {
    return <span style={{color: '#cbfe51'}}>{children}</span>;
  }

const Homepage = () => {
    const [isOpen, setIsOpen] =  useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <About id='about'/>
            <AboutSkills id='aboutskills'/>
            <Projects/>
            <Papers/>
            {/*
                <Education/>
                <Experience/>
                <Projects/>
                <Contact/>
            */}
            

        </>
        /*
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
        */
    );
}

export default Homepage;
