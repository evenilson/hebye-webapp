// import { ChangeEventHandler } from 'react';
import { ButtonSigninWithGoogleStyle, ButtonStyle } from './style';

interface ButtonProps {

  disabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset" | undefined;

  title?: string;
  onChange?: (value: string) => void;
}

interface ButtonSigninWithGoogle {
  onClick: () => Promise<void>;
  isLoading: boolean;
}

export function Button({
  isLoading = false,
  title,
  disabled = false,
  type = 'submit',
}: ButtonProps) {

  return (
    <ButtonStyle type={type} className={isLoading ? 'loading' : ''} disabled={disabled} >
      {title}
    </ButtonStyle>
  );
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
