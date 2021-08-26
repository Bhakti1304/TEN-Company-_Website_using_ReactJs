import React from 'react';
import { ContactUsContainer, ContactUsH1, ContactUsRow, ContactUsWrapper, ContactUsP, ColumnX, ColumnY, CForm, Form, FormH5, FormInput, FormLabel, FormButton } from './contactUsElements';
import Zoom from 'react-reveal/Zoom';
const ContactUs = () => {
    return (
        <>
        <Zoom>
        <ContactUsContainer>
            <ContactUsH1>Contact Us</ContactUsH1>
            <ContactUsWrapper>
            <ContactUsRow>
            <ColumnX>
                <CForm>
                <Form action='#'>
                    <FormH5>If you have any query about TEN, please fill in your details in the form bellow and you will get response.</FormH5>
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='name' require />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' require />
                        <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                        <FormInput type='number' require />
                        <FormLabel htmlFor='for'>Message</FormLabel>
                        <FormInput type='text'/>
                        <FormButton type='submit'> Submit </FormButton>
                    </Form>
                </CForm>
                </ColumnX>
            <ColumnY>
            <textWrap>
                <ContactUsP>
                    Email:
                    hr.contact.ten@gmail.com <br />

                    Phone:
                    +918595986120 <br />

                    Address: Delhi
                </ContactUsP>
            </textWrap>
            </ColumnY>
            </ContactUsRow>
            </ContactUsWrapper>
        </ContactUsContainer>
        </Zoom>
            
        </>
    )
}

export default ContactUs
