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
              <NavLinks to = '/currentstats'>Current Stats</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = '/community'>Community</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = '/teams'>Teams</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = '/referee'>Referees</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
)
}
