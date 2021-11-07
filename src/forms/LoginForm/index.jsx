import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {LOGIN_SCHEMA} from '../../utils/validateLoginForm.js';
import InputField from '../InputField/index.jsx';

function LoginForm(props){
    const loginFromInitialValues = {
        email: '',
        password: '',
    };
    const loginFormHandlerSubmit = (values, formikBag) => {
            console.log('values', values);
            formikBag.resetForm();
    };
    return(
        <Formik
        initialValues={loginFromInitialValues}
        onSubmit = {loginFormHandlerSubmit}
        //validationSchema = {LOGIN_SCHEMA}
        >
        {formikProps => {
            return(
                <Form>
                    <InputField type="text" name="email" placeholder="email"/>
                    <InputField type="password" name="password" placeholder="password"/>
                    <button type="submit">Submit</button>
                </Form>
         );
        }}
        </Formik>
    );
}
export default LoginForm;