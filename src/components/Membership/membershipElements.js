import styled from "styled-components";

export const MembershipContainer = styled.div`
    color: #fff;
    background-color: #000;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const MembershipH1 = styled.h1`
    color: #20B2AA;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #000;
        color: #fff; 
        //filter: blur(0.007rem);
        //text-shadow: 2px 2px 3px #fff;
    }
`;

export const MembershipWrap = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const MembershipRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const ColumnA = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`;

export const ColumnB = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const MembershipP =  styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 35px;
    font-style: oblique;
    color: ${({darkText}) => (darkText ? '#000' : '#fff')};
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

export const MembershipBtn = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const MembershipForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

export const MembershipFormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

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

export const FormH5 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;