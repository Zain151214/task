import * as yup from 'yup';

export const LOGIN = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

export const SIGNUP = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Number is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password'), ''], 'Passwords must match'),
  })
  .required();
