import styled from "styled-components";

export const CampusContainer = styled.div`
    color: #000;
    background-color: #fff;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;
export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 5px;
`;

export const FormButton = styled.button`
    background: #20B2AA;
    padding: 16px 0;
    border: none;
    color: #000;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: #fff;
    }
`;

export const CampusForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

export const CampusFormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 80px;
    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const Form = styled.form`
    background: #000;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const CampusH1 = styled.h1`
    color: #20B2AA;
    font-size: 48px;
    text-align: center;
    padding-bottom: 50px;
    padding-top: 50px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #000; 
        //filter: blur(0.007rem);
        //text-shadow: 2px 2px 3px #fff;
    }
`;