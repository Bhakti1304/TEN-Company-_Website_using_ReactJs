import React, {useState}  from 'react';
import {FaBars} from 'react-icons/fa';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { FaUserAlt } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon,NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, DropDownList, DropDownListContainer, DropDownContainer,DropDownHeader, ListItem } from './NavbarElements';
//import { useState, useEffect } from 'react';

const Navbar = ({toggle}) => {
    const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);


    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" >The Entrepreneurship Network</NavLogo>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem><NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks></NavItem>
                    <NavItem><NavLinks to="online-courses" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Online Courses</NavLinks></NavItem>
                    <NavItem><NavLinks to="internships" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Intenships</NavLinks></NavItem>
                    <NavItem><NavLinks to="more" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    <DropDownContainer>
                        <DropDownHeader onClick={toggling}>More</DropDownHeader>
                        {isOpen && ( 
                        <DropDownListContainer>
                            <DropDownList>
                                <ListItem to="blog">Blog</ListItem>
                                <ListItem>Certifications</ListItem>
                                <ListItem>Alumini Team</ListItem>
                                <ListItem>Forum</ListItem>
                                <ListItem to="hackathon">Hackathon</ListItem> 
                                <ListItem>Membership Registration</ListItem>
                                <ListItem>Campus Ambassador Program</ListItem>
                                <ListItem>Social Media</ListItem>
                                <ListItem>Testimonials</ListItem>
                                <ListItem>Blog</ListItem>
                                <ListItem>Certifications</ListItem>
                                <ListItem>Contact Us</ListItem>
                                </DropDownList>
                                </DropDownListContainer>
                                )}
                                </DropDownContainer>
                            </NavLinks></NavItem>
                    <NavBtn><NavBtnLink to="/mycart"><ShoppingCartIcon /></NavBtnLink></NavBtn>
                </NavMenu>
                <NavBtn><NavBtnLink to="/sign-in"><FaUserAlt />&nbsp;&nbsp;Log In</NavBtnLink></NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
