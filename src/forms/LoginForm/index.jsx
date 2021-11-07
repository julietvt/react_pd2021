import React from 'react';
import {Formik, Form, Field} from 'formik';
import {LOGIN_SCHEMA} from '../../utils/validateLoginForm.js';

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
        validationSchema = {LOGIN_SCHEMA}>
        {formikProps => {
            return(
                <Form>
                    <input type="text" name="email" />
                    <Field type="text" name="email" />
                    <br />
                    <input type="password" name="password" />
                    <Field type="password" name="password" />
                    <br />
                    <button type="submit">Submit</button>
                </Form>
         );
        }}
        </Formik>
    );
}
export default LoginForm;