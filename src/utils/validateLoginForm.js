import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().email().required,
  password: yup.string().min(8).max(20).required(),
});
