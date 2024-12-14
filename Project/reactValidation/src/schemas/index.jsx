import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.'),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.'),
});


export const WaterScheme = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.'),
});