// import { ChangeEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { InputStyle } from './style';


interface InputProps {
  value?: string;
  id?: string;
  className?: string;
  name: string;
  disabled?: boolean;
  type?: string;
  registerAndErros?: { register: UseFormRegister<Record<string, any>>, errors: { [x: string]: any;}};
  title?: string;
  onChange?: (value: string) => void;
}

export function Input({
  name,
  value,
  type,
  title,
  registerAndErros,
  disabled = false,
}: InputProps) {

  return (
    <InputStyle>
      <label id={name}>
        {title}
        <input
          id={name}
          type={type}
          {...registerAndErros?.register(name)}
          value={value}
          disabled={disabled}
        />
      </label>
      {registerAndErros?.errors[name] && <span>{registerAndErros.errors[name].message}</span>}
    </InputStyle>
  );
}
