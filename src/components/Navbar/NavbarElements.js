import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 10;
    z-index: 10;
     
    @media screen and (max-width: 960px) {
        transition:  0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 25px;
    max-width: 1100%
`;

export const NavLogo = styled(LinkR)`
    color: #20B2AA;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    text-align: center;
    margin-left: 20px;
    font-weight: bold;
    font-style: italic;
    text-decoration: none;
    

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #000;
        color: #20B2AA; 
        filter: blur(0.007rem);
        text-shadow: 2px 2px 3px #fff;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 786px){
        display: block;
        position: absolute;
        top: 27px;
        right: 0;
        transform: traslate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointor;
        color: #20B2AA;

    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    

    @media screen and (max-width: 786px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #20B2AA;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2 ease-in-out;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
    &:hover{
        transition: all 0.2 ease-in-out;
        background: #000;
        color: #fff; 
    }

`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    padding: 0px;
    margin-right: 30px;
    list-style: none;
    text-align: center;
    margin-right: 30px;

    @media screen and (max-width: 786px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #20B2AA;
    white-space: nowrap;
    padding: 10px 25px;
    color: #000000;
    text-align: center;
    font-size: 17px;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #20B2AA; 
    }
`;

export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

export const DropDownHeader = styled("div")`
color: #20B2AA;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2 ease-in-out;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
    &:hover{
        transition: all 0.2 ease-in-out;
        background: #000;
        color: #fff; 
    }
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 10px;
  margin: 0;
  padding-left: 1em;
  background: #000;
  //border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #20B2AA;
  font-size: 1.2rem;
  font-weight: 500;
  &:first-child {
    padding-top: 30rem;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover{
        transition: all 0.2 ease-in-out;
        background: #000;
        color: #fff; 
    }


`;
