import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput,FormLabel, FormWrap, Text, Icon  } from './SigninElements';


const SigninPage = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">TEN</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' require />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' require />
                        <FormButton type='submit'> Continue </FormButton>
                        <Text>Forgot Password?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SigninPage