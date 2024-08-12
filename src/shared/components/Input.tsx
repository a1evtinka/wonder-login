import { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components'

interface IInput extends InputHTMLAttributes<HTMLInputElement>  {
  label: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(function Input(
  { label, ...props },
  ref
) {
  return (
    <label>
      {label}:
      <CustomInput ref={ref} {...props} />
    </label>
  );
});

const CustomInput = styled.input`
    background: none; 
    border: none; 

    padding: 8px; 
    outline: none; 
    color: #ccc; 
    font-size: 16px; 
    border-radius: 10px;
    margin-left: 16px;
`;

export default Input;
