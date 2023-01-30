import React from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu } from "./SidebarElements";

const Sidebar = ( {isOpen, toggle} ) => {
  return (
    <SidebarContainer isOpen = {isOpen}  onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
          <SidebarLink to="education" onClick={toggle}>Education</SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
