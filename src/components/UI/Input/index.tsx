// import { ChangeEventHandler } from 'react';
import { InputStyle } from './style';

interface InputProps {
  value?: string;
  id?: string;
  className?: string;
  name?: string;
  disabled?: boolean;
  type?: string;
  title?: string;
  onChange?: (value: string) => void;
}

export function Input({
  id,
  name,
  value,
  onChange,
  type,
  title,
  disabled = false,
}: InputProps) {

  // const dots = (phone: string) => {
  //   return (
  //     phone.replace(/(\d{5})/, '$1-')
  //   );
  // };

  // const mask = (phone?: string) => {
  //   if (!phone) return '';

  //   return dots(phone);
  // };

  // const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   const changedValue = e.target.value.replace(/[^\d]/g, '');

  //   if (onChange) {
  //     onChange(changedValue);
  //   }
  // };

  return (
    <InputStyle>
      <label>
        {title}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        // onChange={handleChange}
        value={value}
        disabled={disabled}
      />
    </InputStyle>
  );
}
