import styled from 'styled-components';

export const Blogcontainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const BlogWrap = styled.div`
    max-width: 100000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const BlogCard = styled.div`
    background: #20B2AA;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale()(1.02);
        transition: all 1s ease-in-out;
        cursor: pointer;
        
    }
`
export const BlogH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #20B2AA; 
        //filter: blur(0.007rem);
        text-shadow: 2px 2px 3px #fff;
    }
`;

export const BlogName = styled.h3`
    font-size: 1.1rem;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const BlogAuthorName = styled.div`
    font-size: 0.7rem;
    text-align: center;
    font-style: oblique;
`;

export const BlogDetails = styled.div`
    font-size: 1.1rem;
    text-align: center;
    
`;

export const Icons = styled.div`
    align-items: flex-end;
    cursor: pointer;
    display: flex;

    &:hover{
        color: #fff;
    }

`