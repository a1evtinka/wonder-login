import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components'

interface IInput extends ButtonHTMLAttributes<HTMLButtonElement>  {
  label: string;
}

function Button(
  { label, ...props }: IInput
) {
  return (
      <CustomButton {...props} >
        {label}
      </CustomButton>
  );
}

const CustomButton = styled.button`
    marginTop: '16px'
`;

export default Button;
