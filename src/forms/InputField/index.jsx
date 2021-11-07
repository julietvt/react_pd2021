import React from 'react';
import { Field, ErrorMessage } from 'formik';

function InputField(props){
    const {name, ...rest} = props;
    return(
        <div>
            <Field name={name}>
                {({field, form, meta}) => {
                    return <input {...field} {...rest} />;
                }}
            </Field>
            <ErrorMessage name={props.name} component="div" />
        </div>
    );
}
export default InputField;