import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';


export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 10000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesWrapper1 = styled.div`
    max-width: 10000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;


export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 300;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    animation-name: inherit;

    &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

`;
export const ServicesCard1 = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 300;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    opacity: 0.5;

    &:hover{
        opacity: 1;
    }

`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`;

export const ServicesH1 =styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #000;
        color: #20B2AA; 
        //filter: blur(0.007rem);
        //text-shadow: 2px 2px 3px #fff;
    }
`;

export const ServicesH2 =  styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const ServiceBtn = styled.div`
    height: 35px;
    margin-top: 15px;
`;

export const ServiceBtnLink = styled(LinkS)`
    color: #000;
    background-color: #20B2AA;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    border-radius: 50px;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
    &:hover{
        transition: all 0.2 ease-in-out;
        background: #20B2AA;
        color: #fff; 
    }

`;