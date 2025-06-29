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
              <NavLinks to = 'about' activeClass="active" smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'skills' activeClass="active" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'projects' activeClass="active" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'papers' activeClass="active" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Papers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'contact' activeClass="active" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
)
}
