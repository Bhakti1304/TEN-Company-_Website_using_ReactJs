import React from 'react';
import {CampusForm, CampusFormContent, Form, CampusH1, FormInput, FormLabel, FormButton, CampusContainer} from './CampusElements'

const index = () => {
    return (
        <CampusContainer>
        <CampusForm>
                <CampusFormContent>
                <CampusH1>Register Here</CampusH1>
                    <Form action='#'>
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='name' require />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' require />
                        <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                        <FormInput type='number' require />
                        <FormButton type='submit'> Apply </FormButton>
                    </Form>
                </CampusFormContent>
            </CampusForm>
        </CampusContainer>
    )
}

export default index
