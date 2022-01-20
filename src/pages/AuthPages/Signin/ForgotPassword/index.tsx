import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button, ButtonSimple } from "../../../../components/UI/Button";
import { Input } from "../../../../components/UI/Input";
import { useAuth } from "../../../../hooks/useAuth";
import { schemaFormForgotPassword } from "../../../../utils/schemasYup";
import { FormContainer } from "../../styles";


import { ForgotPasswordContainer, StepsContainer } from './style';

export function ForgotPassword() {

  const history = useHistory();
  

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schemaFormForgotPassword),
  })
 
  const [stepCurrent, setStepCurrent] = useState(1);

  function nextStep() {
    setStepCurrent(2)
  }

  const { 
    sendPasswordResetEmail
  } = useAuth();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: any) => {
    setLoading(true)

    console.log(data);
    nextStep()
    sendPasswordResetEmail(data.email).then(() => {nextStep()}).finally(() => {setLoading(false)});
  }

  return (
    <ForgotPasswordContainer>

      {
        stepCurrent === 1 ? (
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <h1>Recuper de senha</h1>

            <Input 
              registerAndErros={ {'register': register, 'errors': errors} }
              name="email" title="Email" 
            />
            <Button title="Enviar →" isLoading={loading} />
            <ButtonSimple title="Cancelar" secondary onclick={ () => history.goBack() }/>

          </FormContainer>
        ) : (
          <>
            <svg width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M89.1399 14L108.51 28.1305L132.49 28.0863L139.854 50.9045L159.28 64.9613L151.827 87.75L159.28 110.539L139.854 124.596L132.49 147.414L108.51 147.369L89.1399 161.5L69.7695 147.369L45.7897 147.414L38.4257 124.596L19 110.539L26.4524 87.75L19 64.9613L38.4257 50.9045L45.7897 28.0863L69.7695 28.1305L89.1399 14Z" fill="#1A7BE2" stroke="#151617" stroke-width="14.75" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M62.6875 88.5L81.125 106.938L118 70.0625" stroke="#151617" stroke-width="14.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h1>Enviado!</h1>

            <ButtonSimple title="Fazer login" onclick={ () => history.push('/login') }/>
            <ButtonSimple title="Enviar novamente" secondary onclick={ () => setStepCurrent(1) }/>
          </>
        )
      }
      <StepsContainer>

      </StepsContainer>
    </ForgotPasswordContainer>
  )
}