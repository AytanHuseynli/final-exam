import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const DisplayingErrorMessagesExample = () => (
    <div>
        <h1>Displaying Error Messages</h1>
        <Formik
            initialValues={{
                username: '',
                email: '',
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="username" />

                    {touched.username && errors.username && <div>{errors.username}</div>}
                    <Field name="email" />

                    {touched.email && errors.email && <div>{errors.email}</div>}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);