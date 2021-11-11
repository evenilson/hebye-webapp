// import { ChangeEventHandler } from 'react';
import { ButtonSigninWithGoogleStyle, ButtonStyle } from './style';

interface ButtonProps {

  disabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  secondary?: boolean;
  title?: string;
  onChange?: (value: string) => void;
}

interface ButtonSimpleProps {
  onclick: () => void;
  disabled?: boolean;
  title: string;
  secondary?: boolean;
}

interface ButtonSigninWithGoogle {
  onClick: () => void;
  isLoading?: boolean;
}

export function Button({
  isLoading = false,
  title,
  disabled = false,
  type = 'submit',
  secondary = false,
}: ButtonProps) {

  return (
    <ButtonStyle type={type} className={isLoading ? secondary ? 'loading secondary' : 'loading' : ''} disabled={disabled || isLoading} >
      {title}
    </ButtonStyle>
  );
}

export function ButtonSimple({
  onclick,
  disabled = false,
  title,
  secondary = false,
}: ButtonSimpleProps){
  return (
    <ButtonStyle disabled={disabled} onClick={() => onclick()} className={secondary ? 'secondary' : ''}>
      {title}
    </ButtonStyle>
  )
}

export function ButtonSiginWithGoogle({
  onClick,
  isLoading = false,
}: ButtonSigninWithGoogle){
  return (
    <ButtonSigninWithGoogleStyle type="button" onClick={ () => onClick()} disabled={isLoading} className={isLoading ? 'loading' : '' }> 
      Faça login no Google
    </ButtonSigninWithGoogleStyle>
  )
}
