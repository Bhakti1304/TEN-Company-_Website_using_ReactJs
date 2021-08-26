import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #000;
`;

export const CartWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    } 
`

export const Icon = styled.h1`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const CartP = styled(Link)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;


    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;
 export const CartH2 = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
`;