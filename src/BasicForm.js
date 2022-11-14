import { useFormik } from "formik";
import * as yup from 'yup';
import './App.css';

const formValidationSchema = yup.object({
    email: yup
        .string()
        .required('why not email?')
        .min(5, "need a email with more than 5 characters"),
    password: yup
        .string()
        .required('password is must')
        .min(5)
        .max(12),
});

export function BasicForm() {
    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log('form values:', values);
        },
    });

    return (
        <form onSubmit={handleSubmit} className='user-form'>
            <input
                name='email'
                type='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.email}
            <input
                name='password'
                type='password'
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.password}

            values
            <pre>{JSON.stringify(values)}</pre>
            errors
            <pre>{JSON.stringify(errors)}</pre>
            touched
            <pre>{JSON.stringify(touched)}</pre>

            <button type='submit'>submit</button>
        </form>
    );
}
