import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {  homeObjTwo, homeObjThree, homeObjOne, homeObjFour, homeObjFive, homeObjsix, homeObjSeven, homeObjEight, homeObjNine } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Blog from '../components/Blog/Blog';
import Membership from '../components/Membership';
import ContactUs from '../components/contactUs';
import Campus from '../components/Campus';


const Home = () => {
    const [isOpen, setIsOpen] =useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObjFive} />
        <InfoSection {...homeObjsix} />
        <Membership />
        <InfoSection {...homeObjSeven} />
        <InfoSection {...homeObjEight} />
        <InfoSection {...homeObjNine} />
        <Campus />
        <InfoSection {...homeObjThree} />
        <Blog />
        <ContactUs />
        <Footer />
        </>
    );
};

export default Home

