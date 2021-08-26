import React from 'react';
import { MembershipContainer, MembershipH1, MembershipWrap, MembershipRow, ColumnA, ColumnB, MembershipP, FormButton, FormLabel, FormInput, MembershipBtn, MembershipForm,MembershipFormContent, Form, FormH5, TextWrapper } from './membershipElements';

const Membership = () => {
    return (
        <>
        <MembershipContainer>
        <MembershipH1>Membership Registration</MembershipH1>
        <MembershipWrap>
                <MembershipRow>
                <ColumnB>
                <TextWrapper>
                <MembershipP>We, at The Entrepreneurship Network (TEN), have always been interested in associating ourselves with young professionals that show a constant zeal to learn and improve themselves. We therefore extend a cordial invitation to you to join our society.
​We are one of the fastest growing edu-tech startups in the world that not only provides you an opportunity to upskill yourself in the hottest technologies present today but also assist you in getting a job that complements that skill-set.
The membership starts as low as INR 100/- (RUPEES ONE HUNDRED ONLY). Register and pay today to start exploring an ocean of opportunities.
That's not it, become a member for an year and enjoy a free access to all courses, at an introductory price of INR 10000/- (RUPEES TEN THOUSAND ONLY). 
HURRY UP!!! DON'T FORGET TO SCAN AND PAY FOR COMPLETING YOUR REGISTRATION.
                </MembershipP>
                <MembershipBtn></MembershipBtn>
                </TextWrapper>
                </ColumnB>
            <ColumnA>
            <MembershipForm>
                <MembershipFormContent>
                    <Form action='#'>
                    <FormH5>If you would like to be a part of TEN, please fill in your details in the form bellow and you will be automatically registered.</FormH5>
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='name' require />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' require />
                        <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                        <FormInput type='number' require />
                        <FormButton type='submit'> Register </FormButton>
                    </Form>
                </MembershipFormContent>
            </MembershipForm>
            </ColumnA>
            </MembershipRow>
            </MembershipWrap>
        </MembershipContainer>
            
        </>
    )
}

export default Membership
