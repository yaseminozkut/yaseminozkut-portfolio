import React from 'react'
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll} from 'react-scroll'

export const Navbar = ( {toggle} ) => {
    const name = "<yase>"

    const toggleHome = () =>{
      scroll.scrollToTop()
    }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to = '/' onClick={toggleHome}>
            {name}
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to = 'aboutskills' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'aboutskills' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'education' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'experience' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'projects' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
)
}
