import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksWrapper, FooterLink, FooterLinkTitle, FooterLinkItems, FooterLinksContainer, SocialIconLink, SocialLogo, SocialIcons, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How It works</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Inventors</FooterLink>
                                <FooterLink to="/">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Internships</FooterLinkTitle>
                                <FooterLink to="/signin">What are those</FooterLink>
                                <FooterLink to="/signin">Courses</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destination</FooterLink>
                                <FooterLink to="/">Sponserships</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">LinkedIn</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">YouTube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> 
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            TEN                    
                        </SocialLogo>
                        <WebsiteRights>©{new Date().getFullYear()} Limitless Technologies -The Entrepreneurship Network</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/https://www.facebook.com/pages/category/Education-Website/The-Entrepreneurship-Network-105155667888383/' target="_blank" area_label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/https://www.linkedin.com/company/the-entrepreneurship-network/mycompany/' target="_blank" area_label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='/https://www.youtube.com/channel/UCuP4Sn3dHXrhj6DW_pm6YFg' target="_blank" area_label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/https://twitter.com/We_Are_TEN' target="_blank" area_label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
