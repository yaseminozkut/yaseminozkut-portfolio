import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';



export const Nav = styled.nav`   
    background: #4400e6;
    height: 4rem;
    /* margin-top: -80px; */
    width: 100%;
    display: inline-block;
    justify-content:center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;


    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`;


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    z-index: 1;

    padding: 0 1.6rem;
    max-width: 100%;

`;

export const NavLogo = styled(LinkR)`
    color: #5cbd95;
    justify-self: flex-start;
    cursor: pointer;

    font-size: 2.5rem;
    font-family: 'JetBrains Mono', Roboto, "proxima nova bold", "Helvetica Neue", Helvetica, Arial, Sans-serif;
    
    display: flex;
    align-items: center;
    margin-left: 1.6rem;
    margin-bottom: 1rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: #fff;
    }
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 65%;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: rgba(0,0, 0,0.6);;
    }
`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 3rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 3rem;
`;

export const NavLinks = styled(LinkS)`
    color: #5cbd95;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding:0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'JetBrains Mono', Roboto, "proxima nova bold", "Helvetica Neue", Helvetica, Arial, Sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    &:hover {
        color: #fff;
        border-bottom: 3px solid white;
    }

    &.active{
        border-bottom: 3px solid #5cbd95;
    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #EAE7E7;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`