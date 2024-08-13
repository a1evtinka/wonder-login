import { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, IInput>((
  {
    label, ...props
  },
  ref,
) => (
  <Container>
  <LabelWrapper>
    <Label>{label}:</Label>
  </LabelWrapper>
  <InputWrapper>
    <CustomInput ref={ref} {...props} />
  </InputWrapper>
</Container>
));

const Container = styled.div`
  display: flex;
  width: 70%;
  justify-items: space-evenly;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px; 
  box-sizing: border-box;
  width: 100px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Label = styled.span`
  font-size: 16px;
  color: #fff;
`;

const CustomInput = styled.input`
  background: none;
  border: none;
  outline: none;
  color: #ccc;
  font-size: 16px;
  border-radius: 10px;
  width: 100%; 
`;

export default Input;
