import * as yup from "yup";

const requiredMessageError = `⚠ Este campo é obrigatório`;
const emailMessageError = `⚠ Email inválido`;
const passwordMatchMessageError = `⚠ Senhas devem ser iguais`;
const passwordMinError = `⚠ A senha deve ter no minimo 6 caracteres`;



export const schemaFormSignup = yup.object().shape({
  email: 
      yup.string()
      .email(emailMessageError)
      .required(requiredMessageError),

  password: 
      yup.string()
      .required(requiredMessageError)
      .min(6, passwordMinError),

  confimPassword: 
      yup.string()
      .required(requiredMessageError)
      .min(6, passwordMinError)
      .oneOf([yup.ref('password'), null], passwordMatchMessageError)
}).required(requiredMessageError);

export const schemaFormSignin = yup.object().shape({
  email: 
      yup.string()
      .email(emailMessageError)
      .required(requiredMessageError),

  password: 
      yup.string()
      .required(requiredMessageError)
      .min(6, passwordMinError)
}).required(requiredMessageError);

export const schemaFormFinishSignup = yup.object().shape({
  firstName: 
    yup.string()
    .required(requiredMessageError),

  lastName: 
    yup.string()
    .required(requiredMessageError)
}).required(requiredMessageError);

export const schemaFormForgotPassword = yup.object().shape({
  email: 
    yup.string()
    .email(emailMessageError)
    .required(requiredMessageError)
})