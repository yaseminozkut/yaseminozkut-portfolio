import React from 'react'
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

export const Navbar = ( {toggle} ) => {
    const name = "<yase>"
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to = '/'>
            {name}
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to = '/about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = '/mycv'>My CV</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = '/contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
)
}
