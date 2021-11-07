import * as yup from 'yup';

export default {
  LoginSchem: yup.object().shape({
    email: yup.string().email().required,
    password: yup.string().min(8).max(20).required(),
  }),
  RegistrationSchem: yup.object().shape({
    email: yup.string().email('check your email').required('email is required'),
    password: yup.string().matches().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')]),
    firstName: yup.string().test().required(),
    lastName: yup.string().test().required(),
    role: yup
      .string()
      .required()
      .matches(/(customer|creator|buyer)/),
    agreeWithTerms: yup.boolean().required(),
  }),
  MessagesSchem: yup.object().shape({
    msg: yup.string().required(),
  }),
};
