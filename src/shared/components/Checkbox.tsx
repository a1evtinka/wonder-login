import { InputHTMLAttributes } from 'react';
import styled from 'styled-components'

interface IInput extends InputHTMLAttributes<HTMLInputElement>  {
  label: string;
}

function Checkbox(
  { label, ...props }: IInput
) {
  return (
    <label>
      {label}:
      <CustomInput type="checkbox" {...props} />
    </label>
  );
}

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

export default Checkbox;
